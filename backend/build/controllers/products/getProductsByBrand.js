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
const getProductsByBrand = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const requestedBrand = req.params.brand;
    try {
        const selectedBrand = yield productModel_1.default.aggregate([
            {
                $search: {
                    index: "searchProducts",
                    text: {
                        query: requestedBrand,
                        path: ["brand"],
                    }
                }
            }
        ]).exec();
        if (selectedBrand.length === 0)
            throw new error_1.NotFoundError("Brand not found");
        res.status(200).json(selectedBrand);
    }
    catch (error) {
        next(error);
    }
});
exports.default = getProductsByBrand;
