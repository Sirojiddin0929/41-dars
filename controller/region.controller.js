import RegionModel from "../models/region.model.js";

const createRegion=async (req,res)=> {
    try{
        const region=await RegionModel.create(req.body)
        res.status(201).json(region)
    }catch(err){
        next(err)
    }
}

const getAllRegion=async(req,res)=>{
    try{
        const regions=await RegionModel.find()
        res.status(200).json(regions)
    }catch(err){
        next(err)
    }
}

const getOneRegion=async(req,res)=>{
    try{
        const {id}=req.params
        const region=await RegionModel.findById(id)
        if(!region){
            return res.status(400).json({message:"Region is not found"})
        }
        res.status(200).json(region)

    }catch(err){
        next(err)
    }
}

const updateRegion=async(req,res)=>{
    try{
        const {id}=req.params
        const customer=await RegionModel.findByIdAndUpdate(id,req.body,{new:true})
        if(!customer){
            return res.status(400).json({message:"Region is not found"})
        }
        res.status(200).json(region)
    }catch(err){
        next(err)
    }
}

const deleteRegion=async(req,res)=>{
    try{
        const {id}=req.params
        const customer=await RegionModel.findByIdAndDelete(id)
        if(!customer){
            return res.status(400).json({message:"Region is not found"})
        }
        res.status(200).json({message:"Customer is deleted successfully"})
    }catch(err){
        next(err)
    }
}

export{createRegion,getAllRegion,getOneRegion,updateRegion,deleteRegion}

