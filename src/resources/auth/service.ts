import { User } from "@prisma/client";
import dbClient from "../../utils/dbClient";
import { compare } from "bcrypt";

export async function findUserWithValidation(userInfo: User) {
	const foundUser = await dbClient.user.findUnique({
		where: { userName: userInfo.userName },
	});

	if (!foundUser) throw new Error("Username/password incorrect ");

	const isPasswordValid = await compare(
		userInfo.password,
		foundUser.password
	);

	if (!isPasswordValid) throw new Error("Username/password incorrect ");

	return foundUser;
}
