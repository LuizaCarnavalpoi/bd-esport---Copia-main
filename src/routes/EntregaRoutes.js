import express from "express";

import { getEntrega } from "../controllers/EntregaController.js";
import { createEntrega } from "../controllers/EntregaController.js";
import { updateEntrega } from "../controllers/EntregaController.js";
import {  deleteEntrega} from "../controllers/EntregaController.js";


const router = express.Router();
 
router.post('/', createEntrega);
router.get('/:id', getEntrega);
router.put('/:id', updateEntrega);
router.delete('/:id', deleteEntrega);

export default router;