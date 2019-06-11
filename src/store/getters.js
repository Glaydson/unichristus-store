/* eslint-disable no-underscore-dangle */
export const produtoGetters = {
  // Todos os produtos
  todosProdutos: state => state.produtos,
  // Obter um produto pelo seu ID
  produtoByID: (state, getters) => (id) => {
    if (getters.todosProdutos.length > 0) {
      return getters.todosProdutos.filter(p => p._id === id)[0];
    }
    return state.produto;
  },
  produto: state => state.produto,
};

export const fabricanteGetters = {
  // Todos os fabricantes
  todosFabricantes: state => state.fabricantes,
};

export const livroGetters = {
  // Todos os livros
  todosLivros: state => state.livros,
  livro: state => state.livro,
};

export const autoresGetters = {
  // Todos os autores
  todosAutores: state => state.autores,
  autor: state => state.autor,
};

export const editorasGetters = {
  todasEditoras: state => state.editoras,
  editora: state => state.editora,
};
