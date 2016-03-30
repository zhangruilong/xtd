<%@ page language="java" import="java.util.*"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" class="  ext-strict"><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>
	新天地
</title>
<link href="login/blue.css" rel="stylesheet" text="text/css">
    <!-- CSS -->
    <link rel="stylesheet" href="login/bootstrap.min.css">
    <link rel="stylesheet" href="login/main.css">
    <!-- JavaScript -->
    <script type="text/javascript" src="login/jquery-2.1.3.min.js"></script>
    <script src="login/bootstrap.min.js"></script>
    <%@ include file="/common/common.jsp"%>
<script type=text/javascript>
if (top != window) top.location.href = window.location.href;
function check() {
	if(document.getElementById('username').value==''||document.getElementById('username').value==null){
		alert("用户名不能为空");
		return false;
	}else if(document.getElementById('password').value==''||document.getElementById('password').value==null){
		alert("密码不能为空");
		return false;
	}else{
		return true;
	}
	
};
function submitdata() {
	var username = document.getElementById('username').value;
	if(username==''||username==null){
		alert("用户名不能为空");
		return;
	}
	var password = document.getElementById('password').value;
	if(password==''||password==null){
		alert("密码不能为空");
		return;
	}
	Ext.Ajax.request({
		url : 'System_userAction.do?method=login',
		method : 'POST',
		params : {
			username : username,
			password : password
		},
		success : function(resp,opts) {
			var respText = Ext.util.JSON.decode(resp.responseText); 
			if(respText.success == false) alert(respText.msg);
			else window.location.href = "main.jsp"; ;
		},
		failure : function(resp,opts) {
			Ext.Msg.alert('提示', '网络出现问题，请稍后再试');
		}
	});
};
function keyLogin(){
	if (event.keyCode==13) {
		document.getElementById("submitbutton").click();
		event.returnValue = false;//为了防止浏览器捕捉到用户按下回车键而进行其他操作
	}
};
</script>
    <style type="text/css">
        .mycheckbox
        {
            margin-top: 0;
            margin-bottom: 10px;
            color: #9e9e9e;
        }
    </style>
</head>
<body class=" ext-webkit ext-chrome bigfont" onkeydown="keyLogin();">
    <div class="login">
        <div class="container login_logo">
            <img src="login/logo.png">
        </div>
        <div class="login_detail">
            <img src="login/login_img.png" class="pull-left login_detail_img">
            <!-- 登录框 -->
            <div class="login_form pull-right">
                <div class="form_head">
                    <img src="login/login_form_logo.png">
                                            登录管理平台
                </div>
                <div id="ctl09_wrapper"><div id="ctl09" class=" x-panel form_detail x-panel-noborder"><div class="x-panel-bwrap" id="ext-gen5"><div class="x-panel-body x-panel-body-noheader x-panel-body-noborder" id="ext-gen6" style="background-color: rgb(9, 34, 63);"><div id="ctl09_content" class="" style="visibility: visible; display: block;">
                    <div class="form-group">
                        <input name="username" type="text" id="username" class="form-control" placeholder="用户名">
                    </div>
                    <div class="form-group">
                        <input name="password" type="password" id="password" class="form-control" placeholder="密码">
                    </div>
                    <div class="mycheckbox pull-left">
                        <input id="ctl09_cbxRememberPassword" type="checkbox" name="ctl09$cbxRememberPassword" checked="checked"><span style="margin-left: 7px;">记住密码</span>
                    </div>
                    <input onclick="submitdata()" type="button" name="submitbutton" value="登录" id="submitbutton" class="btn btn-block" style="color:White;background-color:#43D0E5;font-size:16px;height:40px;">
                </div></div></div></div></div>
            </div>
        </div>
    </div>              
</body>
</html>