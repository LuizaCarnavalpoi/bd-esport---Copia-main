import {createEntregaa, getEntregaByIdd, updateEntregaa, deleteEntregaa} from '../models/Entrega.js';
 
export const createEntrega = async (req, res) => {

  const { cep, city, rua, numero, complemento, estadoId } = req.body;
 
  try {

    const entrega = await createEntregaa({

      cep, city, rua, numero, complemento, estadoId

    });

    res.status(201).json(entrega);

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao criar entrega' });

  }

};
 
export const getEntrega = async (req, res) => {

  const { id } = req.params;
 
  try {

    const entrega = await getEntregaByIdd(id);

    res.status(200).json(entrega);

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao buscar entrega' });

  }

};
 
export const updateEntrega = async (req, res) => {

  const { id } = req.params;

  const { cep, city, rua, numero, complemento, estadoId } = req.body;
 
  try {

    const entrega = await updateEntregaa(id, {

      cep, city, rua, numero, complemento, estadoId

    });

    res.status(200).json(entrega);

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao atualizar entrega' });

  }

};
 
export const deleteEntrega = async (req, res) => {

  const { id } = req.params;
 
  try {

    await deleteEntregaa(id);

    res.status(200).json({ message: 'Entrega deletada com sucesso' });

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao deletar entrega' });

  }

};

 