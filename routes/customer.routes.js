import {Router} from "express"
import { createCustomer,getAllCustomer,getOneCustomer,updateCustomer,deleteCustomer } from "../controller/customer.controller.js"
import { validateRequest } from "../middleware/validate.js"
import { customerUpdateSchema,customersSchema } from "../validation/customer.validation.js"

const customerRouter=Router()

customerRouter.get("/",getAllCustomer)
customerRouter.get("/:id",getOneCustomer)
customerRouter.post("/",validateRequest(customersSchema),createCustomer)
customerRouter.put("/:id",validateRequest(customerUpdateSchema),updateCustomer)
customerRouter.delete("/:id",deleteCustomer)

export default customerRouter