import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Register = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    roles: [],
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    axios.post('http://localhost:3000/api/auth/signup', values)
      .then(() => {
        alert('User registered successfully!');
        setSubmitting(false);
      })
      .catch(error => {
        alert(error.response?.data?.message || 'An error occurred.');
        setSubmitting(false);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <Field name="username" className="form-control" />
            <ErrorMessage name="username" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label className="form-label">Roles</label>
            <Field name="roles" as="select" multiple className="form-select">
              <option value="user">User</option>
              <option value="moderator">Moderator</option>
              <option value="admin">Admin</option>
            </Field>
          </div>

          <button type="submit" className="btn btn-success">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
