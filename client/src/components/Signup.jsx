import React from 'react';
import './style.css';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import validationSchema from './validationSchema';

const Signup = () => {
  const initialValues = {
    username: '',
    password: '',
    fullname: '',
    email: '',
    address: '',
    phone: '',
  };

  const handleSubmit = async (values) => {
    try {
      console.log("userData:", values);
      const response = await axios.post("https://localhost:7240/api/User/createUser", values);
      console.log(response.data);
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <div className="wrapper">
      <div className="form-box">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="register-container">
            <div className="top">
              <span>Have an account? <Link to="/login">Login</Link></span>
              <header>Sign Up</header>
            </div>
            <div className="two-forms">
              <div className="input-box">
                <Field
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="input-field"
                />
                <i className="bx bx-user"></i>
                <ErrorMessage name="username" component="div" className="error-message" />
              </div>
              <div className="input-box">
                <Field
                  type="text"
                  name="fullname"
                  placeholder="Fullname"
                  className="input-field"
                />
                <i className="bx bx-user"></i>
                <ErrorMessage name="fullname" component="div" className="error-message" />
              </div>
            </div>
            <div className="input-box">
              <Field
                type="text"
                name="email"
                className="input-field"
                placeholder="Email"
              />
              <i className="bx bx-envelope"></i>
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="input-box">
              <Field
                type="text"
                name="phone"
                className="input-field"
                placeholder="Phone"
              />
              <i className='bx bx-phone' ></i>
              <ErrorMessage name="phone" component="div" className="error-message" />
            </div>
            <div className="input-box">
              <Field
                type="text"
                name="address"
                className="input-field"
                placeholder="Address"
              />
              <i className='bx bx-home-alt-2' ></i>
              <ErrorMessage name="address" component="div" className="error-message" />
            </div>
            <div className="input-box">
              <Field
                type="password"
                name="password"
                className="input-field"
                placeholder="Password"
              />
              <i className="bx bx-lock-alt"></i>
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <div className="input-box">
              <input type="submit" className="submit" value="Register" />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
