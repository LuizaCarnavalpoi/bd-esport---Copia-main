import {createEstadoo, getEstadoByIdd, updateEstadoo, deleteEstadoo} from '../models/Estado.js';
 
export const createEstado = async (req, res) => {

  const { name } = req.body;
 
  try {

    const estado = await createEstadoo({ name });

    res.status(201).json(estado);

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao criar estado' });

  }

};
 
export const getEstado = async (req, res) => {

  const { id } = req.params;
 
  try {

    const estado = await getEstadoByIdd(id);

    res.status(200).json(estado);

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao buscar estado' });

  }

};
 
export const updateEstado = async (req, res) => {

  const { id } = req.params;

  const { name } = req.body;
 
  try {

    const estado = await updateEstadoo(id, { name });

    res.status(200).json(estado);

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao atualizar estado' });

  }

};
 
export const deleteEstado = async (req, res) => {

  const { id } = req.params;
 
  try {

    await deleteEstadoo(id);

    res.status(200).json({ message: 'Estado deletado com sucesso' });

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao deletar estado' });

  }

};

 