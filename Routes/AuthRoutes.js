import { Router } from "express";
import { Login, Register } from "../Controllers/AuthControllers.js";

const router= Router();
router.get("/login",Login)
router.get("/register",Register)

export default router;