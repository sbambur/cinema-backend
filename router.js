import { Router } from "express";
import HallController from "./Halls/HallController.js";

const router = new Router()

router.post('/halls', HallController.create)
router.get('/halls', HallController.getAll)
router.get('/halls/:id', HallController.getOne)
router.put('/halls', HallController.update)
router.delete('/halls/:id', HallController.delete)

export default router;