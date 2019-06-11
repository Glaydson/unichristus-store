import Vue from 'vue';
import Vuex from 'vuex';
import { produtoGetters, fabricanteGetters, livroGetters, autoresGetters, editorasGetters } from './getters';
import { produtoMutations, fabricanteMutations, carrinhoMutations, livroMutations, autoresMutations, editorasMutations } from './mutations';
import { produtoActions, fabricanteActions, livroActions, autoresActions, editorasActions } from './actions';

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
    autores: [],
    autor: {},
    editoras: [],
    editora: {},
  },
  getters: Object.assign({}, produtoGetters, fabricanteGetters, livroGetters, autoresGetters,
    editorasGetters),
  mutations: Object.assign({}, produtoMutations, fabricanteMutations, carrinhoMutations,
    livroMutations, autoresMutations, editorasMutations),
  actions: Object.assign({}, produtoActions, fabricanteActions, livroActions, autoresActions,
    editorasActions),
});

