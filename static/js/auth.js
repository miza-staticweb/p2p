$(document).ready(function() {
   $('.auth-box').delegate('.input-wrap', 'mouseover', function(event) {
        $(this).closest('.ym-gbox').addClass('input-active');
    });
   $('.auth-box').delegate('.input-wrap', 'mouseout', function(event) {
        $(this).closest('.ym-gbox').removeClass('input-active');
    });
   $('.auth-box').delegate('.input-wrap', 'click', function(event) {
        $(this).find('.input').focus();
    });
   $('.auth-box').delegate('.input', 'focus', function(event) {
       $(this).closest('.ym-gbox').addClass('input-active input-focus');
   });
   $('.auth-box').delegate('.input', 'blur', function(event) {
       $(this).closest('.ym-gbox').removeClass('input-active input-focus');
   });

   $('.form-box').submit(function(event) {
       // event.preventDefault();
   });
});