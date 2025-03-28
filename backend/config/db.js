import mongoose from "mongoose";
export const connetcDb = async () => {
    await mongoose.connect('mongodb+srv://tishka:tank2007878@cluster0.6k9eohw.mongodb.net/demo').then(()=>console.log("DB Conected"))
}