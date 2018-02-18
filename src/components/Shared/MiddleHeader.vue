<template>
  <div class="middle-header">
    <div class="container">
      <div class="row">
        <div class="col-md-3 logo">
          <a href="index.html"><img alt="Logo" src="../../assets/images/logo-teal.png" class="img-responsive" data-text-logo="Bubbles shop" /></a>
        </div>
        <div style="visibility: hidden;" class="col-sm-8 col-md-6 search-box m-t-2">
          <div class="input-group">
            <input type="text" class="form-control search-input" aria-label="Поиск..." placeholder="Поиск...">
            <div class="input-group-btn">
              <!-- <select class="selectpicker hidden-xs" data-width="150px">
                <option value="0">Все категории</option>
                <option value="1">Платья</option>
                <option value="2">Топы</option>
                <option value="3">Юбки</option>
                <option value="4">Накидки</option>
                <option value="5">Свитера</option>
                <option value="6">Одежда для бега</option>
                <option value="7">Другое</option>
              </select> -->
              <button type="button" class="btn btn-default btn-search"><i class="fa fa-search"></i></button>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-md-3 cart-btn hidden-xs m-t-2">
          <a class="btn btn-theme dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <i class="fa fa-shopping-cart"></i> {{ cart.length }}
            <!-- <span class="caret"></span> -->
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-cart">
            <div class="media" v-for="(cartProduct, i) in cart" :key="i">
              <div class="media-left">
                <a href="detail.html"><img class="media-object img-thumbnail" :src="cartProduct.images[0]" width="50" alt="product"></a>
              </div>
              <div class="media-body">
                <a href="detail.html" class="media-heading">{{ cartProduct.name }}</a>
                <div>{{ cartProduct.qty || 1 }}шт х {{ cartProduct.price.total }}грн.</div>
              </div>
              <div class="media-right">
                <a data-toggle="tooltip" title="Удалить" @click="removeProductFromCart(cartProduct)">
                  <i class="fa fa-remove"></i>
                </a>
              </div>
            </div>
            <div v-if="cart.length > 0">
              <div class="subtotal-cart">Итого: <span>{{cartPrice}}грн.</span></div>
              <div class="text-center">
                  <div class="btn-group" role="group" aria-label="View Cart and Checkout Button">
                    <router-link :to="{ path: '/cart'}" class="btn btn-default btn-sm" type="button">
                      <i class="fa fa-shopping-cart"></i> Корзина
                    </router-link>
                    <router-link :to="{ path: '/checkout'}" class="btn btn-default btn-sm" type="button">
                      <i class="fa fa-shopping-cart"></i> Оформить
                    </router-link>
                  </div>
              </div>
            </div>
            <div v-else>
               <div class="subtotal-cart text-center">
                 Корзина пуста
               </div>
            </div>
          </div>
          <!-- <a href="wishlist.html" class="btn btn-theme" data-toggle="tooltip" title="Wishlist" data-placement="bottom"><i class="fa fa-heart"></i>3</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapGetters, mapActions } = createNamespacedHelpers('products/')

export default {
  name: 'MiddleHeader',
  computed: mapGetters({
    cart: 'cart',
    cartPrice: 'cartPrice',
    error: 'error',
  }),
  methods: {
    removeProductFromCart(product) {
      $('.tooltip').tooltip('destroy');
      this.$store.dispatch('products/removeProductFromCart', { id: product._id });
    },
  },
  created() {
    setTimeout(() => { console.log(this.cart); }, 3000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
