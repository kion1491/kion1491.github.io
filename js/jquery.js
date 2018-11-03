$(document).ready(function(){
	$('#small_balloon').animate({opacity:'1'}, 1500);
	$('#middle_balloon').animate({opacity:'1'}, 2500);
	$('#big_balloon').animate({opacity:'1'}, 3500);
});

/*$(document).on("click", "#top_arrow_div>span", function(){
	$('html').go;
});*/

/*$(document).ready(function(){
    $("#moveBtn").on("click",function(event){
		var offset = $("#preId").offset();
		$("html body").animate({scrollTop:offset.top},2000);
    });
});

$(document).on("click", ".nav_ment", function(){

});*/

$(document).ready( function() {
	var jbOffset = $( '#header' ).offset();
	$( window ).scroll( function() {
		if ( $( document ).scrollTop() > jbOffset.top ) {
			$( '#header' ).addClass( 'header_fixed' );
	  }
		else {
			$( '#header' ).removeClass( 'header_fixed' );
	  }
	});
});

$(document).on("click", "#nav_toggle_btn", function(){
	$("#nav").toggle();
})