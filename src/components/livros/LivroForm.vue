<template>
  <form @submit.prevent="salvarProduto">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Título</label>
        <input
          type="text"
          placeholder="Titulo"
          v-model="livro.titulo"
          name="titulo"
          class="form-control" />
      </div>
      <div class="form-group">
        <label>Data Publicação</label>
        <input
          type="date"
          class="form-control"
          placeholder="Data Publicação"
          v-model="livro.dataPublicacao"
          name="dataPublicacao" />
      </div>
      <div class="form-group">
        <label>Número de Páginas</label>
        <input
          type="number"
          class="form-control"
          placeholder="Número de Páginas"
          v-model="livro.numeroPaginas"
          name="numeroPaginas" />
      </div>
      <div class="form-group">
        <label>Preço</label>
        <input
          type="preco"
          class="form-control"
          placeholder="Preço"
          v-model="livro.preco"
          name="preco" />
      </div>
      <div class="form-group">
        <label>Autores</label>
        <select
          type="text"
          class="form-control"
          multiple="multiple"
          v-model="livro.autores"
          name="autores">
            <option v-for="autor in autores" :key="autor.id" :value="autor">
                {{autor.nome}}
            </option>
        </select>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Editora</label>
        <select
          type="text"
          class="form-control"
          v-model="livro.editora"
          name="editora">
            <option v-for="editora in editoras" :key="editora.id" :value="editora">
                {{editora.nome}}
            </option>
        </select>
      </div>
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <!-- Renderização condicional para texto do botão -->
          <span v-if="estaEditando">Atualiza Livro</span>
          <span v-else>Adiciona Livro</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ['livro', 'autores', 'editoras', 'estaEditando'],
  methods: {
    salvarLivro() {
      this.$emit('salvar-livro', this.livro);
    },
  },
};
</script>
