import React, {Component, Fragment} from 'react';
import superagent from 'superagent';

import SearchForm from './search-form';
import SearchResultList from './search-result-list';

import '../style/app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      input: '',
      limit: '',
    };
    this.handleTopicChange = this.handleTopicChange.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
    this.handleRedditSubmit = this.handleRedditSubmit.bind(this);
    this.handleTopicsRender = this.handleTopicsRender.bind(this);
  }

  handleTopicChange(event) {
    this.setState({input: event.target.value});
  }

  handleLimitChange(event) {
    this.setState({limit: event.target.value});
  }

  handleRedditSubmit(event) {
    event.preventDefault();
    superagent.get(`https://www.reddit.com/r/${this.state.input}.json?limit=${this.state.limit}`)
      .then(response => {
        this.setState({topics: response.body.data.children});
        this.handleTopicsRender();
      })
      .catch(error => {
        this.setState({topics: []});
      });
      
  }

  //try and move this into search result list  DANGER
  handleTopicsRender() {
    return this.state.topics.map((topic, index) => (
      <li key={index}>
        <a target="blank" href={topic.data.url}>{topic.data.title}<p>Up Votes: {topic.data.ups}</p></a>
      </li>
    ));
  }

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <h1>What is cracking?</h1>
        <SearchForm 
          topicChange={this.handleTopicChange}
          limitChange={this.handleLimitChange}
          handleSubmit={this.handleRedditSubmit}
        />
        <SearchResultList
        
          renderResults={this.handleTopicsRender}
        />
      </Fragment>
    );
  }

}

