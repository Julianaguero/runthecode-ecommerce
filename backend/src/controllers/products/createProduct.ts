import { RequestHandler } from "express";
import { ProductsDataProps } from "../../types/types";
import productModel from "../../models/productModel";
import CustomError from "../../error/CustomError";

export const createProduct: RequestHandler<unknown, unknown, ProductsDataProps, unknown> = async (req, res, next) => {
    const name = req.body.name;
    const brand = req.body.brand;
    const style = req.body.style;
    const price = req.body.price;
    const itemsLeft = req.body.itemsLeft;
    const img = req.body.img;
    const description = req.body.description;
    const rating = req.body.rating;
    const numReviews = req.body.numReviews;

    try {
        if (!name) {
            throw new CustomError("need to have a title", 400, "BAD_REQUEST")
        }
        //we save this on a variable so we can send it back to the client.
        const newProduct = await productModel.create({
            name: name,
            brand: brand,
            style: style,
            price: price,
            itemsLeft: itemsLeft,
            img: img,
            description: description,
            rating: rating,
            numReviews: numReviews,
        });
        //201 = new resource created
        res.status(201).json(newProduct)
    } catch (error) {
        next(error);
    }
}

export default createProduct;
