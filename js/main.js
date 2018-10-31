setInterval(function(){
  changeImg("namecard_img", "image/ksh/profile_img_", profileImgArray);
}, 3000);


var profileImgArray = ['02.PNG', '08.PNG', '10.PNG'];

function changeImg(imgId, imgRoute, imgArray){
	var imgIndex = 0;
	var namecardDivImg = document.getElementById(imgId);
	console.log(namecardDivImg);
	namecardDivImg.setAttribute("src", imgRoute+imgArray[imgIndex]);
	imgIndex++;
	if (imgIndex>=imgArray.length) {
		imgIndex=0;
	}
};


