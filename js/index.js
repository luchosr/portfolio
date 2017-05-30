(function(){
  console.log("funciona");
  $( document ).ready(function() {
      console.log( "ready!" );
      $(document).on('click', 'a', function(event){
          event.preventDefault();

          $('html, body').animate({
              scrollTop: $( $.attr(this, 'href') ).offset().top
          }, 550);
      });
  });
})();

  // $(document).ready(function(){
  //   console.log('entra en el click');
  //   $('#divID').getNiceScroll().doScrollPos(0,('#about').position().top);
  // });
