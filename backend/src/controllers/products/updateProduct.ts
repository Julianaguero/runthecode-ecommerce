import { RequestHandler } from "express";
import { UpdateProductsDataPropsBody, UpdateProductsDataPropsParams } from "../../types/types";
import mongoose from "mongoose";
import { BadRequestError, NotFoundError } from "../../error";
import productModel from "../../models/productModel";

const updateProduct: RequestHandler<UpdateProductsDataPropsParams, unknown, UpdateProductsDataPropsBody, unknown> = async (req, res, next) => {
    // we recive producId from URL params and product values to update from the body of the request.
    const productId = req.params.productId;
    const productToUpdate = req.body

    try {
        if (!mongoose.isValidObjectId(productId)) throw new BadRequestError("Invalid product id");

        const updatedProduct = await productModel.findByIdAndUpdate(
            {_id: productId}, 
            productToUpdate,
            {
                new: true
            }).exec()

        if(!updatedProduct) throw new NotFoundError("Product not found");

        res.status(201).json(updatedProduct);

    } catch (error) {
        next(error);

    }
};

export default updateProduct;