import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styles from './App.sass';
import Navbar from '../components/Navbar';
import Start from '../components/Start';

class App extends Component {

  render() {
    const homeLinks = {
      'Keen' : '/keen'
    }
    return(
      <div className='container'>
        <div className='flex-util-center'>
          <h1>
            Appcues Support Dashboard v1
          </h1>
        </div>
        <Navbar logo='Home' links={homeLinks} />
        <Start />
        {this.props.children}
      </div>
    )
  }
}

export default App;
