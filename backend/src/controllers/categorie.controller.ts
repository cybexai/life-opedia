import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';

import { categorieRepository } from "../repositories";
import * as UTILS from "../utils";

export const getCategories = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const results = await categorieRepository().find();
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).send('An error occured !');
    }
};

export const getCategorie = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const results = await categorieRepository().findOne({ id: req.params.id });
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).send('An error occured !');
    }
};

export const createCategorie = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        let categorie = req.body;

        categorie = {
            ...categorie,
            id: uuidv4(),
        }

        const results = await categorieRepository().save(categorie);

        return res.status(201).json(results);
    } catch (error) {
        return res.status(500).send('An error occured !');
    }
}

export const updateCategorie = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const categorie = await categorieRepository().findOne(req.body.id);
        if (categorie) {
            categorieRepository().merge(categorie, req.body);
            const results = await categorieRepository().save(categorie);
            return res.status(200).json(results);
        }

        return res.json({ msg: 'No categorie found' });
    } catch (error) {
        return res.status(500).send('An error occured !');
    }
};

export const deleteCategorie = async (req: Request, res: Response): Promise<Response> => {    
    try {
        const results = await categorieRepository().delete(req.params.id);
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).send('An error occured !');
    }
};
