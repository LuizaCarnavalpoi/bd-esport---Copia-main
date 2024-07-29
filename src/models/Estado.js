import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
 
export const createEstadoo = async (data) => {

  return await prisma.estado.create({ data });

};
 
export const getEstadoByIdd = async (id) => {

  return await prisma.estado.findUnique({

    where: { id: parseInt(id) },

  });

};
 
export const updateEstadoo = async (id, data) => {

  return await prisma.estado.update({

    where: { id: parseInt(id) },

    data,

  });

};
 
export const deleteEstadoo = async (id) => {

  return await prisma.estado.delete({

    where: { id: parseInt(id) },

  });

};
 

 