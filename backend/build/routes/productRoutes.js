"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/products/index");
const router = (0, express_1.Router)();
// GET routes
router.get("/products/", index_1.getProducts);
router.get("/products/:productId", index_1.getProductById);
// secondary option for route /collections/:brand
router.get("/collections/", index_1.getBrandList);
router.get("/collections/:brand", index_1.getProductsByBrand);
router.get("/filter", index_1.getFilterProducts);
router.get("/search/:searchTerm", index_1.getSearchProducts);
//POST routes
router.post("/products", index_1.createProduct);
//PUT routes
router.put("/products/:productId", index_1.updateProduct);
//DELETE routes
router.delete("/products/:productId", index_1.deleteProduct);
exports.default = router;
