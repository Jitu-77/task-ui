import React from 'react'
import './TaskDetails.css'
function TaskDetails() {
  return (
    <div className='taskDetailsContainer'>
        <div className='headerSection'>
                TaskDetails
        </div>
        <div>
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

              <div className='submitForm'>
                Submit
              </div>
            </div>         
    </div>
  )
}

export default TaskDetails