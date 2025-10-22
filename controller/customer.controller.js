import CustomerModel from "../models/customer.model.js";

const createCustomer=async (req,res)=>{
    try{
        const customer =await CustomerModel.create(req.body)
        res.status(201).json(customer)

    }catch(err){
        next(err)

    }
}

const getAllCustomer=async(req,res)=>{
    try{
        const customers=await CustomerModel.find()
        res.status(200).json(customers)
    }catch(err){
        next(err)
    }
}

const getOneCustomer=async(req,res)=>{
    try{
        const {id}=req.params
        const customer=await CustomerModel.findById(id)
        if(!customer){
            return res.status(404).json({message: "Customer not found"})
        }
        res.status(200).json(customer)

    }catch(err){
        next(err)
    }
}

const updateCustomer=async (req,res)=>{
    try{
        const {id}=req.params
        const customer=await CustomerModel.findByIdAndUpdate(id,req.body,{new:true})
        
        if(!customer){
            return res.status(404).json({message:"Customer is not found"})
        }
        res.status(200).json(customer)

    }catch(err){
        next(err)
    }
}

const deleteCustomer=async(req,res)=>{
    try{
        const {id}=req.params
        const customer=await CustomerModel.findByIdAndDelete(id)
        if(!customer){
            return res.status(400).json({message:"Customer is not found"})
        }
        res.status(200).json({message:"Customer is deleted successfully"})
    }catch(err){
        next(err)
    }
}
export {createCustomer,getAllCustomer,getOneCustomer,updateCustomer,deleteCustomer}