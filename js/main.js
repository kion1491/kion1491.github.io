
window.onload = function(){
	profileSlideShow();
}

var index = 0;


function profileSlideShow(){
	var i;
	var x = document.getElementsByClassName("namecard_div_img");

	for (i = 0; i < x.length; i++) {
		x[i].style.display="none";
	}
	index++;
	if(index>x.length){
		index=1;
	}
	x[index-1].style.display="block";
	setTimeout(profileSlideShow, 4000);
}

function goTop(){
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
