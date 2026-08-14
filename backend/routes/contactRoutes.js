import express from "express";
import { z } from "zod";
import { createLead } from "../controllers/contactController.js";
import { validate } from "../middleware/validate.js";

const router = express.Router();

const leadSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().trim().email("Enter a valid email address").max(120),
  company: z.string().trim().min(2, "Company must be at least 2 characters").max(120),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000)
});

router.post("/leads", validate(leadSchema), createLead);

export default router;
