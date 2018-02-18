<template>
  <div>
    <TopHeader/>
    <MiddleHeader/>
    <NavigationBar/>
    <FullSlider/>
    <MainContent
      :dataFetched="dataFetched"
      :lastAdded="lastAdded"
      :recommended="recommended"
      :woman="woman"
    />
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
import FullSlider from '@/components/Home/FullSlider';
import MainContent from '@/components/Home/MainContent';
import Footer from '@/components/Shared/Footer';
import BackToTop from '@/components/Shared/BackToTop';
// import ColorChooser from '@/components/Shared/ColorChooser';

export default {
  name: 'Home',
  components: {
    TopHeader,
    MiddleHeader,
    NavigationBar,
    FullSlider,
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
    lastAdded: 'lastAdded',
    recommended: 'recommended',
    woman: 'woman',
    dataFetched: 'dataFetched',
    error: 'error',
  }),
  created() {
    this.$store.dispatch('products/getLastaddedProducts');
    this.$store.dispatch('products/getRecommendedProducts');
    this.$store.dispatch({
      type: 'products/getWomanProducts',
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
