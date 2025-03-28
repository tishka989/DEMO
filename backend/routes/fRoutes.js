import express from "express"
import { addF } from "../controllers/fControllers.js"
import multer from "multer"

const fRoutes = express.Router();

//img storage eng

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})


const upload = multer({storage:storage})

fRoutes.post("/add",upload.single("image"),addF)



export default fRoutes;