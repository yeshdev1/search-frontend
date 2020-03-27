import React from 'react';
import './App.css';
import axios from 'axios';

import SearchField from './searchField.js';
import './searchField.css';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };

    this.handleIndexWebPages = this.handleIndexWebPages.bind(this);
    this.handleIndexTestPages =  this.handleIndexTestPages.bind(this);
  }

  request(endpoint) {
    axios
      .get(endpoint)
      .then(res => {
        if(res.status === 200) this.setState({ isLoading: false })
      });
  }

  handleIndexWebPages() {
    this.setState(
      {isLoading: true},
      this.request("http://localhost:5000/index_data")
    );
  }

  handleIndexTestPages() {
    this.setState(
      {isLoading: true},
      this.request("http://localhost:5000/search_benchmark_index")
    );
  }

  render() {
    if (this.state.isLoading === false) {
      return (
        <div className="buttons">
          <input type='button' value="Index web pages" className="submit-button" onClick={this.handleIndexWebPages} />
          <input type='button' value="Index Test Time documents" className="submit-button" onClick={this.handleIndexTestPages} />
        </div>
      )
    }
    else {
      return (
        <div>Indexing Please Wait And Do not click anything</div>
      )
    }
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Buttons />
          <SearchField />
        </header>
      </div>
    );
  }
}
