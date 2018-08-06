import React, {Component, Fragment} from 'react';

import '../style/app.scss';


export default class SeachForm extends Component {
  
  render() {
    const {topicChange, limitChange, handleSubmit, errorHandle} = this.props;
    return(
      <Fragment>
        <form onSubmit={handleSubmit} >
          <input 
            className= {errorHandle ? 'error' : ''}
            type='text' 
            placeholder='What do you want?' 
            onChange={topicChange}
          />
          <input 
            className= {errorHandle ? 'error' : ''}
            type='number' 
            placeholder='1-100' 
            min='1' 
            max='100' 
            onChange={limitChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </Fragment>
    );
  }
}