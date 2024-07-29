import {createProdutoo, getProdutoByIdd, updateProdutoo, deleteProdutoo} from '../models/Produto.js';
 
export const createProduto = async (req, res) => {

  const { nome, preco, descricao, categoriaId } = req.body;
 
  try {

    const produto = await createProdutoo({

      nome, preco, descricao, categoriaId

    });

    res.status(201).json(produto);

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao criar produto' });

  }

};
 
export const getProduto = async (req, res) => {

  const { id } = req.params;
 
  try {

    const produto = await getProdutoByIdd(id);

    res.status(200).json(produto);

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao buscar produto' });

  }

};
 
export const updateProduto = async (req, res) => {

  const { id } = req.params;

  const { nome, preco, descricao, categoriaId } = req.body;
 
  try {

    const produto = await updateProdutoo(id, {

      nome, preco, descricao, categoriaId

    });

    res.status(200).json(produto);

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao atualizar produto' });

  }

};
 
export const deleteProduto = async (req, res) => {

  const { id } = req.params;
 
  try {

    await deleteProdutoo(id);

    res.status(200).json({ message: 'Produto deletado com sucesso' });

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao deletar produto' });

  }

};

 