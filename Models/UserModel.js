import mongoose,{Schema} from "mongoose";

const users2= new Schema({
    name:String,
    email:String,
    password:String
})
export default mongoose.model("User2",users2);