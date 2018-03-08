<template>
    <div class="container-fluid">
      <div class="row">
        <div class="owl-carousel owl-theme home-slider">
          <div style="height: 300px;" class="item owl-cover owl-lazy" :data-src="require('../../assets/images/demo/bubble1.jpg')"></div>
          <div style="height: 300px;" class="item owl-cover owl-lazy" :data-src="require('../../assets/images/demo/bubble2.jpg')"></div>
          <div style="height: 300px;" class="item owl-cover owl-lazy" :data-src="require('../../assets/images/demo/bubble3.jpg')"></div>
          <!-- data-xs-height="220px" data-sm-height="350px" data-md-height="400px" data-lg-height="430px"  -->
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'FullSlider',
  data() {
    return {
    };
  },
  mounted() {
    // // owlCarousel for Home Slider =============================================================
    if ($('.home-slider').exist()) {
      $('.home-slider').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        lazyLoad:true,
        autoplayHoverPause:true,
        dots:false,
        nav:true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-slider .item img{
      display: block;
      width: 100%;
      height: auto;
  }
</style>
