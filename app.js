import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'
import morgan from 'morgan';
import router  from './Routes/index.js';

const app=express();
dotenv.config();
app.use(cors());
app.use(morgan("dev"))
app.use(express.json());



app.get("/",(req,res)=>{
    res.send("hi")
   
})

app.use("/api/v1",router)
mongoose.connect(process.env.MONGOURL).then(()=>console.log("database connected!"))
app.listen(9000,()=>console.log("Hi"));