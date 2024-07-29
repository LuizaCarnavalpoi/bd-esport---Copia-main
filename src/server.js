import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import fileUpload from "express-fileupload";
import { fileURLToPath } from 'url';
import { dirname } from "path";
import UsuarioRoutes from './routes/UsuarioRoutes.js';
import EntregaRoutes from './routes/EntregaRoutes.js';
import EstadoRoutes from './routes/EstadoRoutes.js';
import PagamentoRoutes from './routes/PagamentoRoutes.js';
import ProdutoRoutes from './routes/ProdutoRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = express();
server.use(cors());
server.use(express.json());
server.use(fileUpload());

server.use(express.static(__dirname+'/public'));

server.use('/', UsuarioRoutes);
server.use('/Entrega', EntregaRoutes);
server.use('/Estado', EstadoRoutes);
server.use('/Pagamento', PagamentoRoutes);
server.use('/Produto', ProdutoRoutes);





server.listen(process.env.PORT, () =>{
    console.log(`Rodando na porta: ${process.env.BASE}`);
});
