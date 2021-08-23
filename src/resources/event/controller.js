const dbClient = require("../../utils/dbClient");

async function getAll(req, res) {
	const events = await dbClient.event.findMany();
	res.json(events);
}
async function getOneById(req, res) {
	const id = Number(req.params.id);
	const event = await dbClient.event.findUnique({ where: { id } });
	res.json(event);
}
async function createOne(req, res) {
	const { name, date } = req.body;

	const formattedDate = new Date(date).toISOString();
	try {
		const savedEvent = await dbClient.event.create({
			data: {
				name,
				date: formattedDate,
			},
		});
		res.json({ savedEvent });
	} catch (error) {
		res.json({ error: error.message });
	}
}
async function deleteById(req, res) {
	const id = Number(req.params.id);

	try {
		const deletedEvent = await dbClient.event.delete({
			where: { id },
		});
		res.json({ deletedEvent });
	} catch (error) {
		res.json({ error });
	}
}

module.exports = { getAll, getOneById, createOne, deleteById };
