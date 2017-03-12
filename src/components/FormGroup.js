import React, { Component } from 'react';
import styles from './Form.sass';

export default class FormGroup extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { label, name, inputType, isRequired, onInputChange } = this.props;

		return (
			<div className='formGroup'>
				<label className='formLabel' >{ label } </label>
					<input 
						name={ name } 
						type={ inputType } 
						className='formInput'
						onChange={ onInputChange } 
						required={isRequired} />
			</div>
		);
	}
}