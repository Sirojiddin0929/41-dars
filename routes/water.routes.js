import { Router } from "express";
import { createWaterProduct,getWaterProducts,getWaterProductById,updateWaterProduct,deleteWaterProduct } from "../controller/water.controller.js";
import { validateRequest } from "../middleware/validate.js";
import { waterSchema,waterUpdateSchema} from "../validation/waterProduct.validation.js";

const waterRouter=Router()

waterRouter.get("/",getWaterProducts)
waterRouter.get("/:id",getWaterProductById)
waterRouter.post("/",validateRequest(waterSchema),createWaterProduct)
waterRouter.put("/:id",validateRequest(waterUpdateSchema),updateWaterProduct)
waterRouter.delete("/:id",deleteWaterProduct)

export default waterRouter
