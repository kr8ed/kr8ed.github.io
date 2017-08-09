$(document).ready(function(){

    var eventsElement = $('#iScroll');
    $(window).bind('scrollstart', function () {        
        $('.ui-body-c').css('background', 'green');
        if (isAtBottom()){
         console.log("at bottom");   
         eventsElement.listview('refresh');
        }
    });

    $(window).bind('scrollstop', function () {        
       $('.ui-body-c').css('background', 'red');
       eventsElement.listview('refresh');
    });
    
});

function isAtBottom(){
  
  var totalHeight, currentScroll, visibleHeight;
  
  if (document.documentElement.scrollTop)
    { currentScroll = document.documentElement.scrollTop; }
  else
    { currentScroll = document.body.scrollTop; }
  
  totalHeight = document.body.offsetHeight;
  visibleHeight = document.documentElement.clientHeight;
  
 console.log(
    'total height: ' + totalHeight + ' ' +
    'visibleHeight : ' + visibleHeight + ' ' +
    'currentScroll:' + currentScroll);
  return (totalHeight <= currentScroll + visibleHeight )
}

