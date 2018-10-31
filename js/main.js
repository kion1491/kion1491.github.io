var profileImgArray = ['02.PNG', '08.PNG', '10.PNG'];

function changeImg(imgId, imgRoute, imgArray){
	var namecardDivImg = document.getElementById(imgId);
	var imgIndex = 0;
	namecardDivImg.setAttribute("src", imgRoute+imgArray[imgIndex]);
	imgIndex++;
	if (imgIndex>=imgArray.length) {
		imgIndex=0;
	}
};

var profileSlider = changeImg('namecard_img', "image/ksh/profile_img_", profileImgArray);

setInterval(profileSlider, 500);