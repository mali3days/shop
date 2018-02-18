<template>
  <div>
    <TopHeader/>
    <MiddleHeader/>
    <NavigationBar/>

    <BreadCrumbs gender="Женская одежда"/>

    <MainContent
      :products="products"
      :pagination="pagination"
      :dataFetched="dataFetched"
      :meta="meta"
    />
    <Footer/>
    <BackToTop/>
    <!-- <ColorChooser/> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import TopHeader from '@/components/Shared/TopHeader';
import MiddleHeader from '@/components/Shared/MiddleHeader';
import NavigationBar from '@/components/Shared/NavigationBar';

import BreadCrumbs from '@/components/Shared/BreadCrumbs';
import MainContent from '@/components/Products/MainContent';

import Footer from '@/components/Shared/Footer';
import BackToTop from '@/components/Shared/BackToTop';
// import ColorChooser from '@/components/Shared/ColorChooser';

export default {
  name: 'Products',
  props: {
    products: {
      type: Array,
      required: true,
      default: () => [],
    },
    dataFetched: {
      type: Boolean,
      required: true,
      default: true,
    },
    pagination: {
      type: Object,
      required: false
    },
    meta: {
      type: Object,
      required: false
    }
  },
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
  created() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
