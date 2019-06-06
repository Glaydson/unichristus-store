<template>
  <div class="product-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 product-details__info">
          <div class="product-details__description">
            <h3>{{livro.titulo}}</h3>
            <p>
              {{livro.dataPublicacao}}
            </p>
          </div>
          <div class="product-details__price-cart">
            <p>${{livro.preco}}</p>
          </div>
          <div class="product-details__price-cart">
            <p>${{livro.editora.nome}}</p>
          </div>
          <ul v-for="autor in livro.autores" :key="autor.autorID">
            <li>
              {{autor.nome}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['livro'],
};
</script>

<style>
  .product-details {
    border-bottom: 2px solid #F5F5F5;
    padding: 30px 0;
  }
  .product-details__description {
    padding-top: 30px;
  }
  .product-details__description small {
    color: #808080;
  }
  .product-details__description h3 {
    margin: 5px 0 30px 0;
  }
  .product-details__price-cart {
    display: flex;
    padding-top: 30px;
  }
  .product-details__price-cart p {
    flex-grow: 2;
    font-size: 20px;
    font-weight: bold;
  }
</style>

