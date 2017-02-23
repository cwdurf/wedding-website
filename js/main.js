$(document).ready(function() {
  if ($(window).width() <= 1024){
    $(".dropdown").hide();
  }
	$("header").click(function() {
    if ($(window).width() <= 1024){
      $(".dropdown").slideToggle("fast")
    }
	});
});
