/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import axios from 'axios';
import { API_BASE } from '../config';
import {
  ADICIONAR_PRODUTO,
  ADICIONAR_PRODUTO_SUCESSO,
  PRODUTO_POR_ID,
  PRODUTO_POR_ID_SUCESSO,
  ATUALIZAR_PRODUTO,
  ATUALIZAR_PRODUTO_SUCESSO,
  REMOVER_PRODUTO,
  REMOVER_PRODUTO_SUCESSO,
  TODOS_PRODUTOS,
  TODOS_PRODUTOS_SUCESSO,
  TODOS_FABRICANTES,
  TODOS_FABRICANTES_SUCESSO,
} from './mutation-types';

export const produtoActions = {
  todosProdutos({ commit }) {
    commit(TODOS_PRODUTOS);
    // Obtém os produtos da API
    axios.get(`${API_BASE}/products`).then((response) => {
      commit(TODOS_PRODUTOS_SUCESSO, response.data);
    });
  },
  produtoPorId({ commit }, payload) {
    commit(PRODUTO_POR_ID);
    // Obtém o produto pelo ID da API
    axios.get(`${API_BASE}/products/${payload}`).then((response) => {
      commit(PRODUTO_POR_ID_SUCESSO, response.data);
    });
  },
  adicionarProduto({ commit }, payload) {
    commit(ADICIONAR_PRODUTO);
    // Cria um novo produto usando a API
    axios.post(`${API_BASE}/products`, payload).then((response) => {
      commit(ADICIONAR_PRODUTO_SUCESSO, response.data);
    });
  },
  atualizarProduto({ commit }, payload) {
    commit(ATUALIZAR_PRODUTO);
    // Atualiza o produto usando a API
    axios.put(`${API_BASE}/products/${payload._id}`, payload).then((response) => {
      commit(ATUALIZAR_PRODUTO_SUCESSO, response.data);
    });
  },
  removerProduto({ commit }, payload) {
    commit(REMOVER_PRODUTO);
    // Remove o produto usando a API
    axios.delete(`${API_BASE}/products/${payload}`, payload).then((response) => {
      console.debug('response', response.data);
      commit(REMOVER_PRODUTO_SUCESSO, response.data);
    });
  },
};

export const fabricanteActions = {
  todosFabricantes({ commit }) {
    commit(TODOS_FABRICANTES);
    // Obtém todos os fabricantes da API
    axios.get(`${API_BASE}/manufacturers`).then((response) => {
      commit(TODOS_FABRICANTES_SUCESSO, response.data);
    });
  },
};

