<%@ page language="java" import="java.util.*"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
	<%@ include file="/common/common.jsp" %>
	<script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="js/ajaxfileupload.js"></script>
	<script type="text/javascript" src="js/camera.js"></script>
	<script type="text/javascript" src="Cardtype.js"></script>
	<script type="text/javascript" src="Om_employee.js"></script>
	<script type="text/javascript" src="Cuscardadd.js"></script>
<style type="text/css">
#camera_errbox {
	width: 320px;
	height: auto;
	border: 1px solid #333333;
	padding: 10px;
	color: #fff;
	text-align: left;
	margin: 20px auto;
	font-size: 14px;
}

#camera_errbox b {
	padding-bottom: 15px;
}

#navy_video{
	float:right;
}

#canvas{
	float:right;
	margin-left:20px;
}

</style>
</head>
<body onLoad="init(this)" oncontextmenu="return false" onselectstart="return false">
	<div id="divFormPanel" style="width: 70%;float: left;"></div>
	<div style="width: 30%;float: right;">
		<video id="navy_video" width="100%" autoplay class="borderstyle"></video>
		<input id="snap" type="button" value="拍照"/>
		<button onclick="convertCanvasToImage()">保存</button>
		<div id="camera_errbox">
			<b>请点击“允许”按钮，授权网页访问您的摄像头！</b>
			<div>若您并未看到任何授权提示，则表示您的浏览器不支持Media Capture或您的机器没有连接摄像头设备。</div>
		</div>
		<canvas id="canvas" width="160px" height="120px" class="borderstyle"></canvas>
	</div>
</body>
</html>
