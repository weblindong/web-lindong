//广告轮播
var imgIndex=0;
var timeInterval=3000;
var canAuto=true;
var arr=
	['images/advert1.jpg','images/advert2.jpg','images/advert3.jpg'];
setInterval(changeImg,timeInterval);
function changeImg(){
	var obj=document.getElementById("obj");
		if(imgIndex==2){
			imgIndex=0;
		}else{
			imgIndex+=1;
		}
		obj.src=arr[imgIndex];
}
changeImg();


////鼠标介入后页面自动停止
//$("#obj").mouseenter(function(){
	//canAuto=false;
//}).mouseleave(function()
	//canAuto=true;
	//imgIndex--;
	//changeImg();
//});

