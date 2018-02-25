<template>
    <div class="container-fluid">
      <div class="row">
        <div class="owl-carousel owl-theme home-slider">
          <a><div class="item owl-cover" data-xs-height="220px" data-sm-height="350px" data-md-height="400px" data-lg-height="430px" :data-src="slide1"></div></a>
          <a><div class="item owl-cover" data-xs-height="220px" data-sm-height="350px" data-md-height="400px" data-lg-height="430px" :data-src="slide2"></div></a>
          <a><div class="item owl-cover" data-xs-height="220px" data-sm-height="350px" data-md-height="400px" data-lg-height="430px" :data-src="slide3"></div></a>
        </div>
      </div>
    </div>
</template>

<script>
import slide1 from '../../assets/images/demo/bubble1.jpg';
import slide2 from '../../assets/images/demo/bubble2.jpg';
import slide3 from '../../assets/images/demo/bubble3.jpg';

export default {
  name: 'FullSlider',
  data() {
    return {
      slide1,
      slide2,
      slide3,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
