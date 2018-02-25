<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div class="title-footer"><span>О Нас</span></div>
          <ul>
            <li>
              Мы молодая развивающаяся компания, которая продает шмоточки... <a>Читать дальше</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="title-footer"><span>Информаия</span></div>
          <ul>
            <li><i class="fa fa-angle-double-right"></i> <a>FAQ</a></li>
            <li><i class="fa fa-angle-double-right"></i> <a>Политика конфиденциальности</a></li>
            <li><i class="fa fa-angle-double-right"></i> <a>Условия и Положения</a></li>
            <li><i class="fa fa-angle-double-right"></i> <a>Методы доставки</a></li>
          </ul>
        </div>
        <div class="clearfix visible-sm-block"></div>
        <div class="col-md-3 col-sm-6">
          <div class="title-footer"><span>Категории</span></div>
          <ul>
            <li><i class="fa fa-angle-double-right"></i> <a>Категория#1</a></li>
            <li><i class="fa fa-angle-double-right"></i> <a>Категория#2</a></li>
            <li><i class="fa fa-angle-double-right"></i> <a>Категория#3</a></li>
            <li><i class="fa fa-angle-double-right"></i> <a>Категория#4</a></li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="title-footer"><span>Рассылка</span></div>
          <p>Вы можете подписаться на нашу рассылку и иногда получать интересные(нет) письма в папочку "СПАМ"</p>
          <div class="input-group">
            <input class="form-control" type="text" placeholder="Email Address">
            <span class="input-group-btn">
              <button class="btn btn-default subscribe-button" type="button">Subscribe</button>
            </span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div class="title-footer"><span>Наш Магазин</span></div>
          <ul class="footer-icon">
            <li><span><i class="fa fa-map-marker"></i></span> WWW.LENINGRAD.SPB.RU</li>
            <li><span><i class="fa fa-phone"></i></span> +123-456-789</li>
            <li><span><i class="fa fa-envelope"></i></span> <a>bubble@shop.com</a></li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="title-footer"><span>Подписывайтесь на нас</span></div>
          <p>Оставайся с нами где бы ты не зависал</p>
          <ul class="follow-us">
            <li><a><i class="fa fa-facebook"></i></a></li>
            <li><a><i class="fa fa-twitter"></i></a></li>
            <li><a><i class="fa fa-google-plus"></i></a></li>
            <li><a><i class="fa fa-instagram"></i></a></li>
            <li><a><i class="fa fa-rss"></i></a></li>
          </ul>
        </div>
        <div class="clearfix visible-sm-block"></div>
        <div class="col-md-3 col-sm-6">
          <div class="title-footer"><span>Способ оплаты</span></div>
          <p>Разные картинки с популярными способами оплаты ничего не значат. Мы принимаем оплату налом или на мобильный счет 0500399846</p>
          <img src="../../assets/images/payment-1.png" alt="Payment-1">
          <img src="../../assets/images/payment-2.png" alt="Payment-2">
          <img src="../../assets/images/payment-3.png" alt="Payment-3">
          <img src="../../assets/images/payment-4.png" alt="Payment-4">
          <img src="../../assets/images/payment-5.png" alt="Payment-5">
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="title-footer"><span>Мой аккаунт</span></div>
          <ul>
            <li><i class="fa fa-angle-double-right"></i> <a>Заказы</a></li>
            <li><i class="fa fa-angle-double-right"></i> <a>Ваучеры(?)</a></li>
            <li><i class="fa fa-angle-double-right"></i> <a>Точки(?)</a></li>
            <li><i class="fa fa-angle-double-right"></i> <a>Выйти</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center copyright">
      Copyright &copy; 2017 Three Daisies All right reserved
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
