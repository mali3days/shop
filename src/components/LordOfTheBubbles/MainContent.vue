<template>
    <!-- Main Content -->
  <div class="container m-t-3">
    <div class="row">

      <!-- Filter Sidebar -->
      <div class="col-sm-3 hidden-xs">
        <div class="filter-sidebar">
          <div class="title"><span>Enabled Filters</span></div>
          <ul>
              <li>Категория: Футболка <a href="" class="remove-filter" data-toggle="tooltip" title="Remove"><i class="fa fa-remove"></i></a></li>
              <li>Наличие: В наличии <a href="" class="remove-filter" data-toggle="tooltip" title="Remove"><i class="fa fa-remove"></i></a></li>
              <li>Брэнд: Брэнд №1 <a href="" class="remove-filter" data-toggle="tooltip" title="Remove"><i class="fa fa-remove"></i></a></li>
          </ul>
        </div>
        <div class="filter-sidebar">
          <div class="title"><span>Categories</span></div>
          <div class="checkbox"><label><input type="checkbox" checked="checked"><span> T-Shirts (10)</span></label></div>
          <div class="checkbox"><label><input type="checkbox"><span> Polo T-Shirts (11)</span></label></div>
        </div>
        <div class="filter-sidebar">
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
          <div class="title"><span>Brand</span></div>
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
        </div>
        <div class="filter-sidebar">
          <div class="title"><span>Size</span></div>
          <label class="checkbox-inline"><input type="checkbox"><span> M (12)</span></label>
          <label class="checkbox-inline"><input type="checkbox"><span> L (13)</span></label>
          <label class="checkbox-inline"><input type="checkbox"><span> XL (14)</span></label>
        </div>
      </div>
      <!-- End Filter Sidebar -->

      <!-- Product List -->
      <div class="col-sm-9">
        <div class="title"><span>T-Shirts</span></div>

        <!-- Product Sorting Bar -->
        <div class="product-sorting-bar">
          <div>Sort By
            <select name="sortby" class="selectpicker" data-width="180px">
              <option value="recomended">Recomended</option>
              <option value="low">Low Price &raquo; High Price</option>
              <option value="hight">High Price &raquo; High Price</option>
            </select>
          </div>
          <div>Show
            <select name="show" class="selectpicker" data-width="60px">
              <option value="8">8</option>
              <option value="12">12</option>
              <option value="16">16</option>
            </select> per page
          </div>
        </div>
        <!-- End Product Sorting Bar -->

        <div class="col-xs-6 col-md-4 col-lg-3 box-product-outer">
          <div class="box-product">
            <div class="img-wrapper">
              <router-link :to="{ path: `/products/${1}`}">
                <img alt="Product" src="../../assets/images/demo/p1-1.jpg">
              </router-link>
              <div class="tags">
                <span class="label-tags"><span class="label label-default arrowed">Featured</span></span>
              </div>
              <div class="tags tags-left">
                <span class="label-tags"><span class="label label-danger arrowed-right">Sale</span></span>
              </div>
              <div class="option">
                <a href="#" data-toggle="tooltip" title="Добавить в Корзину"><i class="fa fa-shopping-cart"></i></a>
                <a href="#" data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                <a href="#" data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
              </div>
            </div>
            <h6><a href="detail.html">WranglerGrey Printed Slim Fit Round Neck T-Shirt</a></h6>
            <div class="price">
              <div>$13.50 <span class="label-tags"><span class="label label-default">-10%</span></span></div>
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
                <img alt="Product" src="../../assets/images/demo/p2-1.jpg">
              </a>
              <div class="tags tags-left">
                <span class="label-tags"><span class="label label-success arrowed-right">New Arrivals</span></span>
              </div>
              <div class="option">
                <a href="#" data-toggle="tooltip" title="Добавить в Корзину"><i class="fa fa-shopping-cart"></i></a>
                <a href="#" data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                <a href="#" data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
              </div>
            </div>
            <h6><a href="detail.html">CelioKhaki Printed Round Neck T-Shirt</a></h6>
            <div class="price">
              <div>$13.50 <span class="label-tags"><span class="label label-primary">-10%</span></span></div>
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
                <img alt="Product" src="../../assets/images/demo/p3-1.jpg">
              </a>
              <div class="tags">
                <span class="label-tags"><span class="label label-danger arrowed">Sale</span></span>
                <span class="label-tags"><span class="label label-info arrowed">Collection</span></span>
              </div>
              <div class="option">
                <a href="#" data-toggle="tooltip" title="Добавить в Корзину"><i class="fa fa-shopping-cart"></i></a>
                <a href="#" data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                <a href="#" data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
              </div>
            </div>
            <h6><a href="detail.html">CelioOff White Printed Round Neck T-Shirt</a></h6>
            <div class="price">
              <div>$13.50</div>
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
                <img alt="Product" src="../../assets/images/demo/p4-1.jpg">
              </a>
              <div class="tags">
                <span class="label-tags"><span class="label label-primary arrowed">Popular</span></span>
              </div>
              <div class="option">
                <a href="#" data-toggle="tooltip" title="Добавить в Корзину"><i class="fa fa-shopping-cart"></i></a>
                <a href="#" data-toggle="tooltip" title="Добавить к Сравнению"><i class="fa fa-align-left"></i></a>
                <a href="#" data-toggle="tooltip" title="Добавить в Список Желаний" class="wishlist"><i class="fa fa-heart"></i></a>
              </div>
            </div>
            <h6><a href="detail.html">Levi'sNavy Blue Printed Round Neck T-Shirt</a></h6>
            <div class="price">
              <div>$13.50</div>
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
        <div class="clearfix"></div>
        <div class="col-xs-6 col-md-4 col-lg-3 box-product-outer">
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
        </div>

        <!-- Pagination -->
        <div class="col-xs-12 text-center">
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li class="disabled"><span>&laquo;</span></li>
              <li class="disabled"><span>&lsaquo;</span></li>
              <li class="active"><span>1</span></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">&rsaquo;</a></li>
              <li><a href="#">&raquo;</a></li>
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
  // props: ['products', 'dataFetched'],
  // methods: {
  //   newArrivals: products => products.slice().sort((a, b) => {
  //     return new Date(b.created) - new Date(a.created);
  //   }).slice(0, 3),
  // },
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
  created: () => {
    setTimeout(() => {
    // Price Range
      const price = document.getElementById('price');
      noUiSlider.create(price, {
        start: [20, 80],
        connect: true,
        range: {
          min: 33,
          max: 100,
        },
      });
      price.noUiSlider.on('update', (values, handle) => {
        const value = values[handle];
        if (handle) {
          $('#max-price').text(`$${Math.round(value)}`);
          $('input[name="max-price"]').text(Math.round(value));
        } else {
          $('#min-price').text(`$${Math.round(value)}`);
          $('input[name="min-price"]').text(Math.round(value));
        }
      });
    }, 2000);
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
