import express from "express";

import { getUsuario } from "../controllers/UsuarioController.js";
import { createUsuario } from "../controllers/UsuarioController.js";
import {  updateUsuario } from "../controllers/UsuarioController.js";
import {  deleteUsuario} from "../controllers/UsuarioController.js";

const router = express.Router();
 
router.post('/',createUsuario);
router.get('/:id',getUsuario);
router.put('/:id', updateUsuario);
router.delete('/:id',deleteUsuario);
 
export default router;

 