import React, { Component } from 'react';
import styles from '../containers/App.sass';
import { fetchRedisStats } from '../utils/redisQueries';
import { Link } from 'react-router';

export default class Start extends Component {
  constructor() {
    super();
    this.state = {
      accountId: ''
    }
  }

  handleChange(e) {
    this.setState({accountId: e.target.value});
  }


  render() {
    const { accountId } = this.state;
    return (
      <div className="flex-util-center">
        <input id="accountId" type="text" value={accountId} onChange={this.handleChange.bind(this)} />
        <Link to={`accounts/${this.state.accountId}`}><button>GO</button></Link>
      </div>
    )
  }

}
