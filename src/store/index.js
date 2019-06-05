import Vue from 'vue';
import Vuex from 'vuex';
import { produtoGetters, fabricanteGetters } from './getters';
import { produtoMutations, fabricanteMutations, carrinhoMutations } from './mutations';
import { produtoActions, fabricanteActions } from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // items comprados
    carrinho: [],
    // ajax loader
    showLoader: false,
    // produto selecionado
    produto: {},
    // todos os produtos
    produtos: [],
    // todos os fabricantes
    fabricantes: [],
    // todos os livros
    livros: [],
    // livro selecionado
    livro: {},
  },
  getters: Object.assign({}, produtoGetters, fabricanteGetters),
  mutations: Object.assign({}, produtoMutations, fabricanteMutations, carrinhoMutations),
  actions: Object.assign({}, produtoActions, fabricanteActions),
});

