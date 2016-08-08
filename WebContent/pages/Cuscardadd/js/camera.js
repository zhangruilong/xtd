var imageserverurl;
function init(t) {
	accessLocalWebCam("navy_video");
}

window.URL = window.URL || window.webkitURL || window.msURL || window.oURL;
navigator.getUserMedia = navigator.getUserMedia|| navigator.webkitGetUserMedia || navigator.mozGetUserMedia|| navigator.msGetUserMedia;

function isChromiumVersionLower() {
	var ua = navigator.userAgent;
	var testChromium = ua
	.match(/AppleWebKit\/.* Chrome\/([\d.]+).* Safari\//);
	return (testChromium && (parseInt(testChromium[1].split('.')[0]) < 19));
}

function successsCallback(stream) {
	document.getElementById('camera_errbox').style.display = 'none';
	document.getElementById('navy_video').src = (window.URL && window.URL.createObjectURL) ? window.URL.createObjectURL(stream): stream;

}

function errorCallback(err) {

}

function accessLocalWebCam(id) {
	try {
		navigator.getUserMedia({
			video : true
		}, successsCallback, errorCallback);
	} catch (err) {
		navigator.getUserMedia('video', successsCallback, errorCallback);
	}
}


window.addEventListener("DOMContentLoaded", function() {
	var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"), video = document.getElementById("navy_video"), videoObj = {
		"video" : true
	}, errBack = function(error) {
		console.log("相机调用失败...", error.code);
	};

	if (navigator.getUserMedia) {
		navigator.getUserMedia(videoObj, function(stream) {
			video.src = stream;
			video.play();
		}, errBack);
	} else if (navigator.webkitGetUserMedia) {
		navigator.webkitGetUserMedia(videoObj, function(stream) {
			video.src = window.webkitURL.createObjectURL(stream);
			video.play();
		}, errBack);
	}

	document.getElementById("snap").addEventListener("click", function() {
		context.drawImage(video, 0, 0,$("#canvas").width(), $("#canvas").height());
	});
}, false);


function convertCanvasToImage() {
	var pic = document.getElementById("canvas").toDataURL("image/png");
	pic = pic.replace(/^data:image\/(png|jpg);base64,/, "")

	$.ajaxFileUpload({
		url:'../../UploadServlet',
		//fileElementId:'canvas',
		data:{imageData:pic},
		dataType:'json',
		success:function(resp){
			if(respText.code==400){
				alert("图片上传失败...");
			}else{
				imageserverurl = respText.msg;
				alert("图片已上传成功到"+imageserverurl);
			}
		},
		error:function(resp){
			var data = resp.responseText.replace("<pre>","").replace("<pre style=\"word-wrap: break-word; white-space: pre-wrap;\">","").replace("\r\n</pre>","").replace("</pre>","");
        	var respText = eval('('+data+')');
        	if(respText.code==400){
				alert("网络传输异常...");
			}else{
				imageserverurl = respText.msg;
				alert("图片已上传成功到"+imageserverurl);
			}
		}
	});
}