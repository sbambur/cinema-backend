import { Router } from "express";
import HallSchemaContller from "../controllers/HallSchemaContller.js";
import SessionController from "../controllers/SessionController.js";

const router = new Router();

router.post("/sessions", SessionController.create);
router.get("/sessions", SessionController.getAll);
router.get("/sessions/:id", SessionController.getOne);
router.put("/sessions", SessionController.update);
router.delete("/sessions/:id", SessionController.delete);

router.post("/scheme", HallSchemaContller.create);
router.get("/scheme", HallSchemaContller.getAll);
router.delete("/scheme/:id", HallSchemaContller.delete);

export default router;
