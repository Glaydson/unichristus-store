<template>
  <div>
    <div class="produtos">
      <div class="container">
        <template v-for="produto in produtos">
          <span :key="produto._id">
            <produto-item :produto="produto" ></produto-item>
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ProdutoItem from './ProdutoItem';

export default {
  name: 'produto-lista',
  created() {
    if (this.produtos.length === 0) {
      this.$store.dispatch('todosProdutos');
    }
  },
  computed: {
    produtos() {
      return this.$store.getters.todosProdutos;
    },
  },
  components: {
    'produto-item': ProdutoItem,
  },
};
</script>

<style>
  .produtos {
    background: #F7F8FB;
    padding: 30px 0;
  }
</style>
