import React, { Component } from 'react';


class CSV extends Component {

  constructor(props){
    super(props);
    this.state = {
    	filePathValue: '',

    }
        this.uploadCSV = this.uploadCSV.bind(this);
        this.handleFilePathChange = this.handleFilePathChange.bind(this);


  }

  uploadCSV(event){
  	console.log(this.state.filePathValue);
  	event.preventDefault();
  }

  handleFilePathChange(event){
  	this.setState({filePathValue: event.target.value});
  }



  render () {
    return (
    	<div>
	      <h3>Welcome to the CSV Page</h3>
	     	<form onSubmit={this.uploadCSV}>
	        <label>
	          Select File:
	          <input type="text" value={this.state.filePathValue} onChange={this.handleFilePathChange} />
	        </label>
	        <input type="submit" value="Submit" />
	      </form>
      </div>
    );
  }
}

export default CSV;