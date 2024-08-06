import { Router, Request, Response } from "express";
import { createUser, signInUser } from "../controllers/users";
import userModel from "../models/userModel";

const router = Router();

router.get("/users", async ( _req: Request, res: Response) => {
    const users = await userModel.find().exec();
    res.status(200).json(users)
})

router.post("/user/signin", signInUser)

router.post("/user/signup", createUser);

export default router