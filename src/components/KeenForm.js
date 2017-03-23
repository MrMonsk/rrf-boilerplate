import React, { Component } from 'react';
import FormGroup from './FormGroup';
import { getFlowErrors, getAccountExtraction, getFlowExtraction } from '../utils/keenQueries';
import { fetchRedisStats } from '../utils/redisQueries';

export default class KeenForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queryType: '',
      accountId: '',
      flowId: '',
      timeframe: '',
      results: ''
    };

    this.onAccountIdInput = this.onAccountIdInput.bind(this);
    this.onFlowIdInput = this.onFlowIdInput.bind(this);
    this.onTimeframeInput = this.onTimeframeInput.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onAccountIdInput(e) {
    this.setState({ accountId: e.target.value });
  }

  onFlowIdInput(e) {
    this.setState({ flowId: e.target.value });
  }

  onTimeframeInput(e) {
    this.setState({ timeframe: e.target.value });
  }

  onSelectChange(e) {
    this.setState({ queryType: e.target.value });
  }

  handleClick(e) {
    fetchRedisStats(this.state.accountId);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const queries = [
      'flow error',
      'flow extraction',
      'account extraction'
    ]
    console.log('hit query');
    if (queries.includes(this.state.queryType)) {
      switch(this.state.queryType) {
        case 'flow error':
          getFlowErrors(this.state.accountId, this.state.flowId, this.state.timeframe).then((queryResults) => {
              this.setState({ results: queryResults });
          })
          break;
        case 'account extraction':
          getAccountExtraction(this.state.accountId, this.state.timeframe).then((queryResults) => {
            this.setState({ results: queryResults });
          })
          break;
        case 'flow extraction':
          getFlowExtraction(this.state.accountId, this.state.flowId, this.state.timeframe).then((queryResults) => {
            this.setState({ results: queryResults});
          })
          break;
      }
    }

    console.log(this.state)
  }

  render() {
    const { queryType, accountId, flowId, timeframe, results } = this.state;

    return (
      <div className='formContainer'>
        <form id='form' className='form' onSubmit={ this.onFormSubmit }>
          <div style={{width: 400, textAlign: 'center' }}>
            <select onChange={ this.onSelectChange } value={queryType}>
              <option value='none'></option>
              <option value='flow error'>Flow Error</option>
              <option value='flow extraction'>Flow Extraction</option>
              <option value='account extraction'>Account Extraction</option>
            </select>
          </div>
          <FormGroup
            label='accountId'
            name='accountId'
            inputType='text'
            value={ accountId }
            onInputChange={ this.onAccountIdInput }
          />
          <FormGroup
            label='flowId'
            name='flowId'
            inputType='text'
            value={ flowId }
            onInputChange={ this.onFlowIdInput }
          />
          <FormGroup
            label='timeframe'
            name='timeframe'
            inputType='text'
            value={ timeframe }
            onInputChange={ this.onTimeframeInput }
          />
          <div className='formGroup'>
            <button
              type='submit'
              form='form'
              className='formSubmitButton'>Enter
            </button>
          </div>
        </form>
        <button onClick={this.handleClick}>
          fetch redis
        </button>
          {(() => {
            if (results.length > 1) {
              return results.map((result) => {
                return (
                  <div>
                    <p>{result.stepChildId}</p>
                    <p>{result.error}</p>
                    <p>{result.result}</p>
                    <p>{JSON.stringify(result)}</p>
                  </div>
                )
              })
            }
          })()}
      </div>
    );
  }
}
