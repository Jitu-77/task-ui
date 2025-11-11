import { createSlice ,nanoid} from "@reduxjs/toolkit";

//nanoid -- unique id gen


const initialState = {
    tasks: [{
        completed: false,
        createdAt: "",
        description: "",
        lifeCycleStatus: "",
        subTitle: "",
        supportingFiles: [],
        title: "",
        updatedAt: "",
        userID: "",
        _id: ""
    }]
}

export const todoSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTasks:()=>{},
        removeTasks:()=>{}
    }
})