import { configureStore, isAction } from "@reduxjs/toolkit";
import TaskReducer from '../features/task/taskSlice.js'

// main components 
// Action
// Reducer
// Store
// Dispatcher , Selector



// 1>create a store 
// 2> create a reducer -- slices (in diff files)
//3> make a initial state
//4> create a slice -- define property , -- name , initialState, reducers -- contains properties and functions


export const store = configureStore({
    reducer:{
        tasks : TaskReducer
    }
})