import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountId: this.props.accountId
    }
  }

  render() {
    const { accountId } = this.state
    return(
      <div>{accountId}</div>
    )
  }
}


function mapStateToProps(state, routeProps) {
    return {
        accountId: routeProps.params.accountId,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({}, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Account)
