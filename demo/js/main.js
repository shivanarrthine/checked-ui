
$(document).ready(function(){

  $('[data-toggle]').on('click', function(){
    
    // if toggling code examples
    if($(this).attr('data-toggle','code')){
      var codeBlock = $(this).parent().siblings('.example__code');

      if(codeBlock.is(":visible")){
        codeBlock.hide();
        $(this).html('<i class="fa fa-code"></i> View example code');
      }
      else {
        codeBlock.fadeIn(500);
        $(this).html('<i class="fa fa-code"></i> Hide example code');
      }
    }
    
  });

});