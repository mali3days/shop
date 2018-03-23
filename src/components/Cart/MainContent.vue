<template>
  <div class="container m-t-3">
    <div class="row">

      <!-- Shopping Cart List -->
      <div class="col-md-12" v-if="cart.length === 0">
         <h2><span>Корзина Пуста</span></h2>
      </div>
      <div class="col-md-12" v-if="cart.length > 0">
        <div class="title"><span>Моя корзина</span></div>
        <div class="table-responsive of-visible">
          <table class="table table-bordered table-cart">
            <thead>
              <tr>
                <th>Товар</th>
                <th>Описание</th>
                <th>Размер</th>
                <th>Количество</th>
                <th>Цена за шт.</th>
                <th>Цена всего</th>
                <th>Действие</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in cart" :key="index">
                <td class="img-cart">
                  <a>
                    <img alt="Product" :src="product.images[0]" class="img-thumbnail">
                  </a>
                </td>
                <td>
                  <p><a class="d-block">{{ product.name }}</a></p>
                  <!-- <small>Size : {{ product.size[0] }}</small> -->
                </td>
                <td>
                  <select class="selectpicker" @change="changeActiveSize($event, product)" data-width="80px">
                    <option
                      v-for="s in product.size"
                      :selected="product.activeSize === s"
                      :key="s"
                      :value="s"
                    >
                      {{s}}
                    </option>
                  </select>
                </td>
                <td class="input-qty">
                  <input :id="product._id" type="text" :value="product.qty || 1" class="form-control text-center" />
                </td>
                <td class="unit">${{ product.price.total }}</td>
                <td class="sub">${{ product.price.total * (product.qty || 1) }}</td>
                <td class="action">
                  <a
                    class="text-danger"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-original-title="Remove"
                    @click="removeProductFromCart(product)">
                      <i class="fa fa-trash-o"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td colspan="4" class="text-right">Total</td>
                <td colspan="2"><b>${{ cartPrice }}</b></td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav aria-label="Shopping Cart Next Navigation">
          <ul class="pager">
            <li class="previous">
              <router-link :to="{ path: '/'}">
                <span aria-hidden="true">&larr;</span>Продолжить покупки
              </router-link>
            </li>
            <li class="next"><router-link :to="{ path: '/checkout'}">Оформление заказа<span aria-hidden="true">&rarr;</span></router-link></li>
          </ul>
        </nav>
      </div>
      <nav aria-label="Shopping Cart Next Navigation" v-if="cart.length === 0">
        <ul class="pager">
          <li class="previous">
            <router-link :to="{ path: '/'}">
              <span aria-hidden="true">&larr;</span>Продолжить покупки
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- End Shopping Cart List -->

      <!-- New Arrivals -->
      <!-- <div class="col-md-3 hidden-sm hidden-xs">
        <div class="title"><span><a href="products.html">Новинки <i class="fa fa-chevron-circle-right"></i></a></span></div>
        <div class="widget-slider owl-carousel owl-theme owl-controls-top-offset">
          <div class="box-product-outer">
            <div class="box-product">
              <div class="img-wrapper">
                <a href="detail.html">
                  <img alt="Product" src="../../assets/images/demo/p1-1.jpg">
                </a>
                <div class="tags tags-left">
                  <span class="label-tags"><a href="products.html"><span class="label label-success arrowed-right">New Arrivals</span></a></span>
                </div>
                <div class="option">
                  <a href="#" data-toggle="tooltip" title="Добавить в Корзину"><i class="fa fa-shopping-cart"></i></a>
                  <a href="#" data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                  <a href="#" data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
                </div>
              </div>
              <h6><a href="detail.html">WranglerGrey Printed Slim Fit Round Neck T-Shirt</a></h6>
              <div class="price">
                <div>$15.00</div>
              </div>
            </div>
          </div>
          <div class="box-product-outer">
            <div class="box-product">
              <div class="img-wrapper">
                <a href="detail.html">
                  <img alt="Product" src="../../assets/images/demo/p2-1.jpg">
                </a>
                <div class="tags tags-left">
                  <span class="label-tags"><a href="products.html"><span class="label label-success arrowed-right">New Arrivals</span></a></span>
                </div>
                <div class="option">
                  <a href="#" data-toggle="tooltip" title="Добавить в Корзину"><i class="fa fa-shopping-cart"></i></a>
                  <a href="#" data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                  <a href="#" data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
                </div>
              </div>
              <h6><a href="detail.html">CelioKhaki Printed Round Neck T-Shirt</a></h6>
              <div class="price">
                <div>$15.00</div>
              </div>
            </div>
          </div>
          <div class="box-product-outer">
            <div class="box-product">
              <div class="img-wrapper">
                <a href="detail.html">
                  <img alt="Product" src="../../assets/images/demo/p3-1.jpg">
                </a>
                <div class="tags tags-left">
                  <span class="label-tags"><a href="products.html"><span class="label label-success arrowed-right">New Arrivals</span></a></span>
                </div>
                <div class="option">
                  <a href="#" data-toggle="tooltip" title="Добавить в Корзину"><i class="fa fa-shopping-cart"></i></a>
                  <a href="#" data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                  <a href="#" data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
                </div>
              </div>
              <h6><a href="detail.html">CelioOff White Printed Round Neck T-Shirt</a></h6>
              <div class="price">
                <div>$15.00</div>
              </div>
            </div>
          </div>
          <div class="box-product-outer">
            <div class="box-product">
              <div class="img-wrapper">
                <a href="detail.html">
                  <img alt="Product" src="../../assets/images/demo/p4-1.jpg">
                </a>
                <div class="tags tags-left">
                  <span class="label-tags"><a href="products.html"><span class="label label-success arrowed-right">New Arrivals</span></a></span>
                </div>
                <div class="option">
                  <a href="#" data-toggle="tooltip" title="Добавить в Корзину"><i class="fa fa-shopping-cart"></i></a>
                  <a href="#" data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                  <a href="#" data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
                </div>
              </div>
              <h6><a href="detail.html">Levi'sNavy Blue Printed Round Neck T-Shirt</a></h6>
              <div class="price">
                <div>$15.00</div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- End New Arrivals -->

    </div>
  </div>
</template>

<script>
import imageLarge1 from '../../assets/images/demo/p1-large-1.jpg';
import imageLarge2 from '../../assets/images/demo/p1-large-2.jpg';
import imageLarge3 from '../../assets/images/demo/p1-large-3.jpg';
import imageLarge4 from '../../assets/images/demo/p1-large-4.jpg';

export default {
  name: 'MainContent',
  props: ['cart', 'cartPrice'],
  data() {
    return {
      imageLarge1,
      imageLarge2,
      imageLarge3,
      imageLarge4,
    };
  },
  methods: {
    removeProductFromCart(product) {
      $('.tooltip').tooltip('destroy');
      // eslint-disable-next-line
      this.$store.dispatch('products/removeProductFromCart', { id: product._id });
    },
    changeActiveSize(e, product) {
      this.$store.dispatch('products/changeProductSize', { id: product._id, size: e.target.value });
    },
  },
  created() {
    const that = this;

    setTimeout(() => {
      if ($('.widget-slider').exist()) {
        const widgetSlider = $('.widget-slider');
        // widgetSlider.data('owl.carousel').destroy();
        widgetSlider.owlCarousel({
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

      // Touchspin ===============================================================================
      if ($('.input-qty').exist()) {
        $('.input-qty input').TouchSpin({
          verticalbuttons: true,
          prefix: 'кол.',
          min: 1,
        })
        .on('touchspin.on.stopspin', function cb(event) {
          const id = event.target.getAttribute('id');
          const qty = $(this).val();
          that.$store.dispatch('products/changeProductQty', { id, qty });
        });
      }

      // Tooltip =======================================
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
    });
  },
  mounted() {
    $('select').selectpicker();
  },
};
</script>

<style scoped>
</style>
