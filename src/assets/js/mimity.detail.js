// Wrap IIFE around the code
(function($, viewport){

  $(function(){
    // owlcarosel (if items less than 4, hide nav, disable drag, hide touch)
    var productsSliderDetail = $('.products-slider-detail');
    var itemCount = $('.products-slider-detail a').length;
    productsSliderDetail.owlCarousel({
      margin:5,
      dots:false,
      nav:itemCount < 5 ? false : true,
      mouseDrag:itemCount < 5 ? false : true,
      touchDrag:itemCount < 5 ? false : true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
          0: { items:4, }
      }
    });
    $('.products-slider-detail a').click(function anonimus(){
      var src = $(this).find('img').attr('src');
      var zoom = $(this).find('img').attr('data-zoom-image');
      var detail = $(this).parent().parent().parent().parent().parent().find('.image-detail img');
      detail.attr('src',src);
      detail.attr('data-zoom-image',zoom);
      $('.zoomWindow').css('background-image', 'url("' + zoom + '")');
      return false;
    });
    if (viewport.is('>xs')) {
      $('.image-detail img').ezPlus({
        responsive : true,
        respond: [
          {
            range: '1200-10000',
            zoomWindowHeight: 490,
            zoomWindowWidth: 782
          },
          {
            range: '992-1200',
            zoomWindowHeight: 400,
            zoomWindowWidth: 649
          },
          {
            range: '768-992',
            zoomWindowHeight: 300,
            zoomWindowWidth: 502
          },
          {
            range: '100-768',
            zoomWindowHeight: 0,
            zoomWindowWidth: 0
          }
        ]
      });
    }
    $('.input-rating').raty({
      'half': true,
      'starType' : 'i'
    });
  });

})(jQuery, ResponsiveBootstrapToolkit);