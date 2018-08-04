import React, {Component, Fragment} from 'react';

export default class SearchResultList extends Component {

  render() {
    const {renderResults} = this.props;
    return(
      <ul>
        {renderResults()}
      </ul>
    );
  }
}
