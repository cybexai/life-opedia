import { Router } from "express";

import { createArticle, deleteArticle, getArticle, getArticles, updateArticle } from "../controllers/article.controller";
import { apiV1 } from "../utils";

const router = Router();

router.get(`${apiV1}articles/:id`, getArticle);
router.get(`${apiV1}articles`, getArticles);
router.post(`${apiV1}articles`, createArticle);
router.put(`${apiV1}articles`, updateArticle);
router.delete(`${apiV1}articles/:id`, deleteArticle);

export default router;