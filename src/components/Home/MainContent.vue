<template>
  <div class="container m-t-2">
    <div class="row">
      <!-- New Arrivals & Best Selling -->
      <div class="col-md-3 m-b-1">
        <div class="title"><span><a href="products.html">Новинки <i class="fa fa-chevron-circle-right"></i></a></span></div>
        <div class="widget-slider owl-carousel owl-theme owl-controls-top-offset m-b-2">

          <div v-for="product in lastAdded" :key="product._id">
            <div class="box-product-outer">
              <div class="box-product">
                <div class="img-wrapper">
                  <router-link :to="{ path: `/product/${product.model}`, params: { productId: 123 }}">
                    <img alt="Product" :src="product.images[0]">
                  </router-link>
                  <div class="tags tags-left" v-if="product.labels">
                    <span v-if="product.labels.includes('Новинка')" class="label-tags"><span class="label label-success arrowed-right">Новинка</span></span>
                    <span v-if="product.labels.includes('Распродажа')" class="label-tags"><span class="label label-danger arrowed-right">Распродажа</span></span>
                  </div>
                  <div class="tags">
                    <span v-if="product.labels.includes('Коллекция')" class="label-tags"><span class="label label-info arrowed">Коллекция</span></span>
                    <span v-if="product.labels.includes('Популярное')" class="label-tags"><span class="label label-primary arrowed">Популярное</span></span>
                    <span v-if="product.labels.includes('Товар недели')" class="label-tags"><span class="label label-default arrowed">Товар недели</span></span>
                  </div>
                  <div class="option">
                    <a data-toggle="tooltip" @click="addProductToCart(product)" :data-original-title="!product.inCart ? 'Добавить в Корзину' : 'Уже в Корзине'"><i class="fa fa-shopping-cart" v-bind:class="{ alreadyInCart: product.inCart }"></i></a>
                    <a data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                    <a data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
                  </div>
                </div>
                <h6><router-link :to="{ path: `/product/${product.model}`, params: { productId: 123 }}">{{product.name}}</router-link></h6>
                <div class="price">
                  <div>{{product.price.discount > 0 ? product.price.total : product.price.current}}грн. <span v-if="product.price.discount > 0" class="label-tags"><span class="label label-danger arrowed">-{{product.price.discount}}%</span></span></div>
                  <span v-if="product.price.discount > 0" class="price-old">{{product.price.current}}грн.</span>
                </div>
              </div>
            </div>
          </div>

          <!-- <div v-if="recommended.length < 2" /> -->

        </div>
        <!-- <div class="title"><span><a href="products.html">Best Selling <i class="fa fa-chevron-circle-right"></i></a></span></div> -->
        <!-- <div class="widget-slider owl-carousel owl-theme owl-controls-top-offset">
          <div class="box-product-outer" v-for="product in newArrivals(products)" :key="product._id">
            <div class="box-product">
              <div class="img-wrapper">
                <router-link :to="{ path: `/product/${product.model}`, params: { productId: 123 }}">
                   <img alt="Product" :src="product.images[0]">
                </router-link>
                <div class="tags tags-left">
                  <span v-if="product.labels.includes('Новинка')" class="label-tags"><span class="label label-success arrowed-right">Новинка</span></span>
                  <span v-if="product.labels.includes('Распродажа')" class="label-tags"><span class="label label-danger arrowed-right">Распродажа</span></span>
                </div>
                <div class="tags">
                  <span v-if="product.labels.includes('Коллекция')" class="label-tags"><span class="label label-info arrowed">Коллекция</span></span>
                  <span v-if="product.labels.includes('Популярное')" class="label-tags"><span class="label label-primary arrowed">Популярное</span></span>
                  <span v-if="product.labels.includes('Товар недели')" class="label-tags"><span class="label label-default arrowed">Товар недели</span></span>
                </div>
                <div class="option">
                  <a data-toggle="tooltip" @click="addProductToCart(product)" :data-original-title="!product.inCart ? 'Добавить в Корзину' : 'Уже в Корзине'"><i class="fa fa-shopping-cart" v-bind:class="{ alreadyInCart: product.inCart }"></i></a>
                  <a data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                  <a data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
                </div>
              </div>
              <h6><router-link :to="{ path: `/product/${product.model}`, params: { productId: 123 }}">{{product.name}}</router-link></h6>
              <div class="price">
                <div>{{product.price.discount > 0 ? product.price.total : product.price.current}}грн. <span v-if="product.price.discount > 0" class="label-tags"><span class="label label-danger arrowed">-{{product.price.discount}}%</span></span></div>
                <span v-if="product.price.discount > 0" class="price-old">{{product.price.current}}грн.</span>
              </div>
            </div>
          </div>

        </div> -->
      </div>
      <!-- End New Arrivals & Best Selling -->

      <div class="clearfix visible-sm visible-xs"></div>

      <div class="col-md-9">

        <!-- Featured -->
        <div class="title"><span>Рекомендуемые товары</span></div>

        <!-- visible-xs visible-lg -->
        <div class="col-xs-6 col-sm-4 col-lg-3 box-product-outer" :class="{ 'visible-xs': index === 3, 'visible-lg': index === 3 }" v-if="recommended" v-for="(product, index) in recommended" :key="product._id">
          <div class="box-product">
            <div class="img-wrapper">
              <router-link :to="{ path: `/product/${product.model}`, params: { productId: 123 }}">
                  <img alt="Product" :src="product.images[0]">
              </router-link>
              <div class="tags tags-left" v-if="product.labels">
                <span v-if="product.labels.includes('Новинка')" class="label-tags"><span class="label label-success arrowed-right">Новинка</span></span>
                <span v-if="product.labels.includes('Распродажа')" class="label-tags"><span class="label label-danger arrowed-right">Распродажа</span></span>
              </div>
              <div class="tags" v-if="product.labels">
                <span v-if="product.labels.includes('Коллекция')" class="label-tags"><span class="label label-info arrowed">Коллекция</span></span>
                <span v-if="product.labels.includes('Популярное')" class="label-tags"><span class="label label-primary arrowed">Популярное</span></span>
                <span v-if="product.labels.includes('Товар недели')" class="label-tags"><span class="label label-default arrowed">Товар недели</span></span>
              </div>
              <div class="option">                                                                                                                                        
                <a data-toggle="tooltip" @click="addProductToCart(product)" :data-original-title="!product.inCart ? 'Добавить в Корзину' : 'Уже в Корзине'"><i class="fa fa-shopping-cart" v-bind:class="{ alreadyInCart: product.inCart }"></i></a>
                <a data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                <a data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
              </div>
            </div>
            <h6><router-link :to="{ path: `/product/${product.model}`, params: { productId: 123 }}">{{product.name}}</router-link></h6>
              <div class="price">
                <div>{{product.price.discount > 0 ? product.price.total : product.price.current}}грн. 
                  <span class="label-tags">
                    <span class="label label-danger arrowed">
                      <span v-if="product.price.discount > 0">-{{product.price.discount}}%</span>
                    </span>
                  </span>
                </div>
                <span class="price-old">
                  <span v-show="product.price.discount > 0">{{product.price.current}}грн.</span>
                </span>
              </div>
           </div>
        </div>
        <!-- End Featured -->

        <div class="clearfix visible-sm visible-xs"></div>

        <!-- Collection -->
        <div class="title m-t-2"><span>Женская одежда</span></div>
        <div class="product-slider owl-carousel owl-theme owl-controls-top-offset">

          <div class="box-product-outer" v-for="product in woman" :key="product._id">
            <div class="box-product">
              <div class="img-wrapper">
                <router-link :to="{ path: `/product/${product.model}`, params: { productId: 123 }}">
                   <img alt="Product" :src="product.images[0]">
                </router-link>
                <div class="tags tags-left" v-if="product.labels">
                  <span v-if="product.labels.includes('Новинка')" class="label-tags"><span class="label label-success arrowed-right">Новинка</span></span>
                  <span v-if="product.labels.includes('Распродажа')" class="label-tags"><span class="label label-danger arrowed-right">Распродажа</span></span>
                </div>
                <div class="tags" v-if="product.labels">
                  <span v-if="product.labels.includes('Коллекция')" class="label-tags"><span class="label label-info arrowed">Коллекция</span></span>
                  <span v-if="product.labels.includes('Популярное')" class="label-tags"><span class="label label-primary arrowed">Популярное</span></span>
                  <span v-if="product.labels.includes('Товар недели')" class="label-tags"><span class="label label-default arrowed">Товар недели</span></span>
                </div>
                <div class="option">
                  <a data-toggle="tooltip" @click="addProductToCart(product)" :data-original-title="!product.inCart ? 'Добавить в Корзину' : 'Уже в Корзине'"><i class="fa fa-shopping-cart" v-bind:class="{ alreadyInCart: product.inCart }"></i></a>
                  <a data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                  <a data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
                </div>
              </div>
              <h6><router-link :to="{ path: `/product/${product.model}`, params: { productId: 123 }}">{{product.name}}</router-link></h6>
              <div class="price">
                <div>{{product.price.discount > 0 ? product.price.total : product.price.current}}грн. <span v-if="product.price.discount > 0" class="label-tags"><span class="label label-danger arrowed">-{{product.price.discount}}%</span></span></div>
                <span v-if="product.price.discount > 0" class="price-old">{{product.price.current}}грн.</span>
              </div>
              <!-- <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
                <a>(5 reviews)</a>
              </div> -->
            </div>
          </div>
        </div>

        <!-- <div class="title m-t-2"><span>Мужская одежда</span></div>
        <div class="product-slider owl-carousel owl-theme owl-controls-top-offset">

          <div class="box-product-outer" v-for="product in products" :key="product._id">
            <div class="box-product">
              <div class="img-wrapper">
                <router-link :to="{ path: `/product/${product.model}`, params: { productId: 123 }}">
                   <img alt="Product" :src="product.images[0]">
                </router-link>
                <div class="tags tags-left">
                  <span v-if="product.labels.includes('Новинка')" class="label-tags"><span class="label label-success arrowed-right">Новинка</span></span>
                  <span v-if="product.labels.includes('Распродажа')" class="label-tags"><span class="label label-danger arrowed-right">Распродажа</span></span>
                </div>
                <div class="tags">
                  <span v-if="product.labels.includes('Коллекция')" class="label-tags"><span class="label label-info arrowed">Коллекция</span></span>
                  <span v-if="product.labels.includes('Популярное')" class="label-tags"><span class="label label-primary arrowed">Популярное</span></span>
                  <span v-if="product.labels.includes('Товар недели')" class="label-tags"><span class="label label-default arrowed">Товар недели</span></span>
                </div>
                <div class="option">
                  <a data-toggle="tooltip" @click="addProductToCart(product)" :data-original-title="!product.inCart ? 'Добавить в Корзину' : 'Уже в Корзине'"><i class="fa fa-shopping-cart" v-bind:class="{ alreadyInCart: product.inCart }"></i></a>
                  <a data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                  <a data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
                </div>
              </div>
              <h6><router-link :to="{ path: `/product/${product.model}`, params: { productId: 123 }}">{{product.name}}</router-link></h6>
              <div class="price">
                <div>{{product.price.discount > 0 ? product.price.total : product.price.current}}грн. <span v-if="product.price.discount > 0" class="label-tags"><span class="label label-danger arrowed">-{{product.price.discount}}%</span></span></div>
                <span v-if="product.price.discount > 0" class="price-old">{{product.price.current}}грн.</span>
              </div>
            </div>
          </div>
        </div> -->

        <!-- <div class="title m-t-2"><span>Детская одежда</span></div>
        <div class="product-slider owl-carousel owl-theme owl-controls-top-offset">

          <div class="box-product-outer" v-for="product in products" :key="product._id">
            <div class="box-product">
              <div class="img-wrapper">
                <router-link :to="{ path: `/product/${product.model}`, params: { productId: 123 }}">
                   <img alt="Product" :src="product.images[0]">
                </router-link>
                <div class="tags tags-left">
                  <span v-if="product.labels.includes('Новинка')" class="label-tags"><span class="label label-success arrowed-right">Новинка</span></span>
                  <span v-if="product.labels.includes('Распродажа')" class="label-tags"><span class="label label-danger arrowed-right">Распродажа</span></span>
                </div>
                <div class="tags">
                  <span v-if="product.labels.includes('Коллекция')" class="label-tags"><span class="label label-info arrowed">Коллекция</span></span>
                  <span v-if="product.labels.includes('Популярное')" class="label-tags"><span class="label label-primary arrowed">Популярное</span></span>
                  <span v-if="product.labels.includes('Товар недели')" class="label-tags"><span class="label label-default arrowed">Товар недели</span></span>
                </div>
                <div class="option">
                  <a data-toggle="tooltip" @click="addProductToCart(product)" :data-original-title="!product.inCart ? 'Добавить в Корзину' : 'Уже в Корзине'"><i class="fa fa-shopping-cart" v-bind:class="{ alreadyInCart: product.inCart }"></i></a>
                  <a data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                  <a data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
                </div>
              </div>
              <h6><router-link :to="{ path: `/product/${product.model}`, params: { productId: 123 }}">{{product.name}}</router-link></h6>
              <div class="price">
                <div>{{product.price.discount > 0 ? product.price.total : product.price.current}}грн. <span v-if="product.price.discount > 0" class="label-tags"><span class="label label-danger arrowed">-{{product.price.discount}}%</span></span></div>
                <span v-if="product.price.discount > 0" class="price-old">{{product.price.current}}грн.</span>
              </div>
            </div>
          </div>
        </div> -->
        <!-- End Collection -->

      </div>

    </div>

    <!-- Brand & Clients -->
    <!-- <div class="row">
      <div class="col-xs-12 m-t-1">
        <div class="title text-center"><span>Brand & Clients</span></div>
        <div class="brand-slider owl-carousel owl-theme owl-controls-top-offset">
          <div class="brand">
            <a href=""><img src="../../assets/images/demo/brand1.png" alt=""></a>
          </div>
          <div class="brand">
            <a href=""><img src="../../assets/images/demo/brand2.png" alt=""></a>
          </div>
          <div class="brand">
            <a href=""><img src="../../assets/images/demo/brand3.png" alt=""></a>
          </div>
          <div class="brand">
            <a href=""><img src="../../assets/images/demo/brand4.png" alt=""></a>
          </div>
          <div class="brand">
            <a href=""><img src="../../assets/images/demo/brand5.png" alt=""></a>
          </div>
          <div class="brand">
            <a href=""><img src="../../assets/images/demo/brand1.png" alt=""></a>
          </div>
          <div class="brand">
            <a href=""><img src="../../assets/images/demo/brand2.png" alt=""></a>
          </div>
          <div class="brand">
            <a href=""><img src="../../assets/images/demo/brand3.png" alt=""></a>
          </div>
          <div class="brand">
            <a href=""><img src="../../assets/images/demo/brand4.png" alt=""></a>
          </div>
          <div class="brand">
            <a href=""><img src="../../assets/images/demo/brand5.png" alt=""></a>
          </div>
        </div>
      </div>
    </div> -->
    <!-- End Brand & Clients -->

  </div>
</template>

<script>
export default {
  path: 'MainContent',
  props: ['lastAdded', 'recommended', 'woman', 'dataFetched'],
  methods: {
    addProductToCart(product) {
      //eslint-disable-next-line
      console.log(product);
      //eslint-disable-next-line
      this.$store.dispatch('products/addProductToCart', { id: product._id });
    },
  },
  data() {
    return {
      initUI: false,
      widgetSlider: null,
      product_slider: null,
    };
  },
  updated() {
    const self = this;
    //eslint-disable-next-line
    console.log('UPDATED1_1');
    if (this.initUI) return null;

    //eslint-disable-next-line
    if (!this.dataFetched || this.lastAdded.length === 0 || this.woman.length === 0 || this.recommended === 0) return null;
    //eslint-disable-next-line
    console.log('UPDATED1_2');
    this.initUI = true;

    if ($('.widget-slider').exist()) {
      if (self.widgetSlider) return null;
      self.widgetSlider = $('.widget-slider');
      // widgetSlider.data('owl.carousel').destroy();
      self.widgetSlider.owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
          0: {
            items: 2,
          },
          768: {
            items: 3,
          },
          992: {
            items: 1,
          },
        },
      });
    }

    setTimeout(() => {
      if ($('.product-slider').exist()) {
        // if (self.product_slider) {
        //   self.product_slider .trigger("refresh.owl.carousel");
        // }
        self.product_slider = $('.product-slider');
        self.product_slider.owlCarousel({
          // items: 4,
          loop: true,
          autoWidth: false,
          dots: false,
          nav: true,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          responsive: {
            0: {
              items: 2,
            },
            768: {
              items: 3,
            },
            1200: {
              items: 4,
            },
          },
        });
      }
    }, 0);

    // owlCarousel for Brand Slider ============================================================
    // if ($('.brand-slider').exist()) {
    //   var brand_slider = $('.brand-slider');
    //   brand_slider.owlCarousel({
    //     dots:false,
    //     nav:true,
    //     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //     responsive: {
    //       0: {
    //         items:2,
    //         margin:10
    //       },
    //       480:{
    //         items:2,
    //         margin:15
    //       },
    //       768:{
    //         items:3,
    //         margin:15
    //       },
    //       992:{
    //         items:4,
    //         margin: 30
    //       },
    //       1200:{
    //         items:6,
    //         margin: 30
    //       }
    //     }
    //   });
    // }

    // Tooltip ==================================================================
    $('button[data-toggle="tooltip"]').tooltip({ container: 'body', animation: false });
    $('a[data-toggle="tooltip"]').tooltip({ container: 'body', animation: false });

          // // Back top Top =======================================
    $(window).scroll(function cb() {
      if ($(this).scrollTop() > 70) {
        $('.back-top').fadeIn();
      } else {
        $('.back-top').fadeOut();
      }
    });
    return null;
  },
  destroyed() {
    // console.log(' I AM DIE!!');
    // this.widgetSlider.owlCarousel('destroy');
    // this.widgetSlider.owlCarousel({touchDrag: false, mouseDrag: false});

    // this.product_slider.owlCarousel('destroy');
    // this.product_slider.owlCarousel({touchDrag: false, mouseDrag: false});
  },
  // mounted() {
  //   console.info('MOUNTED')
  // },
  // created() {
  //   console.log('created');
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
