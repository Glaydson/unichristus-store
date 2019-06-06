<template>
  <div>
    <livro-detalhes :livro="livro" :estaAdicionando="true" ></livro-detalhes>
  </div>

</template>

<script>
import LivroDetalhes from '../components/livros/LivroDetalhes';

export default {
  created() {
    this.$store.dispatch('livroPorId', this.$route.params.id);
  },
  computed: {
    livro() {
      return this.$store.getters.livro;
    },
  },
  components: {
    'livro-detalhes': LivroDetalhes,
  },
};
</script>
