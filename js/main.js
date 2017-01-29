$(document).ready(function() {
  $(".dropdown").hide();
	$("header").click(function() {
    //$(".dropdown").show();
		$(".dropdown").slideToggle("fast");
	});
  console.log("success");
});
