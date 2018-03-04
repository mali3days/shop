<template>
  <div>
    <div v-if="!innerFetched" class="loader-wrapper">
      <div v-if="!innerFetched" class="cp-spinner cp-balls"></div>
    </div>
    
    <div v-show="innerFetched" class="fade">
      <Products
        :products="woman"
        :pagination="pagination"
        :dataFetched="dataFetched"
        :meta="meta"
      />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Products from '@/components/Products/Products';

const { mapGetters } = createNamespacedHelpers('products/'); // mapActions

export default {
  name: 'Woman',
  components: {
    Products,
  },
  data() {
    return {
      meta: {
        title: 'Женская одежда',
        link: 'products/getWomanProducts',
      },
      innerFetched: false,
      // msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: mapGetters({
    woman: 'woman',
    pagination: 'pagination',
    dataFetched: 'dataFetched',
    error: 'error',
  }),
  watch: {
    dataFetched(data) {
      setTimeout(() => {
        this.innerFetched = true;
      }, 700);
      setTimeout(() => {
        document.querySelector('.fade').classList.add('in');
      }, 710);
    }
  },
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
