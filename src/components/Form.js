import React from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';

const Form = ({ initialValues, onSubmit, validationSchema, validate, users }) => {
	return (
		<Formik
			onSubmit={onSubmit}
			validate={validate}
			initialValues={initialValues}
			validationSchema={validationSchema}
			render={props => (
				<>
					<h1>Add user form</h1>
					<FormikForm>
						<label htmlFor="name">Name: </label>
						<Field
							name="name"
							type="text"
							placeholder="Name"
						/>
						<ErrorMessage name="name" component="div" />
						<br/>
						<label htmlFor="email">Email: </label>
						<Field
							name="email"
							type="email"
							placeholder="Email"
						/>
						<ErrorMessage name="email" component="div" />
						<br/>
						<label htmlFor="password">Password: </label>
						<Field
							name="password"
							type="password"
							placeholder="Password"
						/>
						<ErrorMessage name="password" component="div" />
						<br/>
						<label htmlFor="terms">Terms: </label>
						<Field
							name="terms"
							type="checkbox"
							checked={props.values.terms}
						/>
						<ErrorMessage name="terms" component="div" />
						<br/>
						<button type="submit">Submit</button>
					</FormikForm>
					<h1>List of users</h1>
					{
						users.length > 0 ? users.map(user => 
							<div key={user.createdAt} className="user">
								{user.name}<br/>
								{user.email}<br/>
								{user.terms ? 'Accepted terms' : null}<br/>
								Added on {user.createdAt}<br/>
							</div>
						) : <div>No users in the list</div>
					}
				</>
			)}
		/>
	)
}

export default Form;