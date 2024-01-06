import { RequestHandler } from "express";
import mongoose from "mongoose";
import { BadRequestError, NotFoundError } from "../../error";
import productModel from "../../models/productModel";

const deleteProduct: RequestHandler = async (req, res, next) => {
    const productId = req.params.productId

    try {
        if (!mongoose.isValidObjectId(productId)) throw new BadRequestError("Invalid product id");

        const product = await productModel.deleteOne({ _id: productId }).exec();

        if (!product) throw new NotFoundError("Product not found");

        res.sendStatus(204);

    } catch (error) {
        next(error)
    }
};

export default deleteProduct;