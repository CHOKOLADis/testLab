$(document).ready(function(){
      $('.slider').slick({
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    

    $("a.btn_menu").on("click",function(e){
      e.preventDefault();
      $(this).toggleClass("btn_menu_active");
      if ($(this).hasClass("btn_menu_active")){
        $("ul.menu").css("left","-18px");
        $(".logo span").css("color","#191C1F");
        $("a.btn_menu").css("margin-left","auto");
      }
      else{
        $("ul.menu").css("left","900px");
        $(".logo span").css("color","white");
      }
    });
    
});