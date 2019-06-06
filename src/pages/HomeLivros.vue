<template>
  <div>
    <div class="title">
      <h1><i class="fa fa-braille"></i> Em Estoque</h1>
    </div>
    <livro-lista></livro-lista>
  </div>
</template>

<script>
import LivroLista from '../components/livros/LivroLista';

export default {
  name: 'homeLivros',
  components: {
    'livro-lista': LivroLista,
  },
};
</script>
