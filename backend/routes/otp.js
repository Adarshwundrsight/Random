import express from "express"
import {generateotp} from "../controller/otp.js"

const router=express.Router();

router.post('/new',generateotp);

export default router;