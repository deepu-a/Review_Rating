import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logo from "../../assets/background image.jpeg"
import left_img from "../../assets/left_img.jpeg"
import start from "../../assets/star_img.jpeg"
import "./signup.css"

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  password: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(10, 'Must be at least 10 digits')
    .required('Phone Number is required'),
});

function Userlogin() {
  const initialValues = {
    fullName: '',
    password:'',
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
            <h2 id='sign_up'>LogIn</h2>
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
              <label htmlFor="password">
                <Field type="password" id="password" name="password" placeholder='Password' />
              </label>
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            
            
           
            <button type="submit" id='btn'>LogIn</button>
            <span className='empty_span'></span>
            <div className='bottom_div'>I don't have an account on review and rating</div>
            <a href='' >Register Now</a>
            </div>
          </Form>
        )}
      </Formik>
    </div>
    </div>
    </>
  );
}

export default Userlogin;
