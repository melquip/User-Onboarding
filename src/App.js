import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import * as yup from 'yup';
import Form from './components/Form';

const initialFormState = {
	name: '',
	email: '',
	password: '',
	terms: false,
	role: '',
	roles: ['Front-end Developer', 'User Interface Developer', 'Back-end Developer']
}

const validationSchema = yup.object().shape({
	name: yup.string().required('Must type a name'),
	email: yup.string().email().required('Must type an email'),
	password: yup.string().required('Must type a password with 7+ characters').min(7),
	terms: yup.boolean()
		.oneOf([true], 'Must Accept Terms and Conditions')
		.required('Must Accept Terms and Conditions'),
	role: yup.number().required('Must select a Role'),
});

const validation = (formValues) => {
	const errors = {};
	if(formValues.email === 'waffle@syrup.com') {
		errors.email = 'That email is already taken';
	}
	return errors;
}

function App() {
	const [users, setUsers] = useState([])
	const addPerson = (formValues, form) => {
		axios
			.post('https://reqres.in/api/users', formValues)
			.then(res => {
				console.log(res);
				setUsers([...users, res.data]);
				form.resetForm();
			})
			.catch(error => {
				console.error(error.message);
			})
	}
	return (
		<div className="App">
			<Form
				onSubmit={addPerson}
				initialValues={initialFormState}
				validationSchema={validationSchema}
				validate={validation}
				users={users}
			/>
		</div>
	);
}

export default App;
