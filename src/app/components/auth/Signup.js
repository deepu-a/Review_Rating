import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik';
import * as yup from "yup";
import logo from "../../assets/background image.jpeg"
import left_img from "../../assets/left_img.jpeg"
import start from "../../assets/star_img.jpeg"
import "./signup.css"

export const Signup = () => {

    //initial schema of formik
    const defaulteValue = {
        name:"",
        email:"",
        number:"",
        city:"",
        state:""
    } ;

    //ValidationSchema
    const ValidationSchema = yup.object().shape({
        name:yup.string().required('Please enter name'),
        email:yup.string().required('please enter your email'),
        city:yup.string().required('please enter your city'),
        number:yup.string().required('please enter your phone number'),
        state:yup.string().required('please enter your state')
    })

    //onsubmit function
    const handlesubmit =(val)=>{
        console.log('value', val);
    }
  return (
    <>
    <div className='main-container'>
        <div className='main_content'>
            <h1>Welcome</h1>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
            <img src={logo} alt='main_img'/>
            
        </div>
    <Formik
    initialValues={defaulteValue}
    validationSchema={ValidationSchema}
    onSubmit={handlesubmit}
    >
    <Form>
    <div className='signup_form'>
            <img id="frm_img1" src={left_img} alt='left_img'/>
            <h2 id='sign_up'>Sign Up</h2>
            <img id='star' src={start} alt='star_img'/>
        </div>
        <div className='all_input'>
        <div className='container'>
            <Field
            type='text'
            name='name'
            placeholder='Full Name'
            >

            </Field>
            <p className='text-danger'></p>
            <ErrorMessage name='name'></ErrorMessage>
        </div>

        <div className='container'>
            <Field
            type='text'
            email='email'
            placeholder='Email ID'
            >

            </Field>
            <p className='text-danger'></p>
            <ErrorMessage email='email'></ErrorMessage>
        </div>

        <div className='container'>
            <Field
            type='number'
            number='number'
            placeholder='Phone Number'
            >

            </Field>
            <p className='text-danger'></p>
            <ErrorMessage number='number' ></ErrorMessage>
        </div>

        <div className='container'>
            <Field
            type='select'
            city='city'
            placeholder='City'
            >

            </Field>
            <p className='text-danger'></p>
            <ErrorMessage city='city' ></ErrorMessage>
        </div>

        <div className='container'>
            <Field
            type='select'
            state='state'
            placeholder='State'
            >

            </Field>
            <p className='text-danger'></p>
            <ErrorMessage state='state' ></ErrorMessage>
        </div>
        </div>
    </Form>

    </Formik>
    </div>
    </>
  )
}
