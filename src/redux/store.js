import { configureStore } from '@reduxjs/toolkit'
import getdata from './slice/getdata'
import senddata from './slice/senddata'
const store = configureStore({
    reducer: {
        getdata:getdata,
        senddata:senddata
    }
})

export default store
