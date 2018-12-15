$(document).ready(function(){
   $('li').each(function(index){
      //console.log('test');
       
//       if(index<5) { //można sparametryzować 5 czyli trzeba to zamknąć w funkcji - gdy np. nie wiemy ile końcowo ten margines będzie wynosił
//            $(this).css('margin-left', index * 10 + 'px');
//          } else {
//            $(this).css('margin-left', '50px');
//          }
       
       $(this).css('margin-left', index * 10 + 'px');
   }); 
});