import { Router } from "express";
import { createRegion,getAllRegion,getOneRegion,updateRegion,deleteRegion } from "../controller/region.controller.js";
import { validateRequest } from "../middleware/validate.js";
import { regionsSchema,regionUpdateSchema } from "../validation/region.validation.js";

const regionRouter=Router()

regionRouter.get("/",getAllRegion)
regionRouter.get("/:id",getOneRegion)
regionRouter.post("/",validateRequest(regionsSchema),createRegion)
regionRouter.put("/:id",validateRequest(regionUpdateSchema),updateRegion)
regionRouter.delete("/:id",deleteRegion)

export default regionRouter