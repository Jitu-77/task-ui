import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { data, useNavigate } from 'react-router-dom';
import {PostResponse} from '../utilities/api.js'
import {GetResponse} from '../utilities/api.js'
import {UpdateByIdResponse} from '../utilities/api.js'
import {DeleteByIdResponse} from '../utilities/api.js'
import {userDetails} from '../utilities/userContext.jsx'
import Delete from '../assets/delete.png';
import { useSelector,useDispatch } from 'react-redux';
import {getAllTasks,updateTaskById,deleteTaskById} from '../features/task/taskSlice.js'
function Dashboard() {
    const navigate = useNavigate();
    const {user,setUser} = userDetails();
    // console.log(user,"USER DET")
    const dispatch = useDispatch()
    const handleLogout=async ()=>{
      const response = await PostResponse('logout',{})
      navigate("/")
    }
    const [listData,setListData] = useState([])
    // ---------replaced
    // const fetchData = async ()=>{
    //   const dataResponse = await GetResponse('tasks/getAll')
    //   if(dataResponse){
    //     console.log(dataResponse,"Data Response")
    //     setListData(dataResponse?.data)
    //   }
    // }
    const taskData = useSelector((state)=>state.tasks.tasks)
    console.log("TASK DATA",taskData)
  // useEffect( ()=>{
  //   console.log("In use Effect")
  //   // ---------replaced
  //   // fetchData()
  //   dispatch(getAllTasks())
  // },[])
useEffect(()=>{
  if(!taskData || taskData.length == 0) {
    dispatch(getAllTasks());
  }
},[taskData]);
  const handleToggleCompleted = async (id)=>{
    // const data = listData.find((el)=>el._id == id) 
    const data = taskData.find((el)=>el._id == id)
    const {completed,...rest} = data
    console.log(completed)
    const payload = {completed:!completed}
    console.log({id,payload},"MAIN DATA")
    dispatch(updateTaskById({id,payload}))
    // ---------replaced
    // const patchResponse = await UpdateByIdResponse('tasks/updateById/'+id,payload)
    // if(patchResponse){
    //   fetchData();
    //   console.log(patchResponse,"PATCH RESPONSE")
    // }
  }
  const handleTasks = (item)=>{
    console.log(item,"ITEM")
    if(item?._id){
      navigate("/tasks/"+item?._id)
    }
  }

  const onDeleteCall = async (item)=>{
    console.log(item,"ITEM")
    if(item?._id){
      dispatch(deleteTaskById({id:item?._id}))
    // ---------replaced      
    //  const deleteResponse = await DeleteByIdResponse('tasks/deleteById/'+item?._id)
    //  if(deleteResponse){
    //   fetchData();
    //  }
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
        {/* {listData && listData.length>0?( */}
        {taskData && taskData.length>0?(
          <div className='taskCards'>
          {/* {listData.map((item)=>( */}
          {taskData.map((item)=>(
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
                   <img src={Delete} className='deleteButton' onClick={()=> onDeleteCall(item)}/>
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