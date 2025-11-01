import React from 'react'
import './Login.css'
import { Formik,Form , ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const handleSubmit=()=>{
    navigate("/dashboard")
  }
  const handleSignUp=()=>{
    navigate("/sign-up")
  }
  const initialValues = {
    username :"",
    password:""
  }
  return (
    <div className='loginContainer'>
        <div className='cardContainer'> </div>
        <div className='formContainer'>

            <div className='formContainerSection'>
              <div className='inputField'>
              <label>Email</label>
              <input className='inputStyle' type='text'/>
              </div>

              <div className='inputField'>
              <label>Password</label>
              <input className='inputStyle' type='text'/>
              </div>

              <div className='submitForm' onClick={handleSubmit}>
                Submit
              </div>

              <div className='submitForm' onClick={handleSignUp}>
                sign Up
              </div>
            </div>


        </div>
    </div>
  )
}

export default Login