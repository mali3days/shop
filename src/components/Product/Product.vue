<template>
  <div>
    <TopHeader/>
    <MiddleHeader/>
    <NavigationBar/>

    <BreadCrumbs
      :gender="products[0].gender"
      :model="products[0].model"
      :type="products[0].type"
    />

    <MainContent :product="products[0]" :related="products" :dataFetched="dataFetched" />
    <Footer/>
    <BackToTop/>
    <!-- <ColorChooser/> -->
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapGetters, mapActions } = createNamespacedHelpers('products/');

import TopHeader from '@/components/Shared/TopHeader';
import MiddleHeader from '@/components/Shared/MiddleHeader';
import NavigationBar from '@/components/Shared/NavigationBar';

import BreadCrumbs from '@/components/Shared/BreadCrumbs';
import MainContent from '@/components/Product/MainContent';

import Footer from '@/components/Shared/Footer';
import BackToTop from '@/components/Shared/BackToTop';
// import ColorChooser from '@/components/Shared/ColorChooser';

export default {
  name: 'Product',
  components: {
    TopHeader,
    MiddleHeader,
    NavigationBar,
    BreadCrumbs,
    // FullSlider,
    MainContent,
    Footer,
    BackToTop,
    // ColorChooser,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: mapGetters({
    products: 'products',
    dataFetched: 'dataFetched',
    error: 'error',
  }),
  created() {
    console.log('GET PRODUCT BY ID');
    this.$store.dispatch('products/getProducts');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
