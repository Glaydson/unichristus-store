import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Index from '@/pages/admin/Index';
import Novo from '@/pages/admin/Novo';
import Produtos from '@/pages/admin/Produtos';
import Editar from '@/pages/admin/Editar';
import Carrinho from '@/pages/Carrinho';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/admin',
      name: 'Admin',
      // Rotas Pai continuam tendo um componente
      component: Index,

      // Rotas filhas
      children: [
        {
          path: 'novo',
          name: 'Novo',
          component: Novo,
        },
        {
          path: '',
          name: 'Produtos',
          component: Produtos,
        },
        {
          path: 'editar/:id',
          name: 'Editar',
          component: Editar,
        },
      ],
    },

    {
      path: '/carrinho',
      name: 'Carrinho',
      component: Carrinho,
    },

  ],
});
