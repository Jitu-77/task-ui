import React from 'react'
import './TaskDetails.css'
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import BackButton from '../assets/back.png'
function TaskDetails() {
   const {_id} = useParams()
   console.log("USERID",_id)
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
          {/* <img src='./back.png' className='backButton'/> */}
          <img src={BackButton} className='backButton'/>
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