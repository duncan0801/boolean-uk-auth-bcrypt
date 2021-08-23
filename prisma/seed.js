const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const designers = [
	{
		firstName: "Emporio",
		lastName: "Arwomani",
	},
	{
		firstName: "Copa",
		lastName: "Gabbana",
	},
	{
		firstName: "Calf",
		lastName: "Incline",
	},
];
const models = [
	{
		firstName: "Hate",
		lastName: "Moss",
	},
	{
		firstName: "Cara",
		lastName: "Delafiend",
	},
	{
		firstName: "Sergio",
		lastName: "Neaves",
	},
];
const guests = [
	{
		firstName: "Ashleigh",
		lastName: "Smith",
		occupation: "Press",
	},
	{
		firstName: "Alison",
		lastName: "Donatello",
		occupation: "Rich Person",
	},
	{
		firstName: "Harry",
		lastName: "Potter",
		occupation: "Wizard",
	},
];
const events = [
	{
		name: "Wizard Catwalk",
		date: new Date("2021/09/15").toISOString(),
	},
	{
		name: "Paris Fashion Day",
		date: new Date("2021/09/22").toISOString(),
	},
	{
		name: "Vougue Fashion Show",
		date: new Date("2021/09/10").toISOString(),
	},
];
const tickets = [
	{
		event: { connect: { id: 1 } },
		guest: { connect: { id: 1 } },
	},
	{
		event: { connect: { id: 1 } },
		guest: { connect: { id: 2 } },
	},
	{
		event: { connect: { id: 2 } },
		guest: { connect: { id: 3 } },
	},
];
const outfits = [
	{
		season: "Winter 2021",
		designer: { connect: { id: randomID(designers) } },
		event: { connect: { id: randomID(events) } },
	},
	{
		season: "Winter 2021",
		designer: { connect: { id: randomID(designers) } },
		event: { connect: { id: randomID(events) } },
	},
	{
		season: "Winter 2021",
		designer: { connect: { id: randomID(designers) } },
		event: { connect: { id: randomID(events) } },
	},
	{
		season: "Winter 2021",
		designer: { connect: { id: randomID(designers) } },
		event: { connect: { id: randomID(events) } },
	},
	{
		season: "Winter 2021",
		designer: { connect: { id: randomID(designers) } },
		event: { connect: { id: randomID(events) } },
	},
	{
		season: "Winter 2021",
		designer: { connect: { id: randomID(designers) } },
		event: { connect: { id: randomID(events) } },
	},
	{
		season: "Winter 2021",
		designer: { connect: { id: randomID(designers) } },
		event: { connect: { id: randomID(events) } },
	},
	{
		season: "Winter 2021",
		designer: { connect: { id: randomID(designers) } },
		event: { connect: { id: randomID(events) } },
	},
	{
		season: "Winter 2021",
		designer: { connect: { id: randomID(designers) } },
		event: { connect: { id: randomID(events) } },
	},
	{
		season: "Winter 2021",
		designer: { connect: { id: randomID(designers) } },
		event: { connect: { id: randomID(events) } },
	},
	{
		season: "Winter 2021",
		designer: { connect: { id: randomID(designers) } },
		event: { connect: { id: randomID(events) } },
	},
	{
		season: "Winter 2021",
		designer: { connect: { id: randomID(designers) } },
		event: { connect: { id: randomID(events) } },
	},
	{
		season: "Winter 2021",
		designer: { connect: { id: randomID(designers) } },
		event: { connect: { id: randomID(events) } },
	},
	{
		season: "Winter 2021",
		designer: { connect: { id: randomID(designers) } },
		event: { connect: { id: randomID(events) } },
	},
	{
		season: "Winter 2021",
		designer: { connect: { id: randomID(designers) } },
		event: { connect: { id: randomID(events) } },
	},
];

function randomID(entity) {
	return Math.ceil(Math.random() * entity.length);
}
async function main() {
	for (const designer of designers) {
		await prisma.designer.create({ data: designer });
	}
	for (const model of models) {
		await prisma.model.create({ data: model });
	}
	for (const guest of guests) {
		await prisma.guest.create({ data: guest });
	}
	for (const event of events) {
		await prisma.event.create({
			data: {
				...event,
				// outfits: {
				// 	create: {
				// 		season: "Autumn2021",
				// 		designerId: randomID(designers),
				// 		eventId: randomID(events),
				// 	},
				// },
			},
		});
	}
	for (const ticket of tickets) {
		await prisma.ticket.create({
			data: ticket,
		});
	}
	for (const outfit of outfits) {
		await prisma.outfit.create({ data: outfit });
	}
}
main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
