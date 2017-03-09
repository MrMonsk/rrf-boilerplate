import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class App extends Component {

  render() {

    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 750
    }

    return(
      <div style={style}>
        <h1>
          RRF Boilerplate
        </h1>
      </div>
    )
  }
}

export default App;
