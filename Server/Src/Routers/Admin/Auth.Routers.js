import { Router } from 'express';
import {Signup} from "../../Controller/admin/Auth.controller.js"
import {validateResult} from "../../Middleware/Validation.middleware.js"
import {RegisterValidator} from "../../Validation/Auth.validation.js"
const router = Router();


router.post("/user/signup",RegisterValidator,validateResult, Signup);

export default router;
