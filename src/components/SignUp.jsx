import React ,{useState} from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
function SignUp() {
    const navigate = useNavigate();
  const [fileName, setFileName] = useState('');
  const handleSubmit=()=>{
 navigate("/")
  }
  const initialValues = {
    username :"",
    password:"",
    email:"",
    avatar:"",
  }
  
  const handleFileChange = (e) => {
    console.log(e,"EEE")
    // setFileName(e.target.files[0]?.name || '');
  };
  const handleClick = (e) => {
    console.log(e,"CCC")
    // setFileName(e.target.files[0]?.name || '');
  };
  return (
    <div className='signUpContainer'>
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

              <div className='inputField'>
              <label>Email</label>
              <input className='inputStyle' type='text'/>
              </div>

              <div className='inputField'>
              <label>Avatar</label>
              <label htmlFor="avatar" className='customFileUpload'>Choose Avatar</label>              
              <input className='inputFileStyle' type='file' onChange={handleFileChange} onClick={handleClick}/>
              {fileName && <p className="fileName">{fileName}</p>}
              </div>

              <div className='submitForm' onClick={handleSubmit}>
                Submit
              </div>
            </div>        
        </div>
    </div>
  )
}

export default SignUp