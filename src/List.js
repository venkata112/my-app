import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
    constructor(){
        super();
        this.state = { 
            data : []
        }

    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data);
            this.setState({data:response.data})
        })
    }


    getData = () =>{
        console.log(this.state.data[0].body);
    }
    render() {
      return (
          <div>
        <div> List Component </div>
        <button onClick = {this.getData} > getData </button>
        </div>
      );
    }
  }
//   <div> id: {this.state.data[0].userId} </div>
//   
  export default List;