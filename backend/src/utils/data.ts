import { UserProps } from "../types/types";
import bcrypt  from "bcryptjs"


export const sampleUsers: Omit<UserProps, "_id">[] = [
    {
        name: "Joe",
        mail: "joe@admin.com",
        password: bcrypt.hashSync("123456"),
        isAdmin: true
    },
    {
        name: "Jhon",
        mail: "jhon@example.com",
        password: bcrypt.hashSync("123456"),
        isAdmin: false
    }
]