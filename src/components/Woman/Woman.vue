<template>
  <Products
    :products="woman"
    :pagination="pagination"
    :dataFetched="dataFetched"
    :meta="meta"
  />
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapGetters, mapActions } = createNamespacedHelpers('products/');

import Products from '@/components/Products/Products';

export default {
  name: 'Woman',
  components: {
    Products
  },
  data() {
    return {
      meta: {
        title: 'Женская одежда',
        link: 'products/getWomanProducts',
      },
      // msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: mapGetters({
    woman: 'woman',
    pagination: 'pagination',
    dataFetched: 'dataFetched',
    error: 'error',
  }),
  created() {
    // this.$store.dispatch(this.meta.link, {
    //   limit: 8,
    //   offset: 0
    // });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
