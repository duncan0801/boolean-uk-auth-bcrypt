import { Request, Response } from "express";
import dbClient from "../../utils/dbClient";
import {compare} from "bcrypt"
import { findUserWithValidation} from "./service"

export async function loginUser(req: Request, res: Response) {
	const loginData = req.body;

	try {
        const foundUser = await findUserWithValidation(loginData)
        res.json({foundUser: {id: foundUser.id, userName: foundUser.userName }})
    } catch (error) {
        res.status(401).json({error: error.message})
    }


}
