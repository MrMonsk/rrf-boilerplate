import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styles from './App.sass';

import Form from '../components/Form';

class App extends Component {

  render() {

    const style = {
      textAlign: 'center'
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // height: 900
    }

    return(
      <div style={style}>
        <h1>
          RRF Boilerplate
        </h1>
        <Form />
      </div>
    )
  }
}

export default App;
