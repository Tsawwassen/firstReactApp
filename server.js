 const express = require('express');

 const app = express();

app.get('/api/customers', (req, res) => {
	const customers = [
		{id: 1, firstname: 'john1'},
		{id: 2, firstname: 'john2'},
		{id: 3, firstname: 'john3'}
	]
	res.json(customers);
});

 const port = 5000;

 //Using the `` allows you to use ${var} in the string
 //Helps aboid the trouble of adding to a string
 //Note, the ` is the tilda key, not '
 app.listen(port, () => console.log(`server started on ${port}`));