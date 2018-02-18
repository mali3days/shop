<template>
  <div>
    <TopHeader/>
    <MiddleHeader/>
    <NavigationBar/>

    <BreadCrumbs gender="Корзина" />

    <MainContent :cart="cart" :cartPrice="cartPrice" />
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
import MainContent from '@/components/Cart/MainContent';

import Footer from '@/components/Shared/Footer';
import BackToTop from '@/components/Shared/BackToTop';
// import ColorChooser from '@/components/Shared/ColorChooser';

export default {
  name: 'Cart',
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
    // products: 'products',
    // dataFetched: 'dataFetched',
    // error: 'error',
    cart: 'cart',
    cartPrice: 'cartPrice'
  }),
  created() {
    // this.$store.dispatch('products/getProducts');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
