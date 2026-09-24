import express from "express";
import { validateBody } from "../middleware/schemaValidator";
import { carreerEnquiry, contactEnquiry } from "../schema/enquiry.schema";
import { contact } from "../controller/enquiry.controller";
import { upload } from "../middleware/upload";
const router = express.Router();

router.post("/contact", validateBody(contactEnquiry), contact);

export default router;
