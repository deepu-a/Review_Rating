import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logo from "../../assets/background image.jpeg"
import left_img from "../../assets/left_img.jpeg"
import start from "../../assets/star_img.jpeg"
import "./signup.css"

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(10, 'Must be at least 10 digits')
    .required('Phone Number is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
});

function Signup3() {
  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    city: '',
    state: '',
  };

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log('Form values:', values);
  };

  return (
    <>
    <div className='main-container'>
        <div className='main_content'>
            <h1>Welcome</h1>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
            <img src={logo} alt='main_img' id='logo_id'/>
        </div>

    <div className='all_input'>
    <div className='signup_form'>
            <img id="frm_img1" src={left_img} alt='left_img'/>
            <h2 id='sign_up'>Sign Up</h2>
            <img id='star' src={start} alt='star_img'/>
        </div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
          <div className='my_inputs'>
            <div className='input'>
              <label htmlFor="fullName">
                <Field type="text" id="fullName" name="fullName" placeholder='Full Name'/>
              </label>
              <ErrorMessage name="fullName" component="div" className="error" />
            </div>
            <div className='input'>
              <label htmlFor="email">
                <Field type="email" id="email" name="email" placeholder='Email ID' />
              </label>
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className='input'>
              <label htmlFor="phoneNumber">
                <Field type="text" id="phoneNumber" name="phoneNumber" placeholder='Phone Number' />
              </label>
              <ErrorMessage name="phoneNumber" component="div" className="error" />
            </div>
            <div className='input'>
              <label htmlFor="city">
                <Field as="select" id="city" name="city">
                  <option value="" disabled>City</option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                  <option value="city3">City 3</option>
                </Field>
              </label>
              <ErrorMessage name="city" component="div" className="error" />
            </div>
            <div className='input'>
              <label htmlFor="state">
                <Field as="select" id="state" name="state">
                  <option value="" disabled>State</option>
                  <option value="state1">State 1</option>
                  <option value="state2">State 2</option>
                  <option value="state3">State 3</option>
                </Field>
              </label>
              <ErrorMessage name="state" component="div" className="error" />
            </div>
            <button type="submit" id='btn'>Sign Up</button>
            <span className='empty_span'></span>
            <div className='bottom_div'>I already have an account <a href='' >Login</a></div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
    </div>
    </>
  );
}

export default Signup3;
