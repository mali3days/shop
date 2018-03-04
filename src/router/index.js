import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home/Home';
// import Products from '@/components/Products/Products';
import Woman from '@/components/Woman/Woman';
// import Man from '@/components/Man/Man';
// import Kids from '@/components/Kids/Kids';
// import Bagpack from '@/components/Bagpack/Bagpack';

import Product from '@/components/Product/Product';
import Cart from '@/components/Cart/Cart';
import Checkout from '@/components/Checkout/Checkout';
import Register from '@/components/Register/Register';
// import LordOfTheBubbles from '@/components/LordOfTheBubbles/LordOfTheBubbles';

import HelloWorld from '@/components/HelloWorld';

// Admin
// Containers

Vue.use(Router);

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/woman',
      name: 'Woman',
      component: Woman,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/product/:model',
      name: 'Product',
      component: Product,
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    // {
    //   path: '/products',
    //   name: 'Products',
    //   component: Products,
    // },
    // {
    //   path: '/man',
    //   name: 'Man',
    //   component: Man,
    // },
    // {
    //   path: '/kids',
    //   name: 'Kids',
    //   component: Kids,
    // },
    // {
    //   path: '/other',
    //   name: 'Bagpack',
    //   component: Bagpack,
    // },
  ],
});
