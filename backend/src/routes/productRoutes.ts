import { Router } from "express";
import { createProduct, deleteProduct, getProductByBrand, getProductById, getProducts, getSearchProducts, updateProduct } from "../controllers/productControllers";
//test controllers
import { createProductMongo, getProductsMongo, getProduct } from "../controllers/testController";


const router = Router();

router.get("/products", getProducts);
router.get("/products/search/:search", getSearchProducts);

router.get("/products/:id", getProductById);
router.get("/products/brand/:brand", getProductByBrand);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

//test mongodb
router.get("/mongo", getProductsMongo)
router.get("/mongo/:productId", getProduct)
router.post("/mongo", createProductMongo)

export default router;