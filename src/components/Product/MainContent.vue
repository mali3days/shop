<template>
  <div class="wrapper-product">
    <div v-if="!innerFetched" class="loader-wrapper">
      <div v-if="!innerFetched" class="cp-spinner cp-balls"></div>
    </div>

    <div v-show="innerFetched" class="fade fade-custom">
      <div class="container m-t-3">
        <div class="row product-row" v-if="product">

          <!-- Image List -->
          <div class="col-sm-4">
            <div class="image-detail">
              <img :src="product.images[0]" :data-zoom-image="product.images[0]" alt="">
            </div>
            <div class="products-slider-detail owl-carousel owl-theme m-b-2">
              <a href="#" v-for="(image, index) in product.images" :key="index">
                <img
                  :src="image"
                  :data-zoom-image="image" 
                  alt="1" 
                  class="img-thumbnail"
                >
              </a>
            </div>
          </div>
          <!-- End Image List -->

          <div class="col-sm-8">
            <div class="title-detail">{{product.name}}</div>
            <table class="table table-detail">
              <tbody>
                <tr>
                  <td>Модель</td>
                  <td>
                    <div style="margin: 7px 0;">
                      <span v-if="product.model">{{product.model}}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Цена</td>
                  <td>
                    <div class="price">
                      <div>{{product.price.discount > 0 ? product.price.total : product.price.current}}грн. <span v-if="product.price.discount > 0" class="label-tags"><span class="label label-danger arrowed">-{{product.price.discount}}%</span></span></div>
                      <span v-if="product.price.discount > 0" class="price-old">{{product.price.current}}грн.</span>
                    </div>
                  </td>
                </tr>
                <!-- <tr>
                  <td>Количество</td>
                  <td>
                    <div class="input-qty">
                      <input type="text" value="1" class="form-control text-center"/>
                    </div>
                  </td>
                </tr> -->
                <tr>
                  <td>Размеры</td>
                  <td>
                    <!-- <select class="selectpicker" data-width="80px">
                      <option v-for="s in product.size" :key="s" :value="s">{{s}}</option>
                    </select> -->
                    <span v-for="(s, index) in product.size.slice().reverse()" :key="s">
                      {{s}} <span v-if="index < product.size.length - 1">|</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Материал</td>
                  <td>
                    <!-- <select class="selectpicker" data-width="80px">
                      <option v-for="t in product.textile" :key="t" :value="t">{{t}}</option>
                    </select> -->
                    <span v-for="(t, index) in product.textile" :key="t">
                      {{t}} <span v-if="index < product.textile.length - 1">,</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <!-- <a data-toggle="tooltip" @click="addProductToCart(product)" :data-original-title="!product.inCart ? 'Добавить в Корзину' : 'Уже в Корзине'">
                      <i class="fa fa-shopping-cart" v-bind:class="{ alreadyInCart: product.inCart }"></i>
                    </a> -->
                    <button class="btn btn-theme m-b-1" @click="addProductToCart(product)" type="button"><i class="fa fa-shopping-cart"></i> Добавить в Корзину</button>
                    <!-- <button class="btn btn-theme m-b-1" type="button"><i class="fa fa-heart"></i> Добавить в Список Желаний</button> -->
                    <!-- <button class="btn btn-theme m-b-1" type="button"><i class="fa fa-align-left"></i> Добавить к Сравнению</button> -->
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="product-description">{{product.description}}</div>

        <!-- Related Products -->
        <div class="row m-t-3">
          <div class="col-xs-12">
            <div class="title"><span>Похожие товары</span></div>
            <div class="related-product-slider owl-carousel owl-theme owl-controls-top-offset">
              <div class="box-product-outer" v-for="relate in similarProducts" :key="relate._id">
                <div class="box-product">
                  <div class="img-wrapper" @click="resetProducts()">
                    <router-link :to="{ path: `${relate.model}`, params: { productModel: relate.model }}">
                      <img alt="Product" :src="relate.images[0]">
                    </router-link>
                      <div class="tags tags-left" v-if="relate.labels">
                        <span v-if="relate.labels.includes('Новинка')" class="label-tags"><span class="label label-success arrowed-right">Новинка</span></span>
                        <span v-if="relate.labels.includes('Распродажа')" class="label-tags"><span class="label label-danger arrowed-right">Распродажа</span></span>
                      </div>
                      <div class="tags" v-if="relate.labels">
                        <span v-if="relate.labels.includes('Коллекция')" class="label-tags"><span class="label label-info arrowed">Коллекция</span></span>
                        <span v-if="relate.labels.includes('Популярное')" class="label-tags"><span class="label label-primary arrowed">Популярное</span></span>
                        <span v-if="relate.labels.includes('Товар недели')" class="label-tags"><span class="label label-default arrowed">Товар недели</span></span>
                      </div>
                    <div class="option">
                      <a data-toggle="tooltip" @click="addProductToCart(product)" :data-original-title="!product.inCart ? 'Добавить в Корзину' : 'Уже в Корзине'">
                        <i class="fa fa-shopping-cart" v-bind:class="{ alreadyInCart: product.inCart }"></i>
                      </a>
                      <!-- <a href="#" data-toggle="tooltip" title="Добавить в Корзину"><i class="fa fa-shopping-cart"></i></a> -->
                      <!-- <a href="#" data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a> -->
                      <!-- <a href="#" data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a> -->
                    </div>
                  </div>
                  <h6><router-link :to="{ path: `/${relate.model}`, params: { productId: 123 }}">{{relate.name}}</router-link></h6>
                  <div class="price" v-if="relate.price">
                    <div>{{relate.price.discount > 0 ? product.price.total : relate.price.current}}грн. <span v-if="relate.price.discount > 0" class="label-tags"><span class="label label-danger arrowed">-{{relate.price.discount}}%</span></span></div>
                    <span v-if="relate.price.discount > 0" class="price-old">{{relate.price.current}}грн.</span>
                  </div>
                  <!-- <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i>
                    <a href="#">(5 reviews)</a>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Related Products -->

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainContent',
  props: [
    'product',
    'related',
    'dataFetched',
    'similarProducts',
  ],
  methods: {
    resetProducts() {
      this.$store.dispatch('products/resetProducts');
    },
    addProductToCart(product) {
      //eslint-disable-next-line
      console.log(product);
      //eslint-disable-next-line
      this.$store.dispatch('products/addProductToCart', { id: product._id });
    },
  },
  data() {
    return {
      innerFetched: false,
    };
  },
  created() {
    setTimeout(() => {
      this.innerFetched = true;
    }, 700);
    setTimeout(() => {
      document.querySelector('.fade-custom').classList.add('in');
    }, 710);
    setTimeout(() => {
      // Touchspin ==================================================
      if ($('.input-qty').exist()) {
        $('.input-qty input').TouchSpin({
          verticalbuttons: true,
          postfix: 'шт',
          min: 1,
        });
      }
      document.querySelector('.fade-custom').classList.add('in');
    });

      // // Back top Top ================================
    $(window).scroll(function cb() {
      if ($(this).scrollTop() > 70) {
        $('.back-top').fadeIn();
      } else {
        $('.back-top').fadeOut();
      }
    });
  },
  updated() {
       /* 1 */
      // owlcarosel (if items less than 4, hide nav, disable drag, hide touch)
      var products_slider_detail = $('.products-slider-detail');
      var item_count = $('.products-slider-detail a').length;
      products_slider_detail.owlCarousel({
        margin:5,
        dots:false,
        nav:item_count < 5 ? false : true,
        mouseDrag:item_count < 5 ? false : true,
        touchDrag:item_count < 5 ? false : true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: { items:4, }
        }
      });
      $('.products-slider-detail a').click(function(){
        var src = $(this).find('img').attr('src');
        var zoom = $(this).find('img').attr('data-zoom-image');
        var detail = $(this).parent().parent().parent().parent().parent().find('.image-detail img');
        detail.attr('src',src);
        detail.attr('data-zoom-image',zoom);
        $('.zoomWindow').css('background-image', 'url("' + zoom + '")');
        return false;
      });

      if (ResponsiveBootstrapToolkit.is('>xs')) {
        $('.image-detail img').ezPlus({
          responsive : true,
          respond: [
            {
              range: '1200-10000',
              zoomWindowHeight: 490,
              zoomWindowWidth: 782
            },
            {
              range: '992-1200',
              zoomWindowHeight: 400,
              zoomWindowWidth: 649
            },
            {
              range: '768-992',
              zoomWindowHeight: 300,
              zoomWindowWidth: 502
            },
            {
              range: '100-768',
              zoomWindowHeight: 0,
              zoomWindowWidth: 0
            }
          ]
        });
      }


    /* 2 */
    if ($('.related-product-slider').exist()) {
      const relatedProductSlider = $('.related-product-slider');
      relatedProductSlider.owlCarousel({
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
            items: 5,
          },
          1200: {
            items: 6,
          },
        },
      });
    }
  }
};
</script>

<style lang="scss">
  .product-description{
    text-align: justify;
    &::first-letter {
      font-family: "Times New Roman", Times, serif;
      font-size: 3rem;
      line-height: 3rem;
      margin-left: 3rem;
      color: #4e9789;
    }
  }
</style>
