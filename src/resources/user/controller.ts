import dbClient from "../../utils/dbClient";
import { Request, Response } from "express";
import user from "./service";

export async function createUser(req: Request, res: Response) {
	const userInfo = req.body;
	const newUser = await user.create(userInfo); //new create function from service.ts
	res.json({ newUser });
}
export async function getAllUsers(req: Request, res: Response) {
	const allUsers = await dbClient.user.findMany();
	res.json({ users: allUsers });
}
