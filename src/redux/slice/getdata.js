import {createSlice} from '@reduxjs/toolkit'
import {mydata} from '../action'
const getdata = createSlice({
    name:'get all data',
    initialState:{
        IsLoading:false,
        data:null,
        IsError:false
    },
    extraReducers:(builder)=>{
        builder.addCase(mydata.pending,(state, action)=>{
            state.IsLoading = true
        })
        builder.addCase(mydata.fulfilled,(state,action)=>{
            state.IsLoading = false
            state.data = action.payload
        })
        builder.addCase(mydata.rejected,(state,action)=>{
            state.IsError = true
        })
    }
})

export default getdata.reducer