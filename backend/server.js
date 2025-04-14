import express from "express"
import cors from "cors"
import { connetcDb } from "./config/db.js"

import fRoutes from "./routes/fRoutes.js"

//app conf
const app = express()
const port =5000

//middleware 
app.use(express.json())
app.use(cors())

//db connection
connetcDb();

//api endpoints
app.use("/api/food", fRoutes)
app.use("/image",express.static('uploads'))


app.get("/",(req,res)=>{
    res.send("API Working")
})


app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

//mongodb+srv://tishka:tank2007878@cluster0.6k9eohw.mongodb.net/?