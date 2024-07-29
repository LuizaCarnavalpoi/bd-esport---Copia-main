import {createPagamentoo, getPagamentoByIdd, updatePagamentoo, deletePagamentoo} from '../models/Pagamento.js';
 
export const createPagamento = async (req, res) => {

  const { nameCard,  numberCard,  dateVLM, 	dateVLA, codeS, cpf, usuarioId, parcelamento } = req.body;
 
  try {

    const pagamento = await createPagamentoo({

      nameCard,  numberCard,  dateVLM, 	dateVLA, codeS, cpf, usuarioId, parcelamento

    });

    res.status(201).json(pagamento);

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao criar pagamento' });

  }

};
 
export const getPagamento = async (req, res) => {

  const { id } = req.params;
 
  try {

    const pagamento = await getPagamentoByIdd(id);

    res.status(200).json(pagamento);

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao buscar pagamento' });

  }

};
 
export const updatePagamento = async (req, res) => {

  const { id } = req.params;

  const {nameCard,  numberCard,  dateVLM, 	dateVLA, codeS, cpf, usuarioId, parcelamento } = req.body;
 
  try {

    const pagamento = await updatePagamentoo(id, {

      nameCard,  numberCard,  dateVLM, 	dateVLA, codeS, cpf, usuarioId, parcelamento

    });

    res.status(200).json(pagamento);

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao atualizar pagamento' });

  }

};
 
export const deletePagamento = async (req, res) => {

  const { id } = req.params;
 
  try {

    await deletePagamentoo(id);

    res.status(200).json({ message: 'Pagamento deletado com sucesso' });

  } catch (error) {

    console.error(error);

    res.status(500).json({ message: 'Erro ao deletar pagamento' });

  }

};

 