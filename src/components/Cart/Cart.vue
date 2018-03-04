<template>
  <div>
    <TopHeader/>
    <MiddleHeader/>
    <NavigationBar/>

    <BreadCrumbs gender="Корзина" />

    <MainContent :cart="cart" :cartPrice="cartPrice" />
    <FooterComponent/>
    <BackToTop/>
    <!-- <ColorChooser/> -->
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import TopHeader from '@/components/Shared/TopHeader';
import MiddleHeader from '@/components/Shared/MiddleHeader';
import NavigationBar from '@/components/Shared/NavigationBar';

import BreadCrumbs from '@/components/Shared/BreadCrumbs';
import MainContent from '@/components/Cart/MainContent';

import FooterComponent from '@/components/Shared/FooterComponent';
import BackToTop from '@/components/Shared/BackToTop';
// import ColorChooser from '@/components/Shared/ColorChooser';

const { mapGetters } = createNamespacedHelpers('products/'); // mapActions

export default {
  name: 'Cart',
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
    };
  },
  computed: mapGetters({
    // products: 'products',
    // dataFetched: 'dataFetched',
    // error: 'error',
    cart: 'cart',
    cartPrice: 'cartPrice',
  }),
  created() {
    console.log('!@!@!');
    // this.$store.dispatch('products/getProducts');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
