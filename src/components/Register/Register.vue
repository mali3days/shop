<template>
  <div>
    <TopHeader/>
    <MiddleHeader/>
    <NavigationBar/>

    <BreadCrumbs />

    <MainContent :products="products" :dataFetched="dataFetched" />
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
import MainContent from '@/components/Register/MainContent';

import Footer from '@/components/Shared/Footer';
import BackToTop from '@/components/Shared/BackToTop';
// import ColorChooser from '@/components/Shared/ColorChooser';

export default {
  name: 'Register',
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
    this.$store.dispatch('products/getProducts');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
