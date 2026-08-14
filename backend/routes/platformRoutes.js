import express from "express";
import { getPlatformOverview, getUseCases } from "../controllers/platformController.js";

const router = express.Router();

router.get("/overview", getPlatformOverview);
router.get("/use-cases", getUseCases);

export default router;
