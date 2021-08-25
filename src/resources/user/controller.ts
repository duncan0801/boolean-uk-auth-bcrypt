import dbClient from "../../utils/dbClient";
import { Request, Response } from "express";

export async function createUser(req: Request, res: Response) {
	const userInfo = req.body;
	const newUser = await dbClient.user.create({ data: userInfo });
	res.json({ newUser });
}
export async function getAllUsers(req: Request, res: Response) {
	const allUsers = await dbClient.user.findMany();
	res.json({ users: allUsers });
}
