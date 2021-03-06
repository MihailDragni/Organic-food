document.addEventListener('DOMContentLoaded', () => {
  
});



$(function(){
  $(document).ready(function(){
    var cur_width = $(window).width();
    $(window).resize(function(){
        if($(window).width() <= 768 && cur_width > 768){
            //reload
            location.reload();
        }
        else if($(window).width() > 768 && cur_width <= 768){
            //reload
            location.reload();
        }
    });
  });

  $('.star').rateYo({
    starWidth: "22px",
    normalFill: "#ececec",
    ratedFill: "#F1B90B ",
    spacing: "10px",
    readOnly: true,
    starSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_32_290)">
    <path d="M11.5976 17.6153L4.79368 21.4238L6.31306 13.7758L0.587646 8.48161L8.33119 7.56322L11.5976 0.482422L14.8641 7.56322L22.6076 8.48161L16.8822 13.7758L18.4016 21.4238L11.5976 17.6153Z"/></g><defs><clipPath id="clip0_32_290"><rect width="23.1525" height="23.1525" fill="white" transform="translate(0.0212402)"/></clipPath></defs></svg>`
  });
});