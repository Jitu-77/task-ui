import React, { useEffect, useState } from 'react'
import './Dashboard.css'
function Dashboard() {
  const [listData,setListData] = useState([])
  useEffect(()=>{
    let data = 
    [
              {
            "_id": "68f155773a121ce292b91a2c",
            "title": "Test1",
            "subTitle": "Test12",
            "description": "Test123",
            "completed": false,
            "lifeCycleStatus": "TODO",
            "userID": "68f1303accbc640d14826917",
            "supportingFiles": [
                "tanker.jpg",
                "lcv_open_body.jpg"
            ],
            "createdAt": "2025-10-16T20:28:39.597Z",
            "updatedAt": "2025-10-16T20:28:39.597Z",
            "__v": 0
        },
        {
            "_id": "6905cee0a229dcbbc867f20d",
            "title": "Test2",
            "subTitle": "Test22",
            "description": "Test222",
            "completed": false,
            "lifeCycleStatus": "TODO",
            "userID": "68f1303accbc640d14826917",
            "supportingFiles": [],
            "createdAt": "2025-11-01T09:12:00.805Z",
            "updatedAt": "2025-11-01T09:12:00.805Z",
            "__v": 0
        },
        {
            "_id": "6905cef1a229dcbbc867f210",
            "title": "Test3",
            "subTitle": "Test33",
            "description": "Test333",
            "completed": false,
            "lifeCycleStatus": "TODO",
            "userID": "68f1303accbc640d14826917",
            "supportingFiles": [],
            "createdAt": "2025-11-01T09:12:17.851Z",
            "updatedAt": "2025-11-01T09:12:17.851Z",
            "__v": 0
        },
        {
            "_id": "6905cf22a229dcbbc867f213",
            "title": "Test4",
            "subTitle": "Test44",
            "description": "Test444",
            "completed": false,
            "lifeCycleStatus": "TODO",
            "userID": "68f1303accbc640d14826917",
            "supportingFiles": [],
            "createdAt": "2025-11-01T09:13:06.426Z",
            "updatedAt": "2025-11-01T09:13:06.426Z",
            "__v": 0
        }
    ]
    setListData(data)
  },[])
  const handleToggleCompleted = (id)=>{
    setListData((prev)=>
      prev.map((elem)=> 
        elem._id == id ? {...elem ,completed:!elem.completed} : {...elem}
      )
    )
  }
  return (
    <div className='dashboardContainer'>
        <div className='sidenavContainer'>
        <div className='logOutButton'>
          Logout
        </div>
        
        </div>
        <div className='contentContainer'>
        
        {listData.length>0?(
          <div className='taskCards'>
          {listData.map((item)=>(
            <div className='taskCardsContainer' key={item._id}>
                <div>
                  <h3 className='title'>{item.title}</h3>
                  <p className='subTitle'>{item.subTitle}</p>
                </div>
                <div className='checkboxContainer'>
                  <input type="checkbox" 
                    checked = {item.completed}
                    onChange={() => handleToggleCompleted(item._id)}
                  />
                   <label>{item.completed ? 'Completed' : 'Pending'}</label>
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