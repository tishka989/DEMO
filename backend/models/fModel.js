import mongoose from "mongoose";

const fSchema = new mongoose.Shema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number, required:true},
    image:{type:String, required:true},
    category:{type:String, required:true}
})

const fModel = mongoose.models.f || mongoose.model("food",fSchema)

export default fModel;