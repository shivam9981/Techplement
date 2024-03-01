import { createAsyncThunk } from "@reduxjs/toolkit";

export const data = createAsyncThunk('send data', async (data)=>{
    const response = await fetch(`http://localhost:5000/api/auth/data`, {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({data})
    })
    const ans = response.json()
    return ans
})

export const mydata = createAsyncThunk('get all data', async ()=>{
    const response = await fetch(`http://localhost:5000/api/auth/getdata`, {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
        }
    })
    const ans = response.json()
    return ans
})