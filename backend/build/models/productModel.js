"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// import { ProductsDataProps } from "../types";
const productSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    style: { type: String, required: true },
    price: { type: Number, required: true, min: [0, "Price value can not be negative"] },
    itemsLeft: { type: Number, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: false, min: [0, "Min rating value can not be negative"], max: [5, "Max rating value can not be greater than 5"] },
    numReviews: { type: Number, required: false, min: [0, "Min numReviews value can not be negative"] },
}, { timestamps: true });
//Create an index in mongoDB por searchProducts
productSchema.index({ name: "text", brand: "text" }, { name: "searchProduct" });
exports.default = mongoose_1.default.model("Product", productSchema);
