jQuery(document).ready(function($) {
	$("#Main").on("click", ".var", function() {
		ExpID = "#"+$(this).data('text');
		ExpHTML = $(ExpID).html();
    	$('#Explanation>pre').html(ExpHTML);
    	$('body').addClass('exp');
    });
    $("#Main").on("click", ".fun", function() {
		ExpID = "#"+$(this).data('text');
		ExpHTML = $(ExpID).html();
    	$('#Explanation>pre').html(ExpHTML);
    	$('body').addClass('exp');
    });
	$("#Explanation").on("click", "#clock", function() {
    	$('body').removeClass('exp');
    });
});