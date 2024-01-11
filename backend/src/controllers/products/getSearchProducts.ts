import { RequestHandler } from "express";
import productModel from "../../models/productModel";
import { NotFoundError } from "../../error";


const getSearchProducts: RequestHandler = async (req, res, next) => {
    
    const searchTerm = req.params.searchTerm as string;
    //busqueda usando query 
    // const searchTerm = req.query.query
    //GET http://localhost:3000/api/search?query=jpg
    
    try {
        //index: "searchProducts" was created on AtlasDB to perform fuzzySearch.
        const searchResult = await productModel.aggregate([
            {
              $search: {
                index: "searchProducts",
                text: {
                  query: searchTerm,
                  //limited only to this fields and not to all fields
                  path: ["name", "brand", "style"],
                  fuzzy: {},
                }
              }
            }
          ]).exec()

        if(searchResult.length === 0) throw new NotFoundError("Product not found")

        res.status(200).json(searchResult);


    } catch (error) {
        next(error)
    }

}

export default getSearchProducts