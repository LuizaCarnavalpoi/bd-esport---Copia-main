import {createUsuarioo, getUsuarioById, updateUsuarioo, deleteUsuarioo } from '../models/Usuario.js';
 
export const createUsuario = async (req, res) => {

  const { name, email, passwordHash, token } = req.body;
 
  try {

    const usuario = await createUsuarioo({

      name, email, passwordHash, token

    });

    res.status(201).json(usuario);

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao criar usuário' });

  }

};
 
export const getUsuario = async (req, res) => {

  const { id } = req.params;
 
  try {

    const usuario = await getUsuarioById(id);

    res.status(200).json(usuario);

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao buscar usuário' });

  }

};
 
export const updateUsuario = async (req, res) => {

  const { id } = req.params;

  const { name, email, passwordHash, token } = req.body;
 
  try {

    const usuario = await updateUsuarioo(id, {

      name, email, passwordHash, token
      
    });

    res.status(200).json(usuario);

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao atualizar usuário' });

  }

};
 
export const deleteUsuario = async (req, res) => {

  const { id } = req.params;
 
  try {

    await deleteUsuarioo(id);

    res.status(200).json({ message: 'Usuário deletado com sucesso' });

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao deletar usuário' });

  }

};

 