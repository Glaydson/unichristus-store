<template>
    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <table class="table table-striped">
            <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Fabricante</th>
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="produto in produtos" :key="produto._id">
              <td>{{produto.name}}</td>
              <td>${{produto.price}}</td>
              <td>{{produto.manufacturer.name}}</td>
              <td><router-link :to="'/admin/editar/'+produto._id">
                <i class="fa fa-pencil-square-o"></i></router-link></td>
              <td><a @click="removerProduto(produto._id)" ><i class="fa fa-trash"></i></a></td>
            </tr>
            </tbody>
          </table>
        </div>
</template>

<script>
export default {
  computed: {
    produtos() {
      return this.$store.getters.todosProdutos;
    },
  },
  created() {
    if (this.produtos.length === 0) {
      this.$store.dispatch('todosProdutos');
    }
  },
  methods: {
    removerProduto(id) {
      this.$store.dispatch('removerProduto', id);
    },
  },
};
</script>
