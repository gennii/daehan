$(document).ready(function(){
  /*메뉴 내려오기*/
  $('.gnb').mouseover(function(){
    $('#header').stop().animate({height:'400px'},300),
    $('.gnb').stop().animate({height:'346px'},300);
  })
  .mouseout(function(){
    $('#header').stop().animate({height:'100px'},300),
    $('.gnb').stop().animate({height:'46px'},300);
  });

  /*슬라이더 움직이기*/
  var $banner = $('.banner').find('ul'),
      $bannerWidth = $banner.children().outerWidth(),
      $Length = $banner.children().length,
      rollingId;

  auto();

  function auto(){
    rollingId = setInterval(function(){
      rollingStart();
    }, 4000);
  }

  function rollingStart(){
    $banner.animate({left: -$bannerWidth + 'px'}, 1500, function(){
      $(this).append('<li>'+$(this).find('li:first').html()+'</li>');
      $(this).find('li:first').remove();
      $(this).css('left', 0);
    });
  }

/* 원페이지 스크롤 */
  $('.box').each(function(){
    $(this).on('mousewheel DOMMouseScroll', function(event){
      var delta = 0,
          moveTop = null,
          boxMax = $('.box').length,
          winEvent = '';

      if(!winEvent){
        winEvent = window.event;
      }
      if(winEvent.wheelDelta){
        delta = winEvent.wheelDelta/120;
        if(window.opera){
          delta = -delta;
        }
      }
      else if(winEvent.detail){
        delta = -winEvent.detail/3;
      }
      if(delta < 0){
        if($(this).index() < boxMax){
          if($(this).next() != undefined){
            moveTop = $(this).next().offset().top;
          }
        }
      }

      else{
        if($(this).index() > 0){
          if($(this).prev() !=undefined){
            moveTop = $(this).prev().offset().top;
          }
        }
      }
      $('html, body').stop().animate({
        scrollTop:moveTop + 'px'
      },{duration:800, complete: function(){}
      });

    });
  });

  /*티켓 tab*/
  $('.way li a').click(function(e){
    e.preventDefault();

    $('.way li a').removeClass('active');
    $(this).addClass('active');
  })

  









});
