import Express  from "express";
import data from './Routes/data.js'
import dotenv from 'dotenv' ;
import connection from "./DB.js";
import cors from 'cors'
const app = Express();
app.use(Express.json())
app.use(cors())
const port = process.env.PORT || 5000
dotenv.config()
console.log("project Done")
app.use('/api/auth' ,data)
app.listen(port ,()=>{
    connection()
    console.log(`website run by ${port}`)
})