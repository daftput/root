// SmoothScroll
//==============================================//
jQuery(function () {
 jQuery('a[href^="#"]').click(function(){
     var href= jQuery(this).attr("href");
       var target = jQuery(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top; //ヘッダの高さ分位置をずらす
     jQuery("html, body").animate({scrollTop:position}, 550, "swing");
        return false;
   });
});

// Imageswap
//==============================================//

var imageSwap = function () {
    var $this = $(this);
    var newSource = $this.data('swap');
    $this.data('swap', $this.attr('src'));
    $this.attr('src', newSource);
}

$(function () {
  $('img.playgif').hover(imageSwap, imageSwap);
});



   