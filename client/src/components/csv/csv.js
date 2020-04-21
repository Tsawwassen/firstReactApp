import React, { Component } from 'react';
import CSVReader from 'react-csv-reader'


class CSV extends Component {



  constructor(props){
    super(props);
    this.state = {
    	filePathValue: '',
    	papaparseOptions: {
	    	header: true,
	    	dynamicTyping: true,
	    	skipEmptyLines: true,
	    	transformHeader: header =>
	      	header
	        	.toLowerCase()
	        	.replace(/\W/g, '_')
	  		}	

    }


  	this.handleFileUpload = this.handleFileUpload.bind(this);
  	this.handleFileError = this.handleFileUpload.bind(this);


  }

	handleFileUpload(csvData, fileInfo){
		console.log(csvData);

		//Send list of names to backend server
		//On the server, for each name sent, create the next id, and add it to the database

		const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(csvData)
    };
    
    fetch('/api/customers/batch', requestOptions)
        .then(response => response.json())
        .then(data => {
        	console.log(data);
        });

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
			        parserOptions={this.state.papaparseOptions}
			        inputId="csv"
     				/>
      </div>
    );
  }
}

export default CSV;