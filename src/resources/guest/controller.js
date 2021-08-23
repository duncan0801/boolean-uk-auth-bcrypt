const dbClient = require("../../utils/dbClient");

async function getAll(req, res) {
	const guests = await dbClient.guest.findMany();
	res.json(guests);
}
async function getOneById(req, res) {
	const id = Number(req.params.id);
	const guest = await dbClient.guest.findUnique({ where: { id } });
	res.json(guest);
}
async function createOne(req, res) {
	const reqGuest = req.body;
	try {
		const savedGuest = await dbClient.guest.create({ data: reqGuest });
		res.json({ savedGuest });
	} catch (error) {
		res.json({ error: error.message });
	}
}
async function deleteById(req, res) {
	const id = Number(req.params.id);

	try {
		const deletedGuest = await dbClient.guest.delete({
			where: { id },
		});
		res.json({ deletedGuest });
	} catch (error) {
		res.json({ error });
	}
}

module.exports = { getAll, getOneById, createOne, deleteById };
