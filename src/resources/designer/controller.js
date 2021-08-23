const dbClient = require("../../utils/dbClient");

async function getAll(req, res) {
	const designers = await dbClient.designer.findMany();
	res.json(designers);
}
async function getOneById(req, res) {
	const id = Number(req.params.id);
	const designer = await dbClient.designer.findUnique({ where: { id } });
	res.json(designer);
}
async function createOne(req, res) {
	const newDesigner = req.body;
	try {
		const savedDesigner = await dbClient.designer.create({
			data: newDesigner,
		});
		res.json({ savedDesigner });
	} catch (error) {
		res.json({ error });
	}
}
async function deleteById(req, res) {
	const id = Number(req.params.id);

	try {
		const deletedDesigner = await dbClient.designer.delete({
			where: { id },
		});
		res.json({ deletedDesigner });
	} catch (error) {
		res.json({ error });
	}
}

module.exports = { getAll, getOneById, createOne, deleteById };
