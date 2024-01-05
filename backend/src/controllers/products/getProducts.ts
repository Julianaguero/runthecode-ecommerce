import { RequestHandler } from "express";
import productModel from "../../models/productModel";
import { NotFoundError } from "../../error";


export const getProducts: RequestHandler = async (_req, res, next) => {

    try {
        const products = await productModel.find().exec();
  
        if(!products) throw new NotFoundError("Products not exist")

        res.status(200).json(products)
    } catch (error) {
        // add ERROR boundaries
        next(error)
    }
};

export default getProducts;
