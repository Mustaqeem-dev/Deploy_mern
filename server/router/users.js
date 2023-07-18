import express from "express";
import {
  RegisterUser,
  loginUser,
  ApplyJob,
  ForgetPassword,
  SetPassword,
  SendEmail,
} from "../controllers/index.js";
const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", loginUser);
router.post("/applyJob", ApplyJob);
router.post("/forgetPassword", ForgetPassword);
router.post("/setPassword", SetPassword);
router.post("/sendEmail", SendEmail);

export default router;
