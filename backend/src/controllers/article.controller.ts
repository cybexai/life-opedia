import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';

import { articleRepository } from "../repositories";
import * as UTILS from "../utils";

export const getArticles = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const results = await articleRepository().find({relations:['_categorie']});
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).send('An error occured !');
    }
};

export const getArticle = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const results = await articleRepository().findOne({ id: req.params.id },{relations:['_categorie']});
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).send('An error occured !');
    }
};

export const createArticle = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        let article = req.body;

        article = {
            ...article,
            id: uuidv4(),
        }

        const results = await articleRepository().save(article);

        return res.status(201).json(results);
    } catch (error) {
        return res.status(500).send('An error occured !');
    }
}

export const updateArticle = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const article = await articleRepository().findOne(req.body.id);
        if (article) {
            articleRepository().merge(article, req.body);
            const results = await articleRepository().save(article);
            return res.status(200).json(results);
        }

        return res.json({ msg: 'No article found' });
    } catch (error) {
        return res.status(500).send('An error occured !');
    }
};

export const deleteArticle = async (req: Request, res: Response): Promise<Response> => {    
    try {
        const results = await articleRepository().delete(req.params.id);
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).send('An error occured !');
    }
};
