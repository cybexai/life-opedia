import { Request, Response } from "express";

import { utilisateurRepository } from "../repositories";
import { Utilisateur } from "../entity";


export const signin = async (
    req: Request,
    res: Response
): Promise<Response> => {

    let { nom } = req.body;
    console.log(req.body)

    if (!(nom)) {
        return res.status(400).send();
    }

    let user: Utilisateur;

    try {
        user = await utilisateurRepository().findOne({ where: [{ nom }] })
    } catch (error) {
        return res.status(500).send("An error occured");
    }

    if (user === undefined) {
        return res.status(401).send("User does not exist");
    } else {
        return res.status(200).send("User Authenticated");        
    }
};
