import { Router } from "express";
import { addProducts, getAllProducts } from "../Controllers/ProductControllers.js";

const router= Router();
router.post("/addProducts",addProducts)
router.get("/getallproducts",getAllProducts)
export default router;