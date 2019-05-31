<template>
  <div>
    <div class="title">
      <h1><i class="fa fa-braille"></i> Em Estoque</h1>
    </div>
    <produto-lista></produto-lista>
  </div>
</template>

<script>
import ProdutoLista from '../components/produtos/ProdutoLista';

export default {
  name: 'home',
  components: {
    'produto-lista': ProdutoLista,
  },
};
</script>
