<template>
  <nav class="navbar navbar-default shadow-navbar" role="navigation">
    <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-ex1-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/cart" class="btn btn-default btn-cart-xs visible-xs pull-right">
            <i class="fa fa-shopping-cart"></i> Корзина
          </router-link>

          <!-- <a href="wishlist.html" class="btn btn-default btn-cart-xs visible-xs pull-right">
            <i class="fa fa-heart"></i> Wishlist : 3
          </a> -->
        </div>
        <div class="collapse navbar-collapse" id="navbar-ex1-collapse">
          <ul class="nav navbar-nav">
            <li :class="{active: pathname === '/' }"><router-link :to="{ path: '/'}">Главная</router-link></li>
            <li class="dropdown"
              :class="{active: (pathname === '/woman' || pathname === '/man' || pathname === '/kids'|| pathname === '/other') }"
            >
              <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Товары <span class="caret">
              </span></a>
              <ul class="dropdown-menu">
                <li><router-link :to="{ path: '/woman'}">Женская одежда</router-link></li>
                <!-- <li><router-link :to="{ path: '/man'}">Мужская одежда</router-link></li>
                <li><router-link :to="{ path: '/kids'}">Детская одежда</router-link></li>
                <li><router-link :to="{ path: '/other'}">Другое</router-link></li> -->
              </ul>
            </li>
            <li :class="{active: pathname === '/cart' }"><router-link :to="{ path: '/cart'}">Корзина</router-link></li>
            <!-- <li><router-link :to="{ path: '/checkout'}">Оформление заказа</router-link></li> -->
            <!-- <li class="dropdown mega-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Mega Menu <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <div class="mega-menu-content">
                    <div class="row">
                      <div class="col-sm-3">
                        <ul class="list-unstyled">
                          <li><p><strong>Menu Title</strong></p></li>
                          <li><a href="products.html"> Link Item </a></li>
                          <li><a href="products.html"> Link Item </a></li>
                          <li><a href="products.html"> Link Item </a></li>
                          <li><a href="products.html"> Link Item </a></li>
                          <li><a href="products.html"> Link Item </a></li>
                          <li><a href="products.html"> Link Item </a></li>
                          <li><a href="products.html"> Link Item </a></li>
                          <li><a href="products.html"> Link Item </a></li>
                        </ul>
                      </div>
                      <div class="col-sm-3">
                        <div class="thumbnail blog-list">
                          <a href="detail.html"><img src="../../assets/images/demo/mega-menu3.jpg" alt=""></a>
                          <div class="caption">
                            <h4>Lorem ipsum dolor sit</h4>
                            <p class="visible-lg">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                            <div class="text-right"><a href="detail.html" class="btn btn-theme btn-sm"><i class="fa fa-long-arrow-right"></i> More</a></div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <div class="row">
                          <div class="col-xs-6 col-sm-12">
                            <a href="products.html" class="thumbnail"><img src="../../assets/images/demo/mega-menu1.jpg" alt=""></a>
                          </div>
                          <div class="col-xs-6 col-sm-12">
                            <a href="products.html" class="thumbnail"><img src="../../assets/images/demo/mega-menu2.jpg" alt=""></a>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-3">
                        <a href="products.html" class="thumbnail"><img src="../../assets/images/demo/mega-menu.jpg" alt=""></a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li> -->
          </ul>
          <ul class="nav navbar-nav navbar-right navbar-feature visible-lg">
            <li><a><i class="fa fa-truck"></i> Free Shipping</a></li>
            <li><a><i class="fa fa-money"></i> Cash on Delivery</a></li>
            <li><a><i class="fa fa-lock"></i> Secure Payment</a></li>
          </ul>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      pathname: window.location.pathname,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
