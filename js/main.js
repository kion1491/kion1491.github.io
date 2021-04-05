
window.onload = function(){
	profileSlideShow();
	navFunc();
	goTop();
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

function navFunc(){
	var nav = document.getElementById('nav'),
		navItem = nav.getElementsByClassName('nav_ment');
	
	for(var i = 0;i < navItem.length; i++){
		navItem[i].addEventListener('click', function(){
			var navItemText = this.innerText;
			var location = document.querySelector(`#${navItemText}`).offsetTop;
			window.scrollTo({top:location, behavior:'smooth'});
		})
	}
}

function goTop(){
	var topBtn = document.getElementById('top_arrow_div');
	topBtn.addEventListener('click', function(){
		window.scrollTo({top:0, behavior:'smooth'});
	})
}