import {createSlice} from '@reduxjs/toolkit'
import {data} from '../action'
const senddata = createSlice({
    name:'send data',
    initialState:{
        IsLoading:false,
        data:null,
        IsError:false
    },
    extraReducers:(builder)=>{
        builder.addCase(data.pending,(state, action)=>{
            state.IsLoading = true
        })
        builder.addCase(data.fulfilled,(state,action)=>{
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(data.rejected,(state,action)=>{
            state.IsError = true
        })
    }
})

export default senddata.reducer