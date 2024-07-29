import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
 
export const createProdutoo = async (data) => {

  return await prisma.produto.create({ data });

};
 
export const getProdutoByIdd = async (id) => {

  return await prisma.produto.findUnique({

    where: { id: parseInt(id) },

  });

};
 
export const updateProdutoo = async (id, data) => {

  return await prisma.produto.update({

    where: { id: parseInt(id) },

    data,

  });

};
 
export const deleteProdutoo = async (id) => {

  return await prisma.produto.delete({

    where: { id: parseInt(id) },

  });

};
 


 