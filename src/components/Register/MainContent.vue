<template>
  <div class="container m-t-3">
    <div class="row">

      <!-- Register Form -->
      <div class="col-sm-8 login-register-form m-b-3">
        <div class="title"><span>Create An Account</span></div>
        <div class="row">
          <form>
            <div class="form-group col-sm-6">
              <label for="nameInput">Name</label>
              <input type="text" class="form-control" id="nameInput" placeholder="Name">
            </div>
            <div class="form-group col-sm-6">
              <label for="emailInput">Email address</label>
              <input type="email" class="form-control" id="emailInput" placeholder="Email">
            </div>
            <div class="form-group col-sm-6">
              <label for="passwordInput">Password</label>
              <input type="password" class="form-control" id="passwordInput" placeholder="Password">
            </div>
            <div class="form-group col-sm-6">
              <label for="passwordConfirmInput">Confirm Password</label>
              <input type="password" class="form-control" id="passwordConfirmInput" placeholder="Password">
            </div>
            <div class="form-group col-sm-6">
              <label for="addressInput">Address</label>
              <textarea class="form-control" rows="3" id="addressInput"></textarea>
            </div>
            <div class="col-xs-12">
              <div class="checkbox">
                <label>
                  <input type="checkbox"><span> I agree with <a href="#"><u>Terms and Conditions.</u></a></span>
                </label>
              </div>
            </div>
            <div class="col-xs-12">
              <button type="submit" class="btn btn-theme"><i class="fa fa-long-arrow-right"></i> Register</button>
            </div>
          </form>
        </div>
      </div>
      <!-- End Register Form -->

      <!-- Login Form -->
      <div class="col-sm-4">
        <div class="title"><span>Already Registered ?</span></div>
        <form>
          <div class="form-group">
            <label for="emailInputLogin">Email address</label>
            <input type="email" class="form-control" id="emailInputLogin" placeholder="Email">
          </div>
          <div class="form-group">
            <label for="passwordInputLogin">Password</label>
            <input type="password" class="form-control" id="passwordInputLogin" placeholder="Password">
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox"><span> Remember me</span>
            </label>
          </div>
          <button type="submit" class="btn btn-theme"><i class="fa fa-long-arrow-right"></i> Login</button>
        </form>
      </div>
      <!-- End Login Form -->

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
  props: ['products', 'dataFetched'],
  data() {
    return {
      imageLarge1,
      imageLarge2,
      imageLarge3,
      imageLarge4,
    };
  },
  created: () => {
    setTimeout(() => {
      if ($('.widget-slider').exist()) {
        var widget_slider = $('.widget-slider');
        // widget_slider.data('owl.carousel').destroy();
        widget_slider.owlCarousel({
          items:1,
          dots: false,
          nav: true,
          navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
          responsive:{
            0:{
              items:2,
            },
            768:{
              items:3,
            },
            992:{
              items:1,
            }
          }
        });
      }

            // Tooltip =================================================================================
      $('button[data-toggle="tooltip"]').tooltip({container:'body',animation:false});
      $('a[data-toggle="tooltip"]').tooltip({container:'body',animation:false});

            // // Back top Top ============================================================================
        $(window).scroll(function(){
        if ($(this).scrollTop()>70) {
          $('.back-top').fadeIn();
        } else {
          $('.back-top').fadeOut();
        }
      });

    })
  },
};
</script>

<style scoped>
</style>
