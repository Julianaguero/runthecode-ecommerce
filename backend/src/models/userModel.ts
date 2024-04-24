import mongoose, { InferSchemaType } from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    mail: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
},   {timestamps: true});

export type UserSchemaProps = InferSchemaType<typeof userSchema> & {
    _id: string
};

export default mongoose.model<UserSchemaProps>("User", userSchema);