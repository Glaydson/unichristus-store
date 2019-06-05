<template>
  <div>
    <produto-detalhes :produto="produto" :estaAdicionando="true"></produto-detalhes>
  </div>
</template>

<script>
import ProdutoDetalhes from '../components/produtos/ProdutoDetalhes';

export default {
  created() {
    this.$store.dispatch('produtoPorId', this.$route.params.id);
  },
  computed: {
    produto() {
      return this.$store.getters.produto;
    },
  },
  components: {
    'produto-detalhes': ProdutoDetalhes,
  },
};
</script>
