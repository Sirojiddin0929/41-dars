import express from "express"
import mongoose from "mongoose"
import MainRouter from "./routes/index.js"
import { errorHandler } from "./middleware/errorHandler.js"

const app=express()
app.use(express.json())

app.use("/",MainRouter)

const PORT=4000

app.use(errorHandler)

async function bootstrap() {
    try{
        await mongoose.connect("mongodb://localhost:27017/water_delivery")
        console.log("Connected to MongoDB successfully")

        app.listen(PORT,()=>{
            console.log(`Server running on port ${PORT}`)
        })

    }catch(err){
        console.log("Xatolik",err)
        
    }
    
}

bootstrap()