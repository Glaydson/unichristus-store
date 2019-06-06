<template>
    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <table class="table table-striped">
            <thead>
            <tr>
              <th>Título</th>
              <th>Preço</th>
              <th>Editora</th>
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="livro in livros" :key="livro.livroID">
              <td>{{livro.titulo}}</td>
              <td>${{livro.preco}}</td>
              <td>{{livro.editora}}</td>
              <td><router-link :to="'/adminLivros/editar/'+livro.livroID">
                <i class="fa fa-pencil-square-o"></i></router-link></td>
              <td><a @click="removerLivro(livro.livroID)" ><i class="fa fa-trash"></i></a></td>
            </tr>
            </tbody>
          </table>
        </div>
</template>

<script>
export default {
  computed: {
    livros() {
      return this.$store.getters.todosLivros;
    },
  },
  created() {
    if (this.livros.length === 0) {
      this.$store.dispatch('todosLivros');
    }
  },
  methods: {
    removerLivro(id) {
      this.$store.dispatch('removerLivro', id);
    },
  },
};
</script>
