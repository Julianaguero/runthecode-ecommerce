import { RequestHandler } from "express";
import productModel from "../../models/productModel";
import { NotFoundError } from "../../error";
import { type FilterParamsProps } from "../../types/types";


const getFilterProducts: RequestHandler = async (req, res, next) => {
    const brandFilter = req.query.brand as string;
    const styleFilter = req.query.style as string;
    const minPriceFilter = Number(req.query.minPrice);
    const maxPriceFilter = Number(req.query.maxPrice);
    
    const filterParams: FilterParamsProps = {};

     if(brandFilter) filterParams.brand = brandFilter;
     if(styleFilter) filterParams.style = styleFilter;
     if(maxPriceFilter || minPriceFilter) filterParams.price = {$gte: minPriceFilter || 0, $lte: maxPriceFilter || 2000}


    try {
        const filteredProducts = await productModel.find(filterParams).exec()

        if (filteredProducts.length === 0) throw new NotFoundError("Product not found")

        res.status(200).json(filteredProducts);

    } catch (error) {
        next(error)
    }
}

export default getFilterProducts
