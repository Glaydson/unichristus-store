<template>
  <livro-form @salvar-livro="adicionaLivro" :livro="livro">
  </livro-form>
</template>
<script>
import LivroForm from '@/components/livros/LivroForm';

export default {
  data() {
    return {
      livro: {},
    };
  },
  methods: {
    adicionaLivro(livro) {
      // eslint-disable-next-line
      console.log('livro', livro);
      this.$store.dispatch('adicionarLivro', livro);
    },
  },
  components: {
    'livro-form': LivroForm,
  },
};
</script>
