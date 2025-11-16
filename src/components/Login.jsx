import React from 'react'
import './Login.css'
import { Formik,Form , ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom';
import {LoginValidators} from '../utilities/Utils.js'
import {PostResponse} from '../utilities/api.js'

import {userDetails} from '../utilities/userContext.jsx'
function Login() {
  const navigate = useNavigate();
  const {user,setUser} = userDetails()
  // console.log("user Details",user)
  const handleSubmit=async (values)=>{
    // console.log("Pressed Continue button", values);
    if(values){
      const response = await PostResponse('login',values)
      if(response?.status){
        // console.log(response)
        // console.log(user)
        setUser(response?.data)
        navigate("/dashboard")
      }
    }
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
    <Formik initialValues={initialValues} validationSchema={LoginValidators} onSubmit={handleSubmit}>
    {({values,errors,touched,handleChange,handleBlur,setFieldValue})=>(
      <>
            <div className='formContainerSection'>
              <div className='inputField'>
              <label>Username</label>
              <input 
                  className='inputStyle' 
                  type='text'
                  name = 'username'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  />
                  <ErrorMessage name='username' className='errorClass'/>
              </div>

              <div className='inputField'>
              <label>Password</label>
              <input 
                  className='inputStyle' 
                  type='text'
                  name = 'password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}                    
                  />
                   <ErrorMessage name='password' className='errorClass'/>
              </div>

              <button 
                className='submitForm' 
                type="submit"
                onClick = {(e)=>{
                    e.preventDefault()
                    handleSubmit(values)
                }} 
                >
                Submit
              </button>

              <div className='submitForm' onClick={handleSignUp}>
                sign Up
              </div>
            </div>
      </>
    )}

    </Formik>

        </div>
    </div>
  )
}

export default Login