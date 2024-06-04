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
const mongoose_1 = __importDefault(require("mongoose"));
const error_1 = require("../../error");
const productModel_1 = __importDefault(require("../../models/productModel"));
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // we recive producId from URL params and product values to update from the body of the request.
    const productId = req.params.productId;
    const productToUpdate = req.body;
    try {
        if (!mongoose_1.default.isValidObjectId(productId))
            throw new error_1.BadRequestError("Invalid product id");
        const updatedProduct = yield productModel_1.default.findByIdAndUpdate({ _id: productId }, productToUpdate, {
            new: true
        }).exec();
        if (!updatedProduct)
            throw new error_1.NotFoundError("Product not found");
        res.status(201).json(updatedProduct);
    }
    catch (error) {
        next(error);
    }
});
exports.default = updateProduct;
