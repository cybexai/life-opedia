import { Router } from "express";

import { signin } from "../controllers/auth.controller";
import { apiV1 } from "../utils";

const router = Router();

router.post(`${apiV1}auth/signin`, signin);

export default router;