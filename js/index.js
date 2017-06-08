//Modularized script
(function(){
  $( document ).ready(function() {// on page DOM load

      $(document).on('click', '.slw', function(event){//event handler
          event.preventDefault();
          $('html, body').animate({//Scroll animation
              scrollTop: $( $.attr(this, 'href') ).offset().top
          }, 1000);
      });
  });
})();
