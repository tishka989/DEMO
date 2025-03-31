import fModel from "../models/fModel.js";
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

//al food list
const listFood = async(req,res) => {
    try {
        const fds = await fModel.find({});
        res.json({success:true,data:fds})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//remove item
const removeItem = async(req,res) => {
    try {
        const item = await fModel.findById(req.body.id);
        fs.unlink(`uploads/${item.image}` ,()=>{})

        await fModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Item Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export{addF,listFood,removeItem}