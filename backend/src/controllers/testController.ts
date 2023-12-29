import { RequestHandler } from "express";
import ProductModel from "../models/productModel"

export const getProductsMongo: RequestHandler = async (req, res, next) => {
    try {
        const products = await ProductModel.find().exec()
        res.status(200).json(products)
    } catch (error) {
        next(error)
    }
};

export const getProduct: RequestHandler = async (req, res, next) => {
    const productId = req.params.productId;
    
    try {
        const product = await ProductModel.findById(productId).exec();
        res.status(200).json(product)
    } catch (error) {
        next(error)
    }
};

export const createProductMongo: RequestHandler = async (req, res, next) => {
    const name = req.body.name;
    const brand = req.body.brand;
    const style = req.body.style;
    const price = req.body.price;
    const itemsLeft = req.body.itemsLeft;
    const img = req.body.img;
    const description = req.body.description;
    const rating = req.body.rating;
    const numReviews = req.body.numReviews;
    console.log(name, brand, style, price)

    try {
        //we save this on a variable so we can send it back to the client.
        const newProduct = await ProductModel.create({
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
        console.log(newProduct)
        //201 = new resource created
        res.status(201).json(newProduct)
    } catch (error) {
        next(error);
    }
}

