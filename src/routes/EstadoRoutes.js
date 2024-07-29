import express from "express";

import { createEstado } from "../controllers/EstadoController.js";
import {  getEstado } from "../controllers/EstadoController.js";
import { updateEstado } from "../controllers/EstadoController.js";
import {  deleteEstado } from "../controllers/EstadoController.js";



const router = express.Router();
 
router.post('/', createEstado);
router.get('/:id', getEstado);
router.put('/:id', updateEstado);
router.delete('/:id',deleteEstado);
 
export default router;