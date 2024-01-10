import { RequestHandler } from "express-serve-static-core";
import productModel from "../../models/productModel";
import { NotFoundError } from "../../error";


const getBrandList: RequestHandler = async ( _req, res, next ) => {

    try {
        const brandList = await productModel.distinct("brand")

        if(!brandList) throw new NotFoundError("Database conection error")
        
        res.status(200).json(brandList);

    } catch (error) {
        next(error)
    }
};

export default getBrandList