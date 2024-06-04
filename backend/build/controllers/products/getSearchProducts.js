"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../../models/productModel"));
const error_1 = require("../../error");
const getSearchProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const searchTerm = req.params.searchTerm;
    //busqueda usando query 
    // const searchTerm = req.query.query
    //GET http://localhost:3000/api/search?query=jpg
    try {
        //index: "searchProducts" was created on AtlasDB to perform fuzzySearch.
        const searchResult = yield productModel_1.default.aggregate([
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
        ]).exec();
        if (searchResult.length === 0)
            throw new error_1.NotFoundError("Product not found");
        res.status(200).json(searchResult);
    }
    catch (error) {
        next(error);
    }
});
exports.default = getSearchProducts;
