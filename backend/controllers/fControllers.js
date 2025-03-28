import fModel from "../models/fModel";
import fs from 'fs'

//add item

const addF = async(req,res) => {

    let image_filename = `${req.file.filename}`

    const food = new fModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Item Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export{addF}