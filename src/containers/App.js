import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styles from './App.sass';

class App extends Component {

  render() {
    return(
      <div className="container">
        <div className='flex-util-center'>
          <h1>
            RRF Boilerplate
          </h1>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default App;
