import React from 'react'
import './TaskDetails.css'
import { useNavigate } from 'react-router-dom';
function TaskDetails() {
      const navigate = useNavigate();
    const handleBack=()=>{
    navigate("/dashboard")
  }
    const handleSubmit=()=>{
 navigate("/dashboard")
  }
  return (
    <div className='taskDetailsContainer'>
        <div className='headerSection'>
                TaskDetails
        </div>
        <div onClick={handleBack}>
          <img src='./back.png' className='backButton'/>
        </div>
            <div className='formContainerSection'>
              <div className='inputField'>
              <label>Title</label>
              <input className='inputStyle' type='text'/>
              </div>

              <div className='inputField'>
              <label>Sub Title</label>
              <input className='inputStyle' type='text'/>
              </div>

              <div className='inputField'>
              <label>Description</label>
              <input className='inputStyle' type='text'/>
              </div>

              <div className='submitForm' onClick={handleSubmit}>
                Submit
              </div>
            </div>         
    </div>
  )
}

export default TaskDetails