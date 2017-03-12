import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styles from './App.sass';

import Form from '../components/Form';

class App extends Component {

  render() {
    return(
      <div className="container">
        <div className='flex-util-center'>
          <h1>
            RRF Boilerplate
          </h1>
        </div>
        <Form />
      </div>
    )
  }
}

export default App;
