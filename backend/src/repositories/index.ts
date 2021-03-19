import { getRepository } from "typeorm";
import * as entities from "../entity";

export function articleRepository() {
    return getRepository(entities.Article);
}

export function categorieRepository() {
    return getRepository(entities.Categorie);
}

export function utilisateurRepository() {
    return getRepository(entities.Utilisateur);
}