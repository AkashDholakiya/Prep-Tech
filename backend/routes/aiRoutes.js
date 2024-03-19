import express from 'express';
import {aiCall} from "../controllers/aiController.js";

const router = express.Router();

router.post("/ques", aiCall);
  
export default router;     