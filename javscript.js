$(document).ready(function(){
    $('.splLink').click(function(){
      $(this).parent().children('div.splCont').toggle('normal');
      return false;
    });
  });