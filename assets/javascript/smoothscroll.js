//  Smooth Scrolling effect to the top when the '#smoothup' element
//  is clicked.  

var showing_to_top_button = false;


//Used to prevent scroll spamming on the scroll to top pop-up
var scroll_top_button_location_locked = false;

function unlock(){
  scroll_top_button_location_locked = false;
}
//----------------------------------------------------






jQuery(document).ready(function($){

  //  If JavaScript enabled, will fade out the to top button
  //  on page load.  Remains in place for non- JavaScript users
  //  on all conditions.
  //  Also slides element up when present and 
  //  returns to original position in off state.
  $('#smoothup').fadeOut();
  $('#smoothup').css({bottom: "-50px"});//Hide scroll to top button if JS enabled and at top.


  
  $(window).scroll(function(){



    if ($(this).scrollTop() < 200) {

      if (showing_to_top_button === true){
        $('#smoothup').animate({bottom:"-=60px"});
        $('#smoothup').fadeOut("slow");
      }
      showing_to_top_button = false;
    }
  




    else {

      if (!scroll_top_button_location_locked){

        //Sets scroll to top button locked to prevent spamming.
        scroll_top_button_location_locked = true;
        setTimeout(unlock, 1000);

        //Rest of the scroll to top pop-in function.
        $('#smoothup').fadeIn("slow");

        if (showing_to_top_button === false){
          $('#smoothup').animate({bottom:"+=60px"});
        }

        showing_to_top_button = true;
      }
    }
    
  });


  $('#smoothup').on('click', function(){
      $('html, body').animate({scrollTop:0}, 'fast');
      return true;
  });
});