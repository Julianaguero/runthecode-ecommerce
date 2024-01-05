import { RequestHandler } from "express";
import productModel from "../../models/productModel";
import { NotFoundError } from "../../error";

const getProductsByBrand: RequestHandler = async (req, res, next) => {
    const requestedBrand = req.params.brand as string;
    
    try {
        const selectedBrand = await productModel.aggregate([
            {
                $search: {
                    index: "searchProducts",
                    text: {
                        query: requestedBrand,
                        path: ["brand"],
                    }
                }}]).exec()
        
        if(selectedBrand.length === 0) throw new NotFoundError("Brand not found")
                
        res.status(200).json(selectedBrand)
    } catch (error) {
        next(error)
    }
};

export default getProductsByBrand;