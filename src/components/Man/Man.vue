<template>
  <Products :products="products" :dataFetched="dataFetched" />
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapGetters, mapActions } = createNamespacedHelpers('products/');

import Products from '@/components/Products/Products';

export default {
  name: 'Man',
  components: {
    Products
  },
  data() {
    return {
      // msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: mapGetters({
    products: 'products',
    dataFetched: 'dataFetched',
    error: 'error',
  }),
  created() {
    this.$store.dispatch('products/getProducts');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
