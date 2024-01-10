import { Router } from "express";

import  { createProduct, getProductById, getProducts, getProductsByBrand, getSearchProducts, updateProduct, deleteProduct, getBrandList} from "../controllers/products/index"


const router = Router();
// GET routes
router.get("/products", getProducts)
router.get("/products/:productId", getProductById)
// secondary option for route /collections/:brand
router.get("/collections/brands/", getBrandList);
router.get("/collections/brands/:brand", getProductsByBrand);
router.get("/search/:searchTerm", getSearchProducts)

//POST routes
router.post("/products", createProduct)

//PUT routes
router.put("/products/:productId", updateProduct)

//DELETE routes
router.delete("/products/:productId", deleteProduct);

export default router;