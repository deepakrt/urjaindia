
$(document).ready(function(){
	  if($(window).width()<768){
			   $("#wrapper").removeClass("toggled");
		    }
   
	 $("#menu-toggle").click(function(e) {
           e.preventDefault();
           $("#sidebar-wrapper").show();
          });
});


(function ($) {
$(".icon-1").click(function() {
  $('.wrapper-left').css("background", "url(images/circular5.png)no-repeat"); 
 

});

$(".icon-2").click(function() {
  $('.wrapper-left').css("background", "url(images/circular6.png) no-repeat"); 
  
});

$(".icon-3").click(function() {
  $('.wrapper-left').css("background", "url(images/circular1.png)no-repeat"); 
  
});
$(".icon-4").click(function() {
  $('.wrapper-left').css("background", "url(images/circular2.png) no-repeat "); 
  
});
$(".icon-5").click(function() {
  $('.wrapper-left').css("background", "url(images/circular3.png) no-repeat "); 
  
});
$(".icon-6").click(function() {
  $('.wrapper-left').css("background", "url(images/circular4.png) no-repeat "); 
  
});

$(".icon-1").click(function() {
  $('.circle').css("background", "url(images/circular5-hi.png)no-repeat"); 
 

});

$(".icon-2").click(function() {
  $('.circle').css("background", "url(images/circular6-hi.png) no-repeat"); 
  
});

$(".icon-3").click(function() {
  $('.circle').css("background", "url(images/circular1-hi.png)no-repeat"); 
  
});
$(".icon-4").click(function() {
  $('.circle').css("background", "url(images/circular2-hi.png) no-repeat "); 
  
});
$(".icon-5").click(function() {
  $('.circle').css("background", "url(images/circular3-hi.png) no-repeat "); 
  
});
$(".icon-6").click(function() {
  $('.circle').css("background", "url(images/circular4-hi.png) no-repeat "); 
  
});
$(".icon-1").click(function() {
  $('.wrapper-left.discom-circle').css("background", "url(images/ipds5.png)no-repeat"); 
  
});
$(".icon-2").click(function() {
  $('.wrapper-left.discom-circle').css("background", "url(images/ipds6.png)no-repeat"); 
  
});
$(".icon-3").click(function() {
  $('.wrapper-left.discom-circle').css("background", "url(images/ipds1.png)no-repeat"); 
  
});
$(".icon-4").click(function() {
  $('.wrapper-left.discom-circle').css("background", "url(images/ipds2.png)no-repeat"); 
  
});
$(".icon-5").click(function() {
  $('.wrapper-left.discom-circle').css("background", "url(images/ipds3.png)no-repeat"); 
  
});
$(".icon-6").click(function() {
  $('.wrapper-left.discom-circle').css("background", "url(images/ipds4.png)no-repeat"); 
  
});

$(".icon-1").click(function() {
  $('.wrapper-left.ipds-circle').css("background", "url(images/ipds5-hi.png)no-repeat"); 
  
});
$(".icon-2").click(function() {
  $('.wrapper-left.ipds-circle').css("background", "url(images/ipds6-hi.png)no-repeat"); 
  
});
$(".icon-3").click(function() {
  $('.wrapper-left.ipds-circle').css("background", "url(images/ipds1-hi.png)no-repeat"); 
  
});
$(".icon-4").click(function() {
  $('.wrapper-left.ipds-circle').css("background", "url(images/ipds2-hi.png)no-repeat"); 
  
});
$(".icon-5").click(function() {
  $('.wrapper-left.ipds-circle').css("background", "url(images/ipds3-hi.png)no-repeat"); 
  
});
$(".icon-6").click(function() {
  $('.wrapper-left.ipds-circle').css("background", "url(images/ipds4-hi.png)no-repeat"); 
  
});
$(".wrapper-left span").click(function(){
 var ind=$(this).index();

	$(".wrapper-right ul li").eq(ind).addClass("active");
	$(".wrapper-right ul li").eq(ind).siblings().removeClass("active");
});

          
		  


})(jQuery);