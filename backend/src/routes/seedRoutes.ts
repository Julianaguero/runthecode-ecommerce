import { Router, Request, Response } from "express";
import userModel from "../models/userModel";
import { sampleUsers } from "../utils/data";

export const seedRouter = Router()

seedRouter.get("/seed", async (_req: Request, res: Response) => {
    await userModel.deleteMany({})
    const createdUsers = await userModel.insertMany(sampleUsers)
    res.json({ createdUsers })
})