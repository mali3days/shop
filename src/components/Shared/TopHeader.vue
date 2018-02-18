<template>
  <div class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul class="list-inline pull-left hidden-sm hidden-xs">
            <!-- <li><a href="products.html"><i class="fa fa-bullhorn"></i> Free 2 Business Day Shipping on all orders!</a></li> -->
            <!-- <li><a href="#"><i class="fa fa-android"></i> Download App</a></li> -->
          </ul>
          <ul class="list-inline pull-right">
            <li class="hidden-xs"><a href="faq.html"><i class="fa fa-question-circle"></i> Помощь</a></li>
            <li class="hidden-xs"><a href="#"><i class="fa fa-phone"></i> +123-456-789</a></li>
            <!-- <li>
              <select class="selectpicker" data-width="95px" data-style="btn-default">
                <option value="English">
                  English
                  <img alt='English' :src='eng'>
                </option>
                <option value="French">
                  French
                  <img alt='French' :src='french'>
                </option>
              </select>
            </li> -->
            <!-- <li>
              <select class="selectpicker" data-width="70px" data-style="btn-default">
                <option value="USD">$ USD</option>
                <option value="EUR">€ EUR</option>
              </select>
            </li> -->
            <!-- <li class="hidden-xs"><a href="#"><i class="fa fa-align-left"></i> Track Order</a></li> -->


            <!-- <li>
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownLogin" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <i class="fa fa-user"></i> Войти <span class="caret"></span>
                </button>
                <div class="dropdown-menu dropdown-menu-right dropdown-menu-login" aria-labelledby="dropdownLogin">
                  <form>
                    <div class="form-group">
                      <label for="username">Имя пользователя</label>
                      <input type="text" class="form-control" id="username" placeholder="Имя пользователя">
                    </div>
                    <div class="form-group">
                      <label for="password">Пароль</label>
                      <input type="password" class="form-control" id="password" placeholder="Пароль">
                    </div>
                    <div class="checkbox">
                      <label>
                        <input type="checkbox"><span> Запомнить меня</span>
                      </label>
                    </div>
                    <button type="submit" class="btn btn-default btn-sm"><i class="fa fa-long-arrow-right"></i> Войти</button>
                    <a class="btn btn-default btn-sm pull-right" href="register.html" role="button"> Регистрация</a>
                  </form>
                </div>
              </div>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eng from '@/assets/images/en.jpg';
import french from '@/assets/images/fr.jpg';

export default {
  name: 'TopHeader',
  data() {
    return {
      eng,
      french,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
