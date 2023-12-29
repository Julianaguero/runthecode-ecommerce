import { Router, Request, Response } from "express";

const router = Router();

router.get("/users",( _req: Request, res: Response) => {
    res.send("Hola desde usuario")
})

export default router