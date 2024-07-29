import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export const createEntregaa = async (data) => {
  return await prisma.entrega.create({
    data: {
      cep: data.cep,
      city: data.city,
      rua: data.rua,
      numero: data.numero,
      complemento: data.complemento,
      estado: {
        connect: {
          id: parseInt(data.estadoId),
        },
      },
    },
  });
};

export const getEntregaByIdd = async (id) => {

  return await prisma.entrega.findUnique({

    where: { id: parseInt(id) },

  });

};

export const updateEntregaa = async (id, data) => {

  return await prisma.entrega.update({

    where: { id: parseInt(id) },

    data,

  });

};

export const deleteEntregaa = async (id) => {

  return await prisma.entrega.delete({

    where: { id: parseInt(id) },

  });

};



