import express from "express";

import { createPagamento } from "../controllers/PagamentoController.js";
import {  getPagamento } from "../controllers/PagamentoController.js";
import { updatePagamento  } from "../controllers/PagamentoController.js";
import {  deletePagamento } from "../controllers/PagamentoController.js";

const router = express.Router();

router.post('/', createPagamento);
router.get('/:id', getPagamento);
router.put('/:id',updatePagamento);
router.delete('/:id',deletePagamento);
 
export default router;

 