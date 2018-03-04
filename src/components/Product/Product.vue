<template>
  <div>

    <div v-if="!innerFetched" class="loader-wrapper">
      <div v-if="!innerFetched" class="cp-spinner cp-balls"></div>
    </div>

    <div v-show="innerFetched" class="fade">
      <TopHeader/>
      <MiddleHeader/>
      <NavigationBar/>

      <BreadCrumbs
        v-if="product"
        :model="product.model"
        :type="product.type"
      />
        <!-- :gender="products[0].gender" -->

      <MainContent
        v-if="product && similarProducts"
        :product="product"
        :similarProducts="similarProducts"
        :dataFetched="dataFetched"
      />

      <FooterComponent />
      <BackToTop/>
      <!-- <ColorChooser/> -->
     </div> 
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import TopHeader from '@/components/Shared/TopHeader';
import MiddleHeader from '@/components/Shared/MiddleHeader';
import NavigationBar from '@/components/Shared/NavigationBar';

import BreadCrumbs from '@/components/Shared/BreadCrumbs';
import MainContent from '@/components/Product/MainContent';

import FooterComponent from '@/components/Shared/FooterComponent';
import BackToTop from '@/components/Shared/BackToTop';
// import ColorChooser from '@/components/Shared/ColorChooser';

const { mapGetters } = createNamespacedHelpers('products/');  // mapActions

export default {
  name: 'Product',
  components: {
    TopHeader,
    MiddleHeader,
    NavigationBar,
    BreadCrumbs,
    // FullSlider,
    MainContent,
    FooterComponent,
    BackToTop,
    // ColorChooser,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      innerFetched: false,
    };
  },
  computed: mapGetters({
    product: 'product',
    similarProducts: 'products',
    dataFetched: 'dataFetched',
    error: 'error',
  }),
  created() {
    this.$store.dispatch('products/resetProducts');
    this.loadProductByModel(this.$route.params.model);
  },
  watch: {
    '$route.params.model': function cb(model) {
      this.loadProductByModel(model);
    },
    product(product) {
      if (!product) return;

      this.$store.dispatch(
        'products/getProducts',
        {
          filterField: 'categories',
          filterValue: product.categories,
          limit: '10',
        },
      );
    },
    dataFetched(data) {
      setTimeout(() => {
        this.innerFetched = true;
      }, 700);
      setTimeout(() => {
        document.querySelector('.fade').classList.add('in');
      }, 710);
    }
  },
  methods: {
    loadProductByModel(model) {
      // this.$store.dispatch('products/resetProducts');
      this.$store.dispatch(
        'products/getProductByModel',
        { model },
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
