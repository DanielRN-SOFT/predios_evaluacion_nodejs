import { Router } from "express";
import * as PredioCtr from "../controllers/predio.controllers.js";

const router = Router();

router.get("/predios/listar", PredioCtr.getPredios);
router.get("/predios/listar/:id", PredioCtr.getPredioById);
router.post("/predios/crear", PredioCtr.createPredio);
router.put("/predios/actualizar/:id", PredioCtr.updatePredio);
router.delete("/predios/eliminar/:id", PredioCtr.deletePredio);

export default router;