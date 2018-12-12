import React, { Component } from 'react';

class SearchInput extends Component {
    constructor(){
        super();
        this.state = { 
            search : ''
        }

    }

    handlChange = (e) =>{
        e.preventDefault()
        console.log(e.target.value)
        this.setState({search:e.target.value})
    }

    handleSubmit = (e) => {
        console.log(this.state.search)
    }
    render() {
      return (
          <div>
        <div> SearchInput Component </div>
        {this.state.search}
        <form>
            <input type="text" name = "search" placeholder = "type here" onChange = {this.handlChange}/>&nbsp;&nbsp;&nbsp;
            <input type = "submit" value = "Submit" />
        </form>
        </div>
      );
    }
  }
  
  export default SearchInput;