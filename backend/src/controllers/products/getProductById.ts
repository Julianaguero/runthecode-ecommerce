import { RequestHandler } from "express";
import mongoose from "mongoose";
import productModel from "../../models/productModel";
import { BadRequestError, NotFoundError } from "../../error/index";

const getProductById: RequestHandler = async (req, res, next) => {
    const productId = req.params.productId;

    try {
        if (!mongoose.isValidObjectId(productId)) {
            throw new BadRequestError("Invalid Product Id")
        }

        const product = await productModel.findById(productId).exec();

        if (!product) {
            throw new NotFoundError("Product not found")
        }
        //IMPORTANT! brackets were added to res. an Array of one product instead one object.
        res.status(200).json([product])

    } catch (error) {
        next(error);
    }
};

export default getProductById;