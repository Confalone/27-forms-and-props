import React, {Component, Fragment} from 'react';

import '../style/app.scss';


export default class SeachForm extends Component {
  
  render() {
    const {topicChange, limitChange, handleSubmit} = this.props;
    return(
      <Fragment>
        <form onSubmit={handleSubmit} className="error">
          <input type='text' placeholder='What do you want?' onChange={topicChange}/>
          <input type='number' placeholder='1-100' min='1' max='100' onChange={limitChange}/>
          <button type='submit'>Submit</button>
        </form>
      </Fragment>
    );
  }
}