import mongoose, { InferSchemaType } from "mongoose";
// import { ProductsDataProps } from "../types";


const productSchema = new mongoose.Schema({
    name: { type: String, required: true},
    brand: { type: String, required: true},
    style: { type: String, required: true },
    price: { type: Number, required: true,  min: [0, "Price value can not be negative"] },
    itemsLeft: { type: Number, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: false, min: [0, "Min rating value can not be negative"], max: [5, "Max rating value can not be greater than 5"] },
    numReviews: { type: Number, required: false, min: [0, "Min numReviews value can not be negative"] },
}, { timestamps: true })

//Create an index in mongoDB por searchProducts
productSchema.index({name: "text", brand: "text"}, {name: "searchProduct"},);

type ProductSchemaProps = InferSchemaType<typeof productSchema>;

export default mongoose.model<ProductSchemaProps>("Product", productSchema);