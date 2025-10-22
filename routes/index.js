import { Router } from "express";
import waterRouter from "./water.routes.js";
import customerRouter from "./customer.routes.js";
import regionRouter from "./region.routes.js";

const MainRouter=Router()

MainRouter.use("/customers",customerRouter)
MainRouter.use("/regions",regionRouter)
MainRouter.use("/waterProducts",waterRouter)

export default MainRouter