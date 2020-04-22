import React, { Component } from 'react';
import CSVReader from 'react-csv-reader'

/**************************************88
*
* CSV Component is used to upload a file, parse the file, and upload the file data to the backend server
*
****************************************/
class CSV extends Component {

  constructor(props){
    super(props);
    this.state = {
    	filePathValue: '',
    }

    //Expected headers that should be in the CSV file
		//this.EXPECTED_HEADER = [ "test", "name"].sort(); //BUG - Logic to check header is removing the headers when sending data to the server

		//Headers received from CSV file
		//this.receivedHeader = []; //BUG - Logic to check header is removing the headers when sending data to the server

		//CSV Parser options
		this.papaparseOptions = {
	    header: true, 
	    dynamicTyping: true,
	    skipEmptyLines: true,
	    transformHeader: (header) => (
	    	//This callback function is called once for each header in the CSV file (header: true)
	     	header
	     	.toLowerCase()
	     	.replace(/\W/g, '_')

      	//Push headers to receivedHeader array
        //this.receivedHeader.push(header); //BUG - Logic to check header is removing the headers when sending data to the server

    	)
  	}

  	/** Component Function binds **/
  	this.handleFileUpload = this.handleFileUpload.bind(this);
  	this.handleFileError = this.handleFileUpload.bind(this);
  }

  //Handle file data
	handleFileUpload(csvData, fileInfo){

		// Note about keys
		//-------------------------
		//Gets keys for a given JSON object
		//console.log(Object.keys(csvData[0]));
		//console.log(csvData);
		//console.log(fileInfo);

		// Note about checking headers //BUG - Logic to check header is removing the headers when sending data to the server
		//-------------------------
		//The below logic will test if the received header is the same as the expected header.
		//The expected header is sorted when it is initialized, and the received header is checked before the two are compared
		//I'm not sure how I feel about converting them to a string, then comparing them, but it works
		//
		//This also asumes that the CSV files does not have any other headers.
		//Better option would to see if the received headers included expected headers 
		//console.log( JSON.stringify(this.EXPECTED_HEADER) === JSON.stringify(this.receivedHeader.sort()) );

		//Send list of names to backend server
		//On the server, for each name sent, create the next id, and add it to the database

		//Fetch options
		const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(csvData)
    };

    fetch('/api/customers/batch', requestOptions)
      .then(response => response.json())
      .then(data => {
       	console.log(data);
    	}
    );
  }

	handleFileError(event){
		console.log("error");
	}

  render () {
    return (
    	<div>
	      <h3>Welcome to the CSV Page</h3>
	           <CSVReader
        			cssClass="csv-reader-input"
			        label="Select CSV"
			        onFileLoaded={this.handleFileUpload}
			        onError={this.handleFileError}
			        parserOptions={this.papaparseOptions}
			        inputId="csv"
     				/>
      </div>
    );
  }
}

export default CSV;