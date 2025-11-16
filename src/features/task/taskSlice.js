import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {GetResponse,UpdateByIdResponse} from '../../utilities/api.js'

//getAllTasks
export const getAllTasks = createAsyncThunk('getAllTasks',async (data,{rejectWithValue})=>{
    try {
        console.log("getAllTasks Slice --- ")
        const dataResponse = await GetResponse('tasks/getAll')
        console.log("dataResponse",dataResponse)
        return dataResponse?.data
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const updateTaskById = createAsyncThunk('updateTaskById',async (data,{rejectWithValue})=>{
        try {
            console.log("updateTaskById Slice ---",data)
            const updateResponse = await UpdateByIdResponse('tasks/updateById/'+data?.id,data?.payload)
            console.log("dataResponse",updateResponse)
            return updateResponse?.data
        } catch (error) {
             return rejectWithValue(error.message);
        }
})


const initialState = {
    tasks: [],
    loading:false,
    error:null
}

export const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllTasks.pending,(state)=>{
            state.loading = true
            state.error = null
        })
        .addCase(getAllTasks.fulfilled,(state,action)=>{
            state.loading = false
            state.tasks = action.payload
            state.error = null
        })
        .addCase(getAllTasks.rejected,(state,action)=>{
            state.loading = false
            state.tasks = []
            state.error = true
        })
        .addCase(updateTaskById.pending,(state)=>{
            state.loading = true
        })        
        .addCase(updateTaskById.fulfilled,(state,action)=>{
            state.loading = false
            console.log(action.payload, "Action Payload Fulfilled")
            state.tasks = state.tasks.map((el)=>{
              return  el?._id == action.payload._id ? action?.payload : el
            })
        })        
        .addCase(updateTaskById.rejected,(state)=>{
            state.loading = false
            state.error = true
        })        
    }
})

export default taskSlice.reducer