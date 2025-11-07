import { useState } from 'react'
import './App.css'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import Dashboard from './components/Dashboard.jsx'
import TaskDetails from './components/TaskDetails.jsx'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element = {<Login/>}/>,
      <Route path='/sign-up' element = {<SignUp/>}/>,
      <Route path='/dashboard' element = {<Dashboard/>}/>,
      <Route path='/tasks' element = {<TaskDetails/>}/>
      <Route path='/tasks/:_id' element = {<TaskDetails/>}/>
      <Route path='*' element = {<Login/>}/>
      </>
    )
  )
  return <RouterProvider router={router}/>
  
}
