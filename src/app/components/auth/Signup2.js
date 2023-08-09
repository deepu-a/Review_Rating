import React from 'react';
import logo from "../../assets/background image.jpeg"
import left_img from "../../assets/left_img.jpeg"
import start from "../../assets/star_img.jpeg"
import "./signup.css"

const Signup2 = () => {
  return (
    <>
    <div className='main-container'>
        <div className='main_content'>
            <h1>Welcome</h1>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
            <img src={logo} alt='main_img'/>
            
        </div>
        <div className='signup_form'>
            <img id="frm_img1" src={left_img} alt='left_img'/>
            <h2 id='sign_up'>Sign Up</h2>
            <img id='star' src={start} alt='star_img'/>
            <div className="all_input">
                
            </div>
        </div>
    </div>
        
    </>
  )
}

export default Signup2