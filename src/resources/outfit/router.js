const router = require("express").Router();
const { getAll, getOneById, createOne, deleteById } = require("./controller");

router.get("/", getAll);
router.get("/:id", getOneById);
router.post("/", createOne);
router.delete("/:id", deleteById);

module.exports = router;
