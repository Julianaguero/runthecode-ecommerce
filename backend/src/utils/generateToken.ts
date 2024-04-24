import jwt from "jsonwebtoken"
import { UserSchemaProps } from "../models/userModel";

export const generateToken = (user: UserSchemaProps) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.mail,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET || "secretthing",
        {
            expiresIn: "30d",
        }
    )
}