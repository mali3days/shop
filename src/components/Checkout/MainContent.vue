<template>
  <div class="container m-t-3">
    <Modal :show="showModal" v-on:closeModal="closeModal" />
    <div class="row">
      <!-- Checkout Form -->
      <div class="col-md-12">  <!-- col-md-9 -->
        <div class="title"><span>Оформление заказа</span></div>
        <!-- <button @click="TODO_DELETE_TEST_FILL_FIELDS">TEST_FILL_FIELDS</button> -->
        <form  id="checkout" novalidate="true">


          <p v-if="errors.length" class="error-wrapper">
            <b v-if="errors.length === 1">Пожалуйста, исправьте следующую ошибку:</b>
            <b v-else>Пожалуйста, исправьте следующие ошибки:</b>
            <ul>
              <li v-for="error of errors" :key="error">{{ error }}</li>
            </ul>
          </p>

          <div class="row">
            <div class="form-group col-sm-6">
              <label for="firstNameInput">Имя (*)</label>
              <input type="text" v-model="order_form.firstName" class="form-control" id="firstNameInput" placeholder="Имя">
            </div>
            <div class="form-group col-sm-6">
              <label for="lastNameInput">Фамилия</label>
              <input type="text" v-model="order_form.lastName" class="form-control" id="lastNameInput" placeholder="Фамилия">
            </div>
            <div class="form-group col-sm-6">
              <label for="emailInput">Email (*)</label>
              <input type="email" v-model="order_form.email" class="form-control" id="emailInput" placeholder="Email">
            </div>
            <div class="form-group col-sm-6">
              <label for="phoneInput">Номер Телефона (*)</label>
              <input type="text" v-model="order_form.phone" class="form-control" id="phoneInput" placeholder="Номер Телефона">
            </div>
            <div class="form-group col-sm-12">
              <label for="addressInput">Адресс (*)</label>
              <textarea class="form-control" v-model="order_form.address" rows="3" id="addressInput"></textarea>
            </div>
            <div class="form-group col-sm-6">
              <label for="cityInput">Город (*)</label>
              <input type="text" v-model="order_form.city" class="form-control" id="cityInput" placeholder="Город">
            </div>
            <div class="form-group col-sm-6">
              <label for="postInput">Почтовый индекс (*) + номер отделения "Новая Почта" (*)</label>
              <input type="text" v-model="order_form.post" class="form-control" id="postInput" placeholder="Почтовый индекс">
            </div>
            <div class="form-group col-sm-6">
              <label for="countryInput">Страна (*)</label>
              <select class="form-control selectpicker" id="countryInput" data-live-search="true" data-dropup-auto="false">
                <!-- <option value=""> --- Сделайте выбор --- </option> -->
                <option :value="order_form.country" :selected="order_form.country">{{ order_form.country }}</option>
                </select>
            </div>
            <div class="form-group col-sm-6">
              <label for="regionInput">Область (*)</label>
              <select v-model="order_form.region" class="form-control selectpicker" id="regionInput" data-live-search="true" data-dropup-auto="false">
                <option value=""> --- Сделайте выбор --- </option>
                <option v-for="region of UA_REGIONS" :key="region.id" :value="region.name" :selected="region.id == order_form.region">
                  {{ region.name }}
                </option>
              </select>
            </div>
            <!-- <div class="form-group col-sm-6">
              <label for="voucherInput">Код ваучера</label>
              <div class="input-group">
                <input type="text" v-model="order_form.voucherCode" class="form-control" id="voucherInput" placeholder="Код ваучера">
                <span class="input-group-btn">
                  <button class="btn btn-theme" type="button">Применить</button>
                </span>
              </div>
            </div> -->
            <div class="form-group col-sm-12">
              <label for="notesInput">Примечания к заказу</label>
              <textarea v-model="order_form.notes" class="form-control" rows="3" id="notesInput"></textarea>
            </div>
          </div>

          <div class="table-responsive">
          <table class="table table-bordered table-cart">
            <thead>
              <tr>
                <th>Товар</th>
                <th>Описание</th>
                <th>Количество</th>
                <th>Цена за шт.</th>
                <th>Цена всего</th>
                <!-- <th>Действие</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) of cart" :key="index">
                <td class="img-cart">
                  <a>
                    <img alt="Product" :src="product.images[0]" class="img-thumbnail">
                  </a>
                </td>
                <td>
                  <p><a class="d-block">{{ product.name }}</a></p>
                  <small>Size : {{ product.activeSize || product.size[0] }}</small>
                </td>
                <td class="input-qty text-center">
                  <span>{{ product.qty || 1 }}</span>
                <td class="unit">${{ product.price.total }}</td>
                <td class="sub">${{ product.price.total * (product.qty || 1) }}</td>
                <!-- <td class="action">
                  <a
                    class="text-danger"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-original-title="Remove"
                    @click="removeProductFromCart(product)">
                      <i class="fa fa-trash-o"></i>
                  </a>
                </td> -->
              </tr>
              <tr>
                <td colspan="4" class="text-right">Total</td>
                <td colspan="2"><b>${{ cartPrice }}</b></td>
              </tr>
            </tbody>
          </table>
          </div>
          <nav aria-label="Checkout Next Navigation">
            <ul class="pager">
               <li class="previous">
                  <router-link :to="{ path: '/cart'}">
                    <span aria-hidden="true">&larr;</span> Вернуться в Корзину
                  </router-link>
               </li>
              <li @click="sendOrderAndShowModal()" class="next"><a>Оформить заказ <span aria-hidden="true">&rarr;</span></a></li>
            </ul>
          </nav>
        </form>
        <!-- <button @click="showModal = true">Show Modal</button> -->
      </div>
      <!-- End Checkout Form -->

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
// import { createNamespacedHelpers } from 'vuex';
import 'bootstrap-select/js/bootstrap-select';
import Modal from '../Modal/Modal';

import imageLarge1 from '../../assets/images/demo/p1-large-1.jpg';
import imageLarge2 from '../../assets/images/demo/p1-large-2.jpg';
import imageLarge3 from '../../assets/images/demo/p1-large-3.jpg';
import imageLarge4 from '../../assets/images/demo/p1-large-4.jpg';

// const { mapGetters } = createNamespacedHelpers('orders/'); // mapActions

const UA_REGIONS = [
  { id: 'UA-05', name: 'Винницкая' },
  { id: 'UA-07', name: 'Волынская' },
  { id: 'UA-12', name: 'Днепропетровская' },
  { id: 'UA-14', name: 'Донецкая' },
  { id: 'UA-18', name: 'Житомирская' },
  { id: 'UA-21', name: 'Закарпатская' },
  { id: 'UA-23', name: 'Запорожская' },
  { id: 'UA-26', name: 'Ивано-Франковская' },
  { id: 'UA-32', name: 'Киевская' },
  { id: 'UA-35', name: 'Кировоградская' },
  { id: 'UA-09', name: 'Луганская' },
  { id: 'UA-46', name: 'Львовская' },
  { id: 'UA-48', name: 'Николаевская' },
  { id: 'UA-51', name: 'Одесская' },
  { id: 'UA-53', name: 'Полтавская' },
  { id: 'UA-56', name: 'Ровненская' },
  { id: 'UA-59', name: 'Сумская' },
  { id: 'UA-61', name: 'Тернопольская' },
  { id: 'UA-63', name: 'Харьковская' },
  { id: 'UA-65', name: 'Херсонская' },
  { id: 'UA-68', name: 'Хмельницкая' },
  { id: 'UA-71', name: 'Черкасская' },
  { id: 'UA-74', name: 'Черниговская' },
  { id: 'UA-77', name: 'Черновицкая' },
];

export default {
  name: 'MainContent',
  props: ['cart', 'cartPrice'],
  components: {
    Modal,
  },
  data() {
    return {
      imageLarge1,
      imageLarge2,
      imageLarge3,
      imageLarge4,

      UA_REGIONS,

      order_form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        post: '',
        country: 'Украина',
        region: '',
        voucherCode: '',
        notes: '',
      },
      errors: [],

      showModal: false,
    };
  },
  methods: {
    TODO_DELETE_TEST_FILL_FIELDS() {
      this.order_form = {
        firstName: 'ТестовоеИмя',
        lastName: 'ТестоваяФамилия',
        email: 'testemail@gmail.com',
        phone: '0501234567',
        address: 'Улица Тестовая дом 69',
        city: 'Тестовый Город',
        post: '94518',
        country: { id: 'UA', name: 'Украина' },
        region: UA_REGIONS[9],
        voucherCode: '1234-4321-5678-0987',
        notes: 'Хочу побыстрее получить свой тестовый заказ! Я заказал очень много интересных тестовых вещей, так что мне будет что одеть на следующую вечеринку в Тбилиси',
      };
    },
    closeModal() {
      this.showModal = false;
      // this.sendOrder();
    },
    sendOrder() {
      // console.log(this.order_form);
      //eslint-disable-next-line
      console.log(this.cart);

      const valid = this.validateForm();
      if (!valid) {
        window.scrollTo(0, 200);
        return;
      }

      const products = this.cart.map(el => ({
        name: el.name,
        price: el.price,
        model: el.model,
        qty: el.qty,
        size: el.activeSize,
        textile: el.textile,
        images: el.images[0] || null,
      }));

      const order = Object.assign({}, this.order_form, { products });

      //eslint-disable-next-line
      console.log(order);

      this.showModal = true;
      this.$store.dispatch('orders/sendOrder', { order });
      // this.clearCartAndNavigateToHome();
    },
    validateForm() {
      const {
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        post,
        country,
        region,
        // voucherCode,
        // notes,
      } = this.order_form;
      this.errors = [];

      if (!firstName) this.errors.push('Имя обязательное поле');
      if (!lastName) this.errors.push('Фамилия обязательное поле');
      if (!email) {
        this.errors.push('Email  обязательное поле');
      } else if (!this.validEmail(email)) {
        this.errors.push('Email не в правильном формате');
      }
      if (!phone) this.errors.push('Номер телефона обязательное поле');
      if (!address) this.errors.push('Адресс обязательное поле');
      if (!city) this.errors.push('Город обязательное поле');
      if (!post) this.errors.push('Почтовый индекс обязательное поле');
      if (!country) this.errors.push('Страна обязательное поле');
      if (!region) this.errors.push('Область обязательное поле');
      return this.errors.length === 0;
    },
    validEmail(email) {
      //eslint-disable-next-line
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    clearCartAndNavigateToHome() {
      // this.$store.dispatch('products/clearCart');
      // this.$router.push('/');
    },
    sendOrderAndShowModal() {
      this.sendOrder();
    },
  },
  mounted() {
    $('select').selectpicker();
  },
  created() {
    //eslint-disable-next-line
    console.log('Created checkout');
    //eslint-disable-next-line
    console.log(this.cart);
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

            // Tooltip ==================================================
      $('button[data-toggle="tooltip"]').tooltip({ container: 'body', animation: false });
      $('a[data-toggle="tooltip"]').tooltip({ container: 'body', animation: false });

            // // Back top Top =======================
      $(window).scroll(function cb() {
        if ($(this).scrollTop() > 70) {
          $('.back-top').fadeIn();
        } else {
          $('.back-top').fadeOut();
        }
      });
    });
  },
};
</script>

<style>
  .error-wrapper {
    border: 1px solid red;
    padding: 20px;
    margin: 20px;
  }
</style>
