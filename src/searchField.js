import React from 'react';
import './searchField.css';
import Item from './item.js';
import axios from 'axios';

export default class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      search_query: '',
      documents: []
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(event) {
    this.setState({search_query: event.target.value});
  }

  handleSubmit(event) {
    axios
      .get("http://localhost:5000/search", {
        params: {
          query: this.state.search_query
        }
      })
      .then(res => this.setState({documents: res.data}));
    event.preventDefault();
  }

  document_list () {
    return this.state.documents.map((document)  => (
      <Item key={document} item={document} />
    ));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-orientation">
          <div className="prettify-search-text-button">
            <div className="search-text-font">
              Search Climate Change Articles
            </div>
            <textarea type="text" name="search" className="text-area" value={this.state.search_query} onChange={this.handleSearch} />
          </div>
          <input type="submit" value="Submit" className="submit-button" />
        </form>
        <div className="list">
          {this.document_list()}
        </div>
      </div>
    );
  }
}
