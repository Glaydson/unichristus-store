<template>
  <div>
    <nav>
      <div class="container">
        <ul class="nav__left">
          <!-- Links de Navegação -->
          <li><router-link to="/">Home Produtos</router-link></li>
          <li><router-link to="/homeLivros">Home Livros</router-link></li>
          <li><router-link to="/admin">Admin Produtos</router-link></li>
          <li><router-link to="/adminLivros">Admin Livros</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <!-- Adiciona classes para exibir um loader -->
    <div class="overlay" v-show="showLoader">
      <div class="loading-spinner">
        <div class="dot dotOne"></div>
        <div class="dot dotTwo"></div>
        <div class="dot dotThree"></div>
      </div>
    </div>
  </div>
</template>


<script>
import toastr from 'toastr';

import {
  ADICIONAR_PRODUTO_SUCESSO,
  ATUALIZAR_PRODUTO_SUCESSO,
  REMOVER_PRODUTO_SUCESSO,
} from './store/mutation-types';

export default {
  name: 'App',
  created() {
    // Subscriptions for mutation
    this.$store.subscribe((mutation) => {
      if (mutation.payload) {
        switch (mutation.type) {
          case ADICIONAR_PRODUTO_SUCESSO:
            toastr.success('Produto criado.', 'Sucesso!');
            break;
          case ATUALIZAR_PRODUTO_SUCESSO:
            toastr.success('Produto atualizado.', 'Sucesso!');
            break;
          case REMOVER_PRODUTO_SUCESSO:
            toastr.warning('Produto removido.', 'Apagado!');
            break;
          default:
        }
      }
    });
  },
  computed: {
    showLoader() {
      // Loading spinner
      return this.$store.state.showLoader;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
