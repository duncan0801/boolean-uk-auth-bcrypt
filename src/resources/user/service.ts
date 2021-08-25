import dbClient from "../../utils/dbClient";
import { User } from ".prisma/client";
import { hash } from "bcrypt";

async function create(userInfo: User) {
	const plainTextPassword = userInfo.password;

	const hashedPassword = await hash(plainTextPassword, 10);

	const newUser = await dbClient.user.create({
		data: {
			...userInfo,
			password: hashedPassword,
		},
	});

	return newUser;
}

export default {
	...dbClient,
	create,
};
