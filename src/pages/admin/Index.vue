<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu">
            <!-- Links para as rotas irmãs -->
            <li><router-link to="/admin">Ver Produtos</router-link></li>
            <li><router-link to="/admin/novo">Novo Produto</router-link></li>
          </ul>
        </div>
        <!-- Outlet para as rotas filhas -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style>
  .admin-menu a {
    display: block;
    background: #EFDB06;
    border: 1px solid #F9E610;
    color: #3D3D3D;
    padding: 10px 15px;
    font-family: 'PT Sans', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
    transform: scaleX(1);
    transition: transform 200ms ease-in;
  }
  .admin-menu a:hover {
    text-decoration: none;
    transform: scaleX(1.02);
  }
  .admin-new, .admin-products {
    border-bottom: 2px solid #F5F5F5;
    padding: 30px 0;
  }
</style>
