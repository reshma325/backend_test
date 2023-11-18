import { Router } from "express";
import authRoutes from './AuthRoutes.js'
import productRoutes from './ProductsRoutes.js'

const router = Router();
router.use("/auth", authRoutes);
router.use("/products",productRoutes)
export default router;
