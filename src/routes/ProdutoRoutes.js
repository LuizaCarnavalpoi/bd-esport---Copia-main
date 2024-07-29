import express from "express";

import { createProduto } from "../controllers/ProdutoController.js";
import {  getProduto } from "../controllers/ProdutoController.js";
import { updateProduto  } from "../controllers/ProdutoController.js";
import {  deleteProduto } from "../controllers/ProdutoController.js";

const router = express.Router();
 
router.post('/', createProduto);
router.get('/:id',getProduto);
router.put('/:id', updateProduto);
router.delete('/:id', deleteProduto);
 
export default router;

 