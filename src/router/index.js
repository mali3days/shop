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
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    // {
    //   path: '/products',
    //   name: 'Products',
    //   component: Products,
    // },
    {
      path: '/woman',
      name: 'Woman',
      component: Woman,
    },
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
    // {
    //   path: '/lord-of-the-bubbles',
    //   name: 'LordOfTheBubbles',
    //   component: LordOfTheBubbles,
    // },
    {
      path: '/:id',
      name: 'Product',
      component: Product,
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    // {
    //   path: '/admin',
    //   redirect: '/admin/dashboard',
    //   name: 'dashboard',
    //   component: Full,
    //   children: [
    //     {
    //       path: '/admin/dashboard',
    //       name: 'Dashboard',
    //       component: Dashboard,
    //     },
    //     {
    //       path: '/admin/charts',
    //       name: 'Charts',
    //       component: Charts,
    //     },
    //     {
    //       path: '/admin/widgets',
    //       name: 'Widgets',
    //       component: Widgets,
    //     },
    //     {
    //       path: '/admin/components',
    //       redirect: '/admin/components',
    //       name: 'Components',
    //       component: {
    //         render(c) { return c('router-view'); },
    //       },
    //       children: [
    //         {
    //           path: '/admin/components/buttons',
    //           name: 'Buttons',
    //           component: Buttons,
    //         },
    //         {
    //           path: '/admin/components/social-buttons',
    //           name: 'Social Buttons',
    //           component: SocialButtons,
    //         },
    //         {
    //           path: '/admin/components/cards',
    //           name: 'Cards',
    //           component: Cards,
    //         },
    //         {
    //           path: '/admin/components/forms',
    //           name: 'Forms',
    //           component: Forms,
    //         },
    //         {
    //           path: '/admin/components/modals',
    //           name: 'Modals',
    //           component: Modals,
    //         },
    //         {
    //           path: '/admin/components/switches',
    //           name: 'Switches',
    //           component: Switches,
    //         },
    //         {
    //           path: '/admin/components/tables',
    //           name: 'Tables',
    //           component: Tables,
    //         },
    //       ],
    //     },
    //     {
    //       path: '/admin/icons',
    //       redirect: '/icons/font-awesome',
    //       name: 'Icons',
    //       component: {
    //         render(c) { return c('router-view'); },
    //       },
    //       children: [
    //         {
    //           path: 'font-awesome',
    //           name: 'Font Awesome',
    //           component: FontAwesome,
    //         },
    //         {
    //           path: 'simple-line-icons',
    //           name: 'Simple Line Icons',
    //           component: SimpleLineIcons,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   path: '/admin/pages',
    //   redirect: '/admin/pages/404',
    //   name: 'Pages',
    //   component: {
    //     render(c) { return c('router-view'); },
    //   },
    //   children: [
    //     {
    //       path: '/admin/pages/404',
    //       name: 'Page404',
    //       component: Page404,
    //     },
    //     {
    //       path: '/admin/pages/500',
    //       name: 'Page500',
    //       component: Page500,
    //     },
    //     {
    //       path: 'login',
    //       name: 'Login',
    //       component: Login,
    //     },
    //     {
    //       path: 'register',
    //       name: 'Register',
    //       component: Register,
    //     },
    //   ],
    // },
  ],
});


// import Vue from 'vue';
// import Router from 'vue-router';

// // Containers
// import Full from '@/containers/Full';

// // Views
// import Dashboard from '@/views/Dashboard';
// import Charts from '@/views/Charts';
// import Widgets from '@/views/Widgets';

// // Views - Components
// import Buttons from '@/views/components/Buttons';
// import SocialButtons from '@/views/components/SocialButtons';
// import Cards from '@/views/components/Cards';
// import Forms from '@/views/components/Forms';
// import Modals from '@/views/components/Modals';
// import Switches from '@/views/components/Switches';
// import Tables from '@/views/components/Tables';

// // Views - Icons
// import FontAwesome from '@/views/icons/FontAwesome';
// import SimpleLineIcons from '@/views/icons/SimpleLineIcons';

// // Views - Pages
// import Page404 from '@/views/pages/Page404';
// import Page500 from '@/views/pages/Page500';
// import Login from '@/views/pages/Login';
// import Register from '@/views/pages/Register';

// Vue.use(Router);

// export default new Router({
//   mode: 'history', // Demo is living in GitHub.io, so required!
//   linkActiveClass: 'open active',
//   scrollBehavior: () => ({ y: 0 }),
//   routes: [
//     {
//       path: '/admin',
//       redirect: '/admin/dashboard',
//       name: 'dashboard',
//       component: Full,
//       children: [
//         {
//           path: '/admin/dashboard',
//           name: 'Dashboard',
//           component: Dashboard,
//         },
//         {
//           path: '/admin/charts',
//           name: 'Charts',
//           component: Charts,
//         },
//         {
//           path: '/admin/widgets',
//           name: 'Widgets',
//           component: Widgets,
//         },
//         {
//           path: '/admin/components',
//           redirect: '/admin/components',
//           name: 'Components',
//           component: {
//             render(c) { return c('router-view'); },
//           },
//           children: [
//             {
//               path: '/admin/components/buttons',
//               name: 'Buttons',
//               component: Buttons,
//             },
//             {
//               path: '/admin/components/social-buttons',
//               name: 'Social Buttons',
//               component: SocialButtons,
//             },
//             {
//               path: '/admin/components/cards',
//               name: 'Cards',
//               component: Cards,
//             },
//             {
//               path: '/admin/components/forms',
//               name: 'Forms',
//               component: Forms,
//             },
//             {
//               path: '/admin/components/modals',
//               name: 'Modals',
//               component: Modals,
//             },
//             {
//               path: '/admin/components/switches',
//               name: 'Switches',
//               component: Switches,
//             },
//             {
//               path: '/admin/components/tables',
//               name: 'Tables',
//               component: Tables,
//             },
//           ],
//         },
//         {
//           path: '/admin/icons',
//           redirect: '/icons/font-awesome',
//           name: 'Icons',
//           component: {
//             render(c) { return c('router-view'); },
//           },
//           children: [
//             {
//               path: 'font-awesome',
//               name: 'Font Awesome',
//               component: FontAwesome,
//             },
//             {
//               path: 'simple-line-icons',
//               name: 'Simple Line Icons',
//               component: SimpleLineIcons,
//             },
//           ],
//         },
//       ],
//     },
//     {
//       path: '/admin/pages',
//       redirect: '/admin/pages/404',
//       name: 'Pages',
//       component: {
//         render(c) { return c('router-view'); },
//       },
//       children: [
//         {
//           path: '/admin/pages/404',
//           name: 'Page404',
//           component: Page404,
//         },
//         {
//           path: '/admin/pages/500',
//           name: 'Page500',
//           component: Page500,
//         },
//         {
//           path: 'login',
//           name: 'Login',
//           component: Login,
//         },
//         {
//           path: 'register',
//           name: 'Register',
//           component: Register,
//         },
//       ],
//     },
//   ],
// });
