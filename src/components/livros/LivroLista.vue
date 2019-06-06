<template>
  <div>
    <div class="products">
      <div class="container">
        <template v-for="livro in livros">
          <span :key="livro.livroID">
            <livro-item :livro="livro" ></livro-item>
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import LivroItem from './LivroItem';

export default {
  name: 'livro-lista',
  created() {
    if (this.livros.length === 0) {
      this.$store.dispatch('todosLivros');
    }
  },
  computed: {
    livros() {
      return this.$store.getters.todosLivros;
    },
  },
  components: {
    'livro-item': LivroItem,
  },
};
</script>

<style>
  .products {
    background: #F7F8FB;
    padding: 30px 0;
  }
</style>
