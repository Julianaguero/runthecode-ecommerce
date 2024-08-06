import { RequestHandler } from "express";
import bcrypt from "bcryptjs";
import { type UserProps } from "../../types/types";
import userModel from "../../models/userModel";
import { generateToken } from "../../utils/generateToken";



const signInUser: RequestHandler<unknown, unknown, UserProps, unknown> = async (req, res, next) => {
    console.log(req.body)
    try {
        const user = await userModel.findOne({mail: req.body.mail})
        console.log(user)
        if(user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.json({
                    _id: user._id,
                    name: user.name,
                    mail: user.mail,
                    isAdmin: user.isAdmin,
                    token: generateToken(user)
                })
                return
            }
        }
        res.status(401).json({message: "Invalid email or password"})
    } catch (error) {
        next(error)
    }
}

export default signInUser;