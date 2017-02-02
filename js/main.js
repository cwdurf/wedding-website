$(document).ready(function() {
  if ($(window).width() <= 768){
    $(".dropdown").hide();
  }
	$("header").click(function() {
    if ($(window).width() <= 768){
      $(".dropdown").slideToggle("fast")
    }
	});
});
