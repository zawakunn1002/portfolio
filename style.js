$(function(){
  $('.last-image').click(
    function() {
      $('.a').fadeOut(300)
      $('.b').fadeIn(3000)
    }
  );
  $('#next1').click(function(){
    $('html, body').animate({
      'scrollTop':625
    },1000)
  });
  $('#next2').click(function(){
    $('html, body').animate({
      'scrollTop':1250
    },1000)
  });
  $('#next3').click(function(){
    $('html, body').animate({
      'scrollTop':1875
    },1000)
  });
  $('#next4').click(function(){
    $('html, body').animate({
      'scrollTop':2500
    },1000)
  });
  $('#next5').click(function(){
    $('html, body').animate({
      'scrollTop':3125
    },1000)
  });
  $('.back-title').click(
    function(){
      $('#good').fadeOut(2000);
      $('#bad').fadeOut(2000);
    }
  )
  $('.good-point').click(
    function(){
     $('#good').fadeIn(2000);
    }
  );
  $('.bad-point').click(
    function(){
     $('#bad').fadeIn(2000);
    }
  );
});