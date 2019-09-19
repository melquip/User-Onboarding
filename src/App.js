import React from 'react';
import './App.css';
import axios from 'axios';
import * as yup from 'yup';
import Form from './components/Form';

const initialFormState = {
	name: '',
	email: '',
	password: '',
	terms: '',
}

const validationSchema = yup.object().shape({
	name: yup.string().required('Must type a name'),
	email: yup.string().email().required('Must type an email'),
	password: yup.string().required('Must type a password with 7+ characters').length(7),
	terms: yup.boolean()
		.required('Must Accept Terms and Conditions')
		.oneOf([true], 'Must Accept Terms and Conditions'),
});

function App() {
	const addPerson = (formValues, form) => {
		axios
			.post('https://reqres.in/api/users', formValues)
			.then(res => {
				console.log(res);
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
			/>
		</div>
	);
}

export default App;
