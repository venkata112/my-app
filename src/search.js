import React, { Component } from 'react';
import SearchInput from './searchInput';
import List from './List';
import './search.css'

class Search extends Component {
    render() {
      return (
          <div className = "main">
          <div className = "SearchInput">
          <SearchInput />
          </div>
          <div className = "List">
          <List/>
            </div>
        </div>
      );
    }
  }
  
  export default Search;