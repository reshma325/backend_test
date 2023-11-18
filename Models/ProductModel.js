import mongoose, { Schema } from "mongoose";

const product2= new Schema({
    name:String,
    price:Number,
    image:String,
    category:String
},{timestamps:true})

export default mongoose.model("Products2",product2)