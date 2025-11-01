import React from 'react'
import './Login.css'
import { Formik,Form , ErrorMessage } from 'formik'
function Login() {
  const handleSubmit=()=>{

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

              <div className='submitForm'>
                Submit
              </div>
            </div>


        </div>
    </div>
  )
}

export default Login