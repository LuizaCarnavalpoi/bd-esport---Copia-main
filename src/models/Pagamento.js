import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPagamentoo = async (data) => {

  return await prisma.pagamento.create({
    data: {

    nameCard: data.nameCard,
    numberCard: data.numberCard,
    dateVLM: data.dateVLM,
  	dateVLA: data.dateVLA,
  	codeS: data.codeS,
   	cpf: data.cpf,
    parcelamento: data.parcelamento,
	 	usuario: {
      connect: { 
        id: parseInt(data.usuarioId),
      
      }, // Conecta o pagamento ao usuário pelo id


    }
  }
});
};

export const getPagamentoByIdd = async (id) => {

  return await prisma.pagamento.findUnique({

    where: { id: parseInt(id) },

  });

};

export const updatePagamentoo = async (id, data) => {

  return await prisma.pagamento.update({

    where: { id: parseInt(id) },

    data,

  });

};

export const deletePagamentoo = async (id) => {

  return await prisma.pagamento.delete({

    where: { id: parseInt(id) },

  });

};

