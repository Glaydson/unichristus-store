/* eslint-disable no-underscore-dangle */
import {
  ADICIONAR_PRODUTO,
  ADICIONAR_PRODUTO_SUCESSO,
  PRODUTO_POR_ID,
  PRODUTO_POR_ID_SUCESSO,
  ATUALIZAR_PRODUTO,
  ATUALIZAR_PRODUTO_SUCESSO,
  REMOVER_PRODUTO,
  REMOVER_PRODUTO_SUCESSO,
  ADICIONAR_NO_CARRINHO,
  REMOVER_DO_CARRINHO,
  TODOS_PRODUTOS,
  TODOS_PRODUTOS_SUCESSO,
  TODOS_FABRICANTES,
  TODOS_FABRICANTES_SUCESSO,
} from './mutation-types';

export const produtoMutations = {
  [TODOS_PRODUTOS](state) {
    // Chamado ao obter produtos
    state.showLoader = true;
  },
  [TODOS_PRODUTOS_SUCESSO](state, payload) {
    // Chamado após a obtenção dos produtos
    state.showLoader = false;
    // Atualiza o estado dos produtos
    state.produtos = payload;
  },
  [PRODUTO_POR_ID](state) {
    // Chamado ao obter produtos pelo ID
    state.showLoader = true;
  },
  [PRODUTO_POR_ID_SUCESSO](state, payload) {
    // Chamado quando o produto foi obtido
    state.showLoader = false;
    // Atualiza o estado do produto
    state.produto = payload;
  },
  [ADICIONAR_PRODUTO]: (state) => {
    state.showLoader = true;
  },
  [ADICIONAR_PRODUTO_SUCESSO]: (state, payload) => {
    state.showLoader = false;
    state.produtos.push(payload);
  },
  [ATUALIZAR_PRODUTO]: (state) => {
    state.showLoader = true;
  },
  [ATUALIZAR_PRODUTO_SUCESSO]: (state, payload) => {
    state.showLoader = false;
    state.produtos = state.produtos.map((p) => {
      if (p._id === payload._id) {
        payload = { ...payload,
          fabricante: state.fabricantes.filter(x => x._id === payload.fabricante)[0] };
        return payload;
      }
      return p;
    });
  },
  [REMOVER_PRODUTO]: (state) => {
    state.showLoader = true;
  },
  [REMOVER_PRODUTO_SUCESSO]: (state, payload) => {
    state.showLoader = false;
    const index = state.produtos.findIndex(p => p._id === payload);
    console.debug('index', index);
    state.produtos.splice(index, 1);
  },
};

export const carrinhoMutations = {
  [ADICIONAR_NO_CARRINHO]: (state, payload) => state.carrinho.push(payload),
  [REMOVER_DO_CARRINHO]: (state, payload) => {
    const index = state.carrinho.findIndex(p => p._id === payload);
    state.carrinho.splice(index, 1);
    console.log(state.cart, state.cart.length, index);
  },
};
export const fabricanteMutations = {
  [TODOS_FABRICANTES](state) {
    state.showLoader = true;
  },
  [TODOS_FABRICANTES_SUCESSO](state, payload) {
    state.showLoader = false;
    state.fabricantes = payload;
  },
};

