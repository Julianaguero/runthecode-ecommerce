import { RequestHandler } from "express";
import bcrypt from "bcryptjs"
import { UserProps } from "../../types/types";
import userModel from "../../models/userModel";
import { generateToken } from "../../utils/generateToken";
import CustomError from "../../error/CustomError";



const createUser: RequestHandler<unknown, unknown, UserProps, unknown> = async (req, res, next) => {
    const name = req.body.name;
    const mail = req.body.mail;
    const password = req.body.password;
    
    try {
        if (!name) {
            throw new CustomError("need to have a name", 400, "BAD_REQUEST")
        }
        const newUser = await userModel.create({
            name: name,
            mail: mail,
            password: bcrypt.hashSync(password),
        })
        return res.json({
            _id: newUser._id,
            name: newUser.name,
            mail: newUser.mail,
            isAdmin: newUser.isAdmin,
            token: generateToken(newUser),
        })
    } catch (error) {
        next(error)
    }
};

export default createUser;
