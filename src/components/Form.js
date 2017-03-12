import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginFromEmail } from '../actions/form'
import styles from './Form.sass';

import FormGroup from './FormGroup';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = { 
				email : '',
				password: '' 
			};

		this.onEmailInput = this.onEmailInput.bind(this);
		this.onPasswordInput = this.onPasswordInput.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onEmailInput(e) {
		this.setState({ email: e.target.value })
	}

	onPasswordInput(e) {
		this.setState({ password: e.target.value })
	}

	onFormSubmit(e) {
		e.preventDefault();
		const { loginFromEmail } = this.props.actions;
		loginFromEmail({ email: this.state.email, password: this.state.password });
	}

	render() {
		const { email, password } = this.state;

		return (
			<div className='formContainer'>
				<form id='form' className='form' onSubmit={ this.onFormSubmit }>
					<FormGroup
						label='Email'
						name='email'
						inputType='text'
						isRequired
						value={ email }
						onInputChange={ this.onEmailInput }
					/>
					<FormGroup
						label='Password'
						name='password'
						inputType='password'
						isRequired
						value={ password }
						onInputChange={ this.onPasswordInput }
					/>
					<div className='formGroup'>
						<button 
							type='submit'
							form='form'
							className='formSubmitButton'>Enter
						</button>
					</div>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		form: state.form 
	}
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators({ loginFromEmail }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
