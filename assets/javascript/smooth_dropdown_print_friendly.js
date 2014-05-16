/*Allows for smooth_dropdown_menu features to be print friendly.
Addresses issue of start opacity of 0 in Chrome browsers tested as of
version 34.0.1847.137 m where even with setting opacity to 1 in the
print media query, the opacity would not change to 1.  This will
set all dropdown-option elements to start with opacity of 1.*/

jQuery(document).ready(function($){
  $("#request_print_friendly_button").on('click', function(){
    $(".hover-expand-box").css({
      "opacity":"1",
      "height":"auto",
      "overflow":"default"
    });

    $(".dropdown-button").css({
      "cursor": "default"
    });

    $(".hide_if_print").css({
      "display": "none"
    });
  });
});