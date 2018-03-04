<template>
    <!-- Main Content -->
  <div class="container m-t-3">
    <div class="row">

      <!-- Filter Sidebar -->
      <div class="col-sm-3 hidden-xs">
        <div class="filter-sidebar">
          <div class="title"><span>Активные фильтры</span></div>
          <ul>
              <li v-if="filterBar.category.checked.length === 0 && filterBar.size.checked.length === 0">
                <span>Нет активных фильтров</span> 
              </li>
              <li v-for="(category, index) of filterBar.category.checked" :key="index">
                Категория: {{ category }}
                <a @click="removeFilterOption('category', category)" role="button" class="remove-filter" title="Удалить"><i class="fa fa-remove"></i></a>
              </li>
              <li v-for="(size, index) of filterBar.size.checked" :key="index">
                Размер: {{ size }} 
                <a @click="removeFilterOption('size', size)" role="button" class="remove-filter" title="Удалить"><i class="fa fa-remove"></i></a>
              </li>
          </ul>
            <div style="display: flex;justify-content: center; align-items: unset; align-content: flex-end;">
              <button 
                :disabled="applyFilterButtonDisabled"
                @click="applyFilters()" style="margin-top: 20px;" v-if="filterBar.category.checked.length >0 || filterBar.size.checked.length > 0" class="btn btn-theme m-b-1" type="button">
                Применить <i class="fa fa-filter"></i>
              </button>
            </div>
        </div>
        <div class="filter-sidebar">
          <div class="title"><span>Категория</span></div>
           <div class="checkbox" v-for="category of filterBar.category.list" :key="category">
             <label><input type="checkbox" @change="onFilterChange()" :value="category" v-model="filterBar.category.checked">
              <span> {{ category }} </span>
            </label>
          </div>
        </div>
        <!-- <div class="filter-sidebar">
          <div class="title"><span>Options</span></div>
          <ul>
            <li>
              <select class="selectpicker" data-width="100%">
                <option value="0">All Options</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </li>
            <li>
              <select class="selectpicker" data-width="100%">
                <option value="0">All Options</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </li>
          </ul>
        </div>
        <div class="filter-sidebar">
          <div class="title"><span>Options 2</span></div>
          <div class="radio"><label><input type="radio" name="options2" checked="checked"><span>All Options 2</span></label></div>
          <div class="radio"><label><input type="radio" name="options2"><span>Options 2.1</span></label></div>
          <div class="radio"><label><input type="radio" name="options2"><span>Options 2.2</span></label></div>
          <div class="radio"><label><input type="radio" name="options2"><span>Options 2.3</span></label></div>
        </div>
        <div class="filter-sidebar">
          <div class="title"><span>Availability</span></div>
          <div class="checkbox"><label><input type="checkbox" checked="checked"><span> In Stock (20)</span></label></div>
        </div>
        <div class="filter-sidebar">
          <div class="title"><span>Размер</span></div>
          <div class="checkbox"><label><input type="checkbox" checked="checked"><span> Brand Name 1 (11)</span></label></div>
          <div class="checkbox"><label><input type="checkbox"><span> Brand Name 2 (12)</span></label></div>
          <div class="checkbox"><label><input type="checkbox"><span> Brand Name 3 (13)</span></label></div>
          <div class="checkbox"><label><input type="checkbox"><span> Brand Name 4 (14)</span></label></div>
        </div>
        <div class="filter-sidebar">
          <div class="title"><span>Price Range</span></div>
          <div id="range-value">Range: <span id="min-price"></span> - <span id="max-price"></span></div>
          <input type="hidden" name="min-price" value="">
          <input type="hidden" name="max-price" value="">
          <div class="price-range">
            <div id="price"></div>
          </div>
        </div> -->
        <div class="filter-sidebar">
          <!-- <div class="checkbox" v-for="category of filterBar.category.list" :key="category">
             <label><input type="checkbox" :value="category" v-model="filterBar.category.checked">
              <span> {{ category }} (10)</span>
            </label>
          </div> -->
          <div class="title"><span>Размер</span></div>
          <table class="table">
            <tbody>
              <tr v-for="(size, index) of filterBar.size.list" :key="index">
                <td>
                  <label class="checkbox-inline"><input type="checkbox" @change="onFilterChange()" :value="size" v-model="filterBar.size.checked"><span> {{ size }} </span></label>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
      <!-- End Filter Sidebar -->

      <!-- Product List -->
      <div class="col-sm-9">
        <!-- {{ pagination }}
        {{ pages.UI }} -->
        <div class="title"><span v-once>{{ meta.title }}</span></div>

        <!-- Product Sorting Bar -->
        <div class="product-sorting-bar">
          <div>Сортировать по
            <select name="sortby" @change="changeSelect()" class="selectpicker sort" v-model="sortSelected" data-width="180px">
              <option 
                v-for="option of sortBar.sortBy"
                :value="option.value"
                :key="option.value.title"
                v-html="option.title"
              >
              </option>
            </select>
          </div>
          <div>Показать
            <select name="show" @change="changeSelect()" class="selectpicker limit" data-width="60px" v-model="limitSelected">
              <option 
                v-for="option of sortBar.perPage"
                :value="option"
                :key="option"
              >
                {{ option }}
              </option>
            </select> на странице
          </div>
        </div>
        <!-- End Product Sorting Bar -->

         <!-- <div class="box-product-outer" v-for="product in products" :key="product._id">
            <div class="box-product">
              <div class="img-wrapper">
                <router-link :to="{ path: `/product/${product.model}`, params: { productId: 123 }}">
                   <img alt="Product" :src="product.images[0]">
                </router-link>
                <div class="tags">
                  <span class="label-tags"><span class="label label-danger arrowed">Sale</span></span>
                  <span class="label-tags"><span class="label label-default arrowed">Collection</span></span>
                </div>
                <div class="option">
                  <a href="#" data-toggle="tooltip" title="Добавить в Корзину"><i class="fa fa-shopping-cart"></i></a>
                  <a href="#" data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                  <a href="#" data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
                </div>
              </div>
              <h6><router-link :to="{ path: `/product/${product.model}`, params: { productId: 123 }}">{{product.name}}</router-link></h6>
              <div class="price">
                <div>{{product.price}}грн. <span class="label-tags"><span class="label label-danger arrowed">-10%</span></span></div>
                <span class="price-old">$15.00</span>
              </div>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
                <a href="#">(5 reviews)</a>
              </div>
            </div>
          </div>
        </div> -->
        <div v-if="products.length === 0 && dataFetched">
          <h2>По даному запросу нет совпадений</h2>
        </div>
        <div @mouseover="active = product._id" @mouseleave="active = null" class="col-xs-6 col-md-4 col-lg-3 box-product-outer" v-for="product in products" :key="product._id">
          <div class="box-product">
            <div class="img-wrapper">
              <router-link  :to="{ path: `/product/${product.model}`, params: { productId: 123 }}">
                 <img v-show="active === product._id" alt="Product" :src="product.images.find(l => l.includes('back')) ? product.images.find(l => l.includes('back')) : product.images[2] ? product.images[2] : product.images[1]">
                 <img v-show="active !== product._id" alt="Product" :src="product.images[0]">
              </router-link>
                <div class="tags tags-left">
                  <span v-if="product.labels && product.labels.includes('Новинка')" class="label-tags"><span class="label label-success arrowed-right">Новинка</span></span>
                  <span v-if="product.labels && product.labels.includes('Распродажа')" class="label-tags"><span class="label label-danger arrowed-right">Распродажа</span></span>
                </div>
                <div class="tags">
                  <span v-if="product.labels && product.labels.includes('Коллекция')" class="label-tags"><span class="label label-info arrowed">Коллекция</span></span>
                  <span v-if="product.labels && product.labels.includes('Популярное')" class="label-tags"><span class="label label-primary arrowed">Популярное</span></span>
                  <span v-if="product.labels && product.labels.includes('Товар недели')" class="label-tags"><span class="label label-default arrowed">Товар недели</span></span>
                </div>
              <div class="option">
                <!-- <a href="#" data-toggle="tooltip" title="Добавить в Корзину"><i class="fa fa-shopping-cart"></i></a> -->
                <a data-toggle="tooltip" @click="addProductToCart(product)" :data-original-title="!product.inCart ? 'Добавить в Корзину' : 'Уже в Корзине'">
                  <i class="fa fa-shopping-cart" v-bind:class="{ alreadyInCart: product.inCart }"></i>
                </a>
                <!-- <a href="#" data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a> -->
                <!-- <a href="#" data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a> -->
              </div>
            </div>
            <h6 style="height: 35px;"><router-link :to="{ path: `/product/${product.model}`, params: { productId: 123 }}">{{product.name}}</router-link></h6>
            <div class="price">
              <div>{{product.price.discount > 0 ? product.price.total : product.price.current}} грн. <span v-if="product.price.discount > 0" class="label-tags"><span class="label label-danger arrowed">-{{product.price.discount}}%</span></span></div>
              <span v-if="product.price.discount > 0" class="price-old">{{product.price.current}} грн.</span>
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

        <div class="clearfix"></div>
        <!-- <div class="col-xs-6 col-md-4 col-lg-3 box-product-outer">
          <div class="box-product">
            <div class="img-wrapper">
              <a href="detail.html">
                <img alt="Product" src="../../assets/images/demo/p5-1.jpg">
              </a>
              <div class="tags tags-left">
                <span class="label-tags"><span class="label label-primary arrowed-right">Pupolar</span></span>
              </div>
              <div class="option">
                <a href="#" data-toggle="tooltip" title="Добавить в Корзину"><i class="fa fa-shopping-cart"></i></a>
                <a href="#" data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                <a href="#" data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
              </div>
            </div>
            <h6><a href="detail.html">IncultAcid Wash Raglan Crew Neck T-Shirt</a></h6>
            <div class="price">
              <div>$13.50 <span class="label-tags"><span class="label label-danger arrowed">-10%</span></span></div>
              <span class="price-old">$15.00</span>
            </div>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
              <a href="#">(5 reviews)</a>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-md-4 col-lg-3 box-product-outer">
          <div class="box-product">
            <div class="img-wrapper">
              <a href="detail.html">
                <img alt="Product" src="../../assets/images/demo/p6-1.jpg">
              </a>
              <div class="tags">
                <span class="label-tags"><span class="label label-danger arrowed">Hot Item</span></span>
              </div>
              <div class="option">
                <a href="#" data-toggle="tooltip" title="Добавить в Корзину"><i class="fa fa-shopping-cart"></i></a>
                <a href="#" data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                <a href="#" data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
              </div>
            </div>
            <h6><a href="detail.html">Avoir EnvieOlive Printed Round Neck T-Shirt</a></h6>
            <div class="price">
              <div>$13.50 <span class="label-tags"><span class="label label-success arrowed">-10%</span></span></div>
              <span class="price-old">$15.00</span>
            </div>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
              <a href="#">(5 reviews)</a>
            </div>
          </div>
        </div>
        <div class="clearfix visible-xs visible-sm"></div>
        <div class="col-xs-6 col-md-4 col-lg-3 box-product-outer">
          <div class="box-product">
            <div class="img-wrapper">
              <a href="detail.html">
                <img alt="Product" src="../../assets/images/demo/p7-1.jpg">
              </a>
              <div class="tags">
                <span class="label-tags"><span class="label label-default arrowed">Hot Item</span></span>
              </div>
              <div class="option">
                <a href="#" data-toggle="tooltip" title="Добавить в Корзину"><i class="fa fa-shopping-cart"></i></a>
                <a href="#" data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                <a href="#" data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
              </div>
            </div>
            <h6><a href="detail.html">ElaboradoBrown Printed Round Neck T-Shirt</a></h6>
            <div class="price">
              <div>$13.50 <span class="label-tags"><span class="label label-primary arrowed">-10%</span></span></div>
              <span class="price-old">$15.00</span>
            </div>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
              <a href="#">(5 reviews)</a>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-md-4 col-lg-3 hidden-md box-product-outer">
          <div class="box-product">
            <div class="img-wrapper">
              <a href="detail.html">
                <img alt="Product" src="../../assets/images/demo/polo1.jpg">
              </a>
              <div class="tags">
                <span class="label-tags"><span class="label label-success arrowed">New Arrivals</span></span>
              </div>
              <div class="option">
                <a href="#" data-toggle="tooltip" title="Добавить в Корзину"><i class="fa fa-shopping-cart"></i></a>
                <a href="#" data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                <a href="#" data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
              </div>
            </div>
            <h6><a href="detail.html">IncultGeo Print Polo T-Shirt</a></h6>
            <div class="price">
              <div>$13.50 <span class="label-tags"><span class="label label-default arrowed">-10%</span></span></div>
              <span class="price-old">$15.00</span>
            </div>
            <div class="rating">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
              <a href="#">(5 reviews)</a>
            </div>
          </div>
        </div> -->

        <!-- Pagination -->
        <div class="col-xs-12 text-center" v-if="products.length > 0 && dataFetched">
          <nav aria-label="Page navigation">
            <ul class="pagination">
              
              <li 
                v-bind:class="{ disabled: pagination.currentpage <= 1 }"
              >
                <a role="button" @click="onPageClick(1)">&laquo;</a>
              </li>
              <li
                v-bind:class="{ disabled: pagination.currentpage <= 1 }"
              >
                <a role="button" @click="onPageClick(pagination.currentpage-1)">&lsaquo;</a>
              </li>

              <li
                v-for="page of pages.UI"
                v-bind:class="{ active: page === pagination.currentpage }"
                :key="page"
              >
                <a
                  role="button"
                  @click="onPageClick(page)"
                >
                  {{ page }}
                </a>
              </li>

              <li
                v-bind:class="{ disabled: pagination.currentpage >= pagination.lastpage }"
              >
                <a role="button" @click="onPageClick(pagination.currentpage+1)">&rsaquo;</a>
              </li>
              <li
                v-bind:class="{ disabled: pagination.currentpage >= pagination.lastpage }"
              >
                <a role="button" @click="onPageClick(pagination.lastpage)">&raquo;</a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- End Pagination -->

      </div>
      <!-- End Product List -->

    </div>
  </div>
  <!-- End Main Content -->
</template>

<script>
export default {
  name: 'MainContent',
  props: ['meta', 'products', 'pagination', 'dataFetched'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      sortBar: {
        perPage: [8, 16, 32, 64],
        sortBy: [
          {
            title: 'Популярности',
            value: '{"title":"purchased","order":"desc"}',
          },
          {
            title: 'Дешево &raquo; Дорого',
            value: '{"title":"price.total","order":"asc"}',
          },
          {
            title: 'Дорого &raquo; Дешево',
            value: '{"title":"price.total","order":"desc"}',
          },
        ],
      },
      filterBar: {
        category: {
          list: [
            'Брюки',
            'Верхняя одежда',
            'Кофты, худи',
            'Платья',
            'Рубашки, блузки',
            'Свитера, туники',
            'Свитшоты',
            'Костюмы',
            'Спортивные костюмы',
            'Футболки, майки',
            'Шорты',
            'Юбки',
          ],
          checked: [],
        },
        size: {
          list: [
            'XXS (40)', 'XS (42)',
            'XS-S (42-44)', 'S (44)',
            'M (46)', 'M-L (46-48)',
            'L (48)', 'XL (50)',
          ],
          checked: [],
        },
      },
      pages: {
        total: 3,
        UI: [1, 2, 3],
      },
      active: false,
      sortSelected: '{"title":"purchased","order":"desc"}',
      limitSelected: 8,
      applyFilterButtonDisabled: false,
    };
  },
  methods: {
    addProductToCart(product) {
      //eslint-disable-next-line
      console.log(product);
      //eslint-disable-next-line
      this.$store.dispatch('products/addProductToCart', { id: product._id });
    },
    onFilterChange() {
      this.applyFilterButtonDisabled = false;
    },
    removeFilterOption(option, item) {
      this.filterBar[option].checked = this.filterBar[option].checked.filter(i => i !== item);

      //eslint-disable-next-line
      if (this.filterBar.size.checked.length === 0 && this.filterBar.category.checked.length === 0) {
        //eslint-disable-next-line
        console.log('NO FILTERS!');
        this.applyFilters();
      }
      this.applyFilterButtonDisabled = false;
    },
    applyFilters() {
      const value1 = JSON.parse(this.sortSelected);
      //eslint-disable-next-line
      console.log(this.filterBar.category.checked);
      //eslint-disable-next-line
      console.log(this.filterBar.size.checked);
      const { category, size } = this.filterBar;

      this.loadProducts({
        sort: value1.title,
        order: value1.order,
        cat: category.checked,
        size: size.checked,
      });
      this.applyFilterButtonDisabled = true;
    },
    changeSelect() {
      const value1 = JSON.parse(this.sortSelected);
      const value2 = JSON.parse(this.limitSelected);

      this.loadProducts({ sort: value1.title, order: value1.order, limit: +value2 });
    },
    loadProducts(opts) {
      const params = Object.assign({}, this.pagination, opts);
      const { sort, order, limit, offset, cat, size } = params;
      const dispatchObject = {
        type: this.meta.link,
        sort,
        order,
        limit,
        offset,
      };

      if (cat) dispatchObject.cat = cat;
      if (size) dispatchObject.size = size;

      this.$store.dispatch(dispatchObject);
    },
    setPagesForUI() {
      const { currentpage, lastpage } = this.pagination;
      let UIpdages = [1];
      if (currentpage === 1) {
        UIpdages = [currentpage, currentpage + 1, currentpage + 2];
      } else if (this.pagination.currentpage === lastpage) {
        UIpdages = [lastpage - 2, lastpage - 1, lastpage];
      } else {
        UIpdages = [currentpage - 1, currentpage, currentpage + 1];
      }
      if (lastpage === 0) UIpdages = [1];
      this.pages.UI = UIpdages;
    },
    onPageClick(page) {
      const { currentpage, lastpage, limit } = this.pagination;
      if (page === currentpage || page > lastpage || page < 1) return null;
      const value = JSON.parse(this.sortSelected);
      this.loadProducts({ offset: (page - 1) * limit, sort: value.title, order: value.order });
      return null;
    },
  },
  watch: {
    pagination(val) {
      if (!val) return;
      //eslint-disable-next-line
      console.log(this.pages);
      this.pagination.currentpage = (val.offset / val.limit) + 1;
      this.pagination.lastpage = Math.round(val.total / val.limit);
      this.setPagesForUI();
    },
  },
  // watch: {
  //   dataFetched: (val) => {
  //     if (val) {
  //       setTimeout(() => {
  //         if ($('.widget-slider').exist()) {
  //           var widgetSlider = $('.widget-slider');
  //           // widgetSlider.data('owl.carousel').destroy();
  //           widgetSlider.owlCarousel({
  //             items:1,
  //             dots: false,
  //             nav: true,
  //             navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  //             responsive: {
  //               0: {
  //                 items:2,
  //               },
  //               768:{
  //                 items:3,
  //               },
  //               992:{
  //                 items:1,
  //               }
  //             }
  //           });
  //         }
  //         if ($('.product-slider').exist()) {
  //           var product_slider = $('.product-slider')
  //           product_slider.owlCarousel({
  //             dots: false,
  //             nav: true,
  //             navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  //             responsive: {
  //                 0: {
  //                   items:2,
  //                 },
  //                 768:{
  //                   items:3,
  //                 },
  //                 1200:{
  //                   items:4,
  //                 }
  //               }
  //           });
  //         }
  //       });
  //     }
  //   },
  // },
  created() {
    this.$store.dispatch('products/resetProducts');
  },
  mounted() {
    this.loadProducts({
      limit: this.sortBar.perPage[0],
      offset: 0,
      sort: JSON.parse(this.sortBar.sortBy[0].value).title,
      order: JSON.parse(this.sortBar.sortBy[0].value).order,
    });

    // setTimeout(() => {

    // // Price Range
    //     var price = document.getElementById('price');
    //     if (price) {
    //       noUiSlider.create(price, {
    //         start: [20, 80],
    //         connect: true,
    //         range: {
    //           'min': 33,
    //           'max': 100
    //         }
    //       });

    //       price.noUiSlider.on('update', function(values, handle) {
    //         var value = values[handle];
    //         if (handle) {
    //           $('#max-price').text('$' + Math.round(value));
    //           $('input[name="max-price"]').text(Math.round(value));
    //         } else {
    //           $('#min-price').text('$' + Math.round(value));
    //           $('input[name="min-price"]').text(Math.round(value));
    //         }
    //       });
    //     }
    // }, 0)

    // setTimeout(() => {
    //   if ($('.widget-slider').exist()) {
    //     var widgetSlider = $('.widget-slider');
    //     // widgetSlider.data('owl.carousel').destroy();
    //     widgetSlider.owlCarousel({
    //       items:1,
    //       dots: false,
    //       lazyLoad: true,
    //       nav: true,
    //       navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //       responsive: {
    //         0: {
    //           items:2,
    //         },
    //         768:{
    //           items:3,
    //         },
    //         992:{
    //           items:1,
    //         }
    //       }
    //     });
    //   }
    // }, 2000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
