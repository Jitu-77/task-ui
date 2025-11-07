import React ,{useState} from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
import { Formik,Form , ErrorMessage } from 'formik'
import {SignUpValidators} from '../utilities/Utils.js'
import {PostResponse} from '../utilities/api.js'
function SignUp() {
    const navigate = useNavigate();
  const [fileName, setFileName] = useState('');
  const handleSubmit=async (value)=>{
    const formData = new FormData()
    formData.append('username',value.username);
    formData.append('password',value.password);
    formData.append('email',value.email);
    formData.append('avatar',value.avatar);
    const response = await PostResponse('users/register',formData)
    if(response){
      console.log(response,"<------->")
       navigate("/")
    }
  }
  const initialValues = {
    username :"",
    password:"",
    email:"",
    avatar:"",
  }
  
  // const handleFileChange = (e) => {
  //   console.log(e.target.files[0]?.name ,"EEE")
  //   setFieldValue('avatar',e.target.files[0])
  //   // setFileName(e.target.files[0]?.name || '');
  // };
  const handleClick = (e) => {
    console.log(e,"CCC")
    // setFileName(e.target.files[0]?.name || '');
  };
  return (
    <div className='signUpContainer'>
        <div className='cardContainer'> </div>
        <div className='formContainer'>
          <Formik initialValues={initialValues} validationSchema={SignUpValidators} onSubmit={handleSubmit}>
            {({values,errors,touched,handleChange,handleBlur,setFieldValue})=>(
              <>
                <div className='formContainerSection'>
                  <div className='inputField'>
                    <label>Email</label>
                    <input 
                        className='inputStyle' 
                        type='text'
                        name='username'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        />
                  </div>

                  <div className='inputField'>
                    <label>Password</label>
                    <input 
                        className='inputStyle' 
                        type='text'
                        name='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        />
                  </div>

                  <div className='inputField'>
                    <label>Email</label>
                    <input 
                        className='inputStyle' 
                        type='text'
                         name='email'
                         onChange={handleChange}
                         onBlur={handleBlur}
                         value={values.email} 
                        />
                  </div>

                  <div className='inputField'>
                    <label>Avatar</label>
                    <label htmlFor="avatar" className='customFileUpload'  onClick={handleClick}>Choose Avatar</label>              
                    <input 
                    className='inputFileStyle' 
                    type='file'  
                    id="avatar" 
                    onChange={(e)=>{
                      console.log(e,"<------------>");
                      const file = e.currentTarget.files[0];
                      setFieldValue("avatar", file);
                    }}
                    onBlur={handleBlur}
                    // value={values.avatar}
                     />
                    {fileName && <p className="fileName">{fileName}</p>}
                  </div>

                  <div className='submitForm' onClick={(e)=>{
                      e.preventDefault()
                      handleSubmit(values)
                  }}>
                   Submit
                  </div>
                </div>                
              </>
            )}
      
          </Formik>
        </div>
    </div>
  )
}

export default SignUp