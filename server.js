 const express = require('express');
 const app = express();

 // require bodyParser
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

 var mongojs = require('mongojs');
//Used the create ObjectID to search the _id field
var ObjectId = require('mongojs').ObjectID;
var db = mongojs('react', ['reactCollection']);
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/loginapp');


//Get all customers from database
app.get('/api/customers/all', (req, res) => {
	db.reactCollection.find({}, (err, docs) => {
		if(err){
			console.log(err);
		}
		else {
			res.json(docs);
		}
	})
});

//Add a customer to the database
app.post('/api/customers', (req, res) => {
	//res.json({reply: "hello from server"});

	db.reactCollection.insert(req.body, (err, docs) =>{
		if(err){
			console.log(err);
		}
		else {
			res.json({reply: "added"})
		}
	});
});

//Using the `` allows you to use ${var} in the string
//Helps aboid the trouble of adding to a string
//Note, the ` is the tilda key, not '
const port = 5000;
app.listen(port, () => console.log(`server started on ${port}`));