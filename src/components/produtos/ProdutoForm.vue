<template>
  <form @submit.prevent="salvarProduto">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Nome"
          v-model="modelo.nome"
          name="nome"
          class="form-control" />
      </div>
      <div class="form-group">
        <label>Preço</label>
        <input
          type="number"
          class="form-control"
          placeholder="Preço"
          v-model="modelo.preco"
          name="preco" />
      </div>      
<div class="form-group">
        <label>Fabricante</label>
        <select
          type="text"
          class="form-control"
          v-model="modelo.fabricante"
          name="fabricante">
            <option v-for="fabricante in fabricantes" :key="fabricante._id" :value="fabricante">
                {{fabricante.nome}}
            </option>
        </select>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Imagem</label>
        <input
          type="text"
          class="form-control"
          placeholder="Imagem"
          v-model="modelo.imagem"
          name="imagem" />
      </div>
<div class="form-group">
        <label>Descrição</label>
        <textarea
          class="form-control"
          placeholder="Descrição"
          rows="5"
          v-model="modelo.descricao"
          name="descricao"></textarea>
      </div>
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <!-- Renderização condicional para texto do botão -->
          <span v-if="estaEditando">Atualiza Produto</span>
          <span v-else>Adiciona Produto</span>
        </button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  props: ['modelo', 'estaEditando'],
  data() {
    return {
      fabricantes: [
        {
          _id: 'sam',
          nome: 'Samsung',
        },
        {
          _id: 'apple',
          nome: 'Apple',
        },
      ],
    };
  },
  methods: {
    salvarProduto() {
      this.$emit('salvar-produto', this.modelo);
    },
  },
};
</script>
