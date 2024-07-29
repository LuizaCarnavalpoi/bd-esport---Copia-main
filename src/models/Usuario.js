import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
 
export const createUsuarioo = async (data) => {

  return await prisma.usuario.create({ data });

};
 
export const getUsuarioById = async (id) => {

  return await prisma.usuario.findUnique({

    where: { id: parseInt(id) },

  });

};
 
export const updateUsuarioo = async (id, data) => {

  return await prisma.usuario.update({

    where: { id: parseInt(id) },

    data,

  });

};
 
export const deleteUsuarioo = async (id) => {

  return await prisma.usuario.delete({

    where: { id: parseInt(id) },

  });

};
 

 