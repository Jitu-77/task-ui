import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { data, useNavigate } from 'react-router-dom';
import {PostResponse} from '../utilities/api.js'
import {GetResponse} from '../utilities/api.js'
import {UpdateByIdResponse} from '../utilities/api.js'
import {userDetails} from '../utilities/userContext.jsx'
import Delete from '../assets/delete.png';
function Dashboard() {
    const navigate = useNavigate();
     const {user,setUser} = userDetails();
     console.log(user,"USER DET")
    const handleLogout=async ()=>{
      const response = await PostResponse('logout',{})
      navigate("/")
  }
  const [listData,setListData] = useState([])
  const fetchData = async ()=>{
      const dataResponse = await GetResponse('tasks/getAll')
      if(dataResponse){
        console.log(dataResponse,"Data Response")
        setListData(dataResponse?.data)
      }
  }
  useEffect( ()=>{
    console.log("In use Effect")
    fetchData()
  },[])
  const handleToggleCompleted = async (id)=>{
    const data = listData.find((el)=>el._id == id)
    const {completed,...rest} = data
    console.log(completed)
    const payload = {completed:!completed}
    const patchResponse = await UpdateByIdResponse('tasks/updateById/'+id,payload)
    if(patchResponse){
      fetchData();
      console.log(patchResponse,"PATCH RESPONSE")
    }
  }
  const handleTasks = (item)=>{
    console.log(item,"ITEM")
    if(item?._id){
      navigate("/tasks/"+item?._id)
    }
  }
  return (
    <div className='dashboardContainer'>
        <div className='sidenavContainer'>
        <div className='logOutButton' onClick={handleLogout}>
          Logout
        </div>
        
        </div>
        <div className='contentContainer'>
          <img src='./plus.svg'  onClick={()=>  navigate("/tasks") }/>
        {listData && listData.length>0?(
          <div className='taskCards'>
          {listData.map((item)=>(
            <div className='taskCardsContainer' key={item._id}>
                <div onClick={()=>handleTasks(item)}>
                  <h3 className='title'>{item.title}</h3>
                  <p className='subTitle'>{item.subTitle}</p>
                </div>
                <div className='checkboxContainer'>
                <div>
                  <input type="checkbox" 
                    checked = {item.completed}
                    onChange={() => handleToggleCompleted(item._id)}
                  />
                   <label>{item.completed ? 'Completed' : 'Pending'}</label>
                </div>
                   <img src={Delete} className='deleteButton' />
                </div>
            </div>
          ))}  
          </div>
        ):(
          <h4>No data available.</h4>
        )}
        




        </div>
    </div>
  )
}

export default Dashboard