import { Router } from "express";

import { createCategorie, deleteCategorie, getCategorie, getCategories, updateCategorie } from "../controllers/categorie.controller";
import { apiV1 } from "../utils";

const router = Router();

router.get(`${apiV1}categories/:id`, getCategorie);
router.get(`${apiV1}categories`, getCategories);
router.post(`${apiV1}categories`, createCategorie);
router.put(`${apiV1}categories`, updateCategorie);
router.delete(`${apiV1}categories/:id`, deleteCategorie);

export default router;