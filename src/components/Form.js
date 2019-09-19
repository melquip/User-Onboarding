import React from 'react'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';

const Form = ({ initialValues, onSubmit, validationSchema }) => {
	return (
		<Formik
			onSubmit={onSubmit}
			initialValues={initialValues}
			validationSchema={validationSchema}
			render={props => (
				<FormikForm>
					<Field
						name="name"
						type="text"
						placeholder="Name"
					/>
					<Field
						name="email"
						type="email"
						placeholder="Email"
					/>
					<Field
						name="password"
						type="password"
						placeholder="Password"
					/>
					<Field
						name="terms"
						type="checkbox"
						placeholder="Terms"
					/>
				</FormikForm>
			)}
		/>
	)
}

export default Form;