import React from 'react'
import {
	Formik,
	Form as FormikForm,
	Field,
	ErrorMessage
} from 'formik';

const Form = ({ initialValues, onSubmit, validationSchema, validate, users }) => {
	return (
		<Formik
			onSubmit={onSubmit}
			validate={validate}
			initialValues={initialValues}
			validationSchema={validationSchema}
			render={
				props => {
					const { values, dirty } = props;
					console.log(props);
					return (
						<>
							<h1>Add user form</h1>
							<FormikForm>
								<label htmlFor="name">Name: </label>
								<Field
									id="name"
									name="name"
									type="text"
									placeholder="Name"
								/>
								<ErrorMessage name="name" component="div" />
								<label htmlFor="role">Role: </label>
								<select name="role" id="role">
									<option value="0">-- Select a Role --</option>
									{
										values.roles.map((role, i) => (
											<option key={i} value={i}>{role}</option>
										))
									}
								</select>
								<ErrorMessage name="role" component="div" />
								<label htmlFor="email">Email: </label>
								<Field
									id="email"
									name="email"
									type="email"
									placeholder="Email"
								/>
								<ErrorMessage name="email" component="div" />
								<label htmlFor="password">Password: </label>
								<Field
									id="password"
									name="password"
									type="password"
									placeholder="Password"
								/>
								<ErrorMessage name="password" component="div" />
								<label htmlFor="terms">Terms: </label>
								<Field
									id="terms"
									name="terms"
									type="checkbox"
									checked={values.terms}
								/>
								<ErrorMessage name="terms" component="div" />
								<button type="submit" disabled={!dirty}>Submit</button>
							</FormikForm>
							<h1>List of users</h1>
							<div className="users">
								{
									users.length > 0 ? users.map(user =>
										<div key={user.createdAt} className="user">
											{user.name}<br />
											{user.email}<br />
											{user.terms ? 'Accepted terms' : null}<br />
											Added on {user.createdAt}<br />
										</div>
									) : <div className="user">No users in the list</div>
								}
							</div>
						</>
					)
				}
			}
		/>
	)
}

export default Form;