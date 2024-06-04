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
exports.createProduct = void 0;
const productModel_1 = __importDefault(require("../../models/productModel"));
const CustomError_1 = __importDefault(require("../../error/CustomError"));
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
            throw new CustomError_1.default("need to have a title", 400, "BAD_REQUEST");
        }
        //we save this on a variable so we can send it back to the client.
        const newProduct = yield productModel_1.default.create({
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
        res.status(201).json(newProduct);
    }
    catch (error) {
        next(error);
    }
});
exports.createProduct = createProduct;
exports.default = exports.createProduct;
