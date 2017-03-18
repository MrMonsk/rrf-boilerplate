import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styles from './App.sass';
import Navbar from '../components/Navbar';

class App extends Component {

  render() {
    const homeLinks = {
      'Form': '/form',
      'No Match': '/404'
    }
    return(
      <div className='container'>
        <div className='flex-util-center'>
          <h1>
            RRF Boilerplate
          </h1>
        </div>
        <Navbar logo='Home' links={homeLinks} />
        {this.props.children}
      </div>
    )
  }
}

export default App;
