import { Router } from  "express";
import userRouter from "./userRoutes"
import productRouter from "./productRoutes"




const router = Router();

router.use(userRouter);
router.use(productRouter)



export default router;