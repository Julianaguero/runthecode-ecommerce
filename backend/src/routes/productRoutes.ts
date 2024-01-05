import { Router } from "express";

import  { createProduct, getProductById, getProducts, getProductsByBrand, getSearchProducts, updateProduct} from "../controllers/products/index"


const router = Router();


// router.put("/products/:id", updateProduct);
// router.delete("/products/:id", deleteProduct);

router.get("/products", getProducts)
router.get("/products/:productId", getProductById)
router.get("/products/brand/:brand", getProductsByBrand);
router.get("/search/:searchTerm", getSearchProducts)


router.post("/products", createProduct)

router.patch("/products/:productId", updateProduct)

export default router;