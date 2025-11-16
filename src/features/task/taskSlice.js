import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {GetResponse,UpdateByIdResponse,DeleteByIdResponse,PostResponse} from '../../utilities/api.js'

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
            console.log("updateResponse",updateResponse)
            return updateResponse?.data
        } catch (error) {
             return rejectWithValue(error.message);
        }
})

export const deleteTaskById = createAsyncThunk('deleteTaskById',async (data,{rejectWithValue})=>{
        try {
            console.log("deleteTaskById Slice ---",data)
            const deleteResponse = await DeleteByIdResponse('tasks/deleteById/'+data?.id)
            console.log("deleteResponse",deleteResponse)
            return{id : data?.id}
        } catch (error) {
             return rejectWithValue(error.message);
        }
})

export const postTask = createAsyncThunk('postTask',async (data,{rejectWithValue})=>{
        try {
            console.log("postTask Slice ---",data)
            const postResponse = await PostResponse('tasks/create',data)
            console.log("postResponse",postResponse)
            return postResponse.data
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
            state.error = null
        })        
        .addCase(updateTaskById.fulfilled,(state,action)=>{
            state.loading = false
            console.log(action.payload, "Action Payload Fulfilled Update")
            state.tasks = state.tasks.map((el)=>{
              return  el?._id == action.payload._id ? action?.payload : el
            })
        })        
        .addCase(updateTaskById.rejected,(state)=>{
            state.loading = false
            state.error = true
        })        
        .addCase(deleteTaskById.pending,(state)=>{
            state.loading = true
            state.error = null
        })        
        .addCase(deleteTaskById.fulfilled,(state,action)=>{
            state.loading = false
            console.log(action.payload, "Action Payload Fulfilled Delete")
            state.tasks = state.tasks.filter((el)=>{
              return  el?._id !== action.payload.id 
            })
        })        
        .addCase(deleteTaskById.rejected,(state)=>{
            state.loading = false
            state.error = true
        })        
        .addCase(postTask.pending,(state)=>{
            state.loading = true
            state.error = null
        })        
        .addCase(postTask.fulfilled,(state,action)=>{
            state.loading = false
            console.log(action.payload, "Action Payload Fulfilled POST")
            state.tasks.push(action.payload)
        })        
        .addCase(postTask.rejected,(state)=>{
            state.loading = false
            state.error = true
        })        
    }
})

export default taskSlice.reducer