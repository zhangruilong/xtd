
$(document).ready(function() {
    //下载爱家看板
    $(".modal_ht_btn_download").click(function() {
            window.open('http://www.jinyi-app.com/AiJiaKanBan.zip');
    });
    //平台页面 控制nav，改变颜色    
    function Change(){
            var _width = $(window).width(); 
            
            if(_width <= 973){
                $(".platform_header_nav li a ").css("color","black");
                // $(".platform_header_nav  ").css({
                //     "background-color":"#282828",
                //     "color":"#fff"

                // });
            // $(".header .main_logo ").css("display","none");
         
            };

            if(_width >973){
                $(".platform_header_nav li a ").css("color","#fff");
            };
    }

    window.onresize = Change;
    $(".platform_li").click(Change());

    //case页面加载图片
    $.getJSON("../data/data_hx.json", function(data) {
        // $("#case_hx_img").html("");//清空info内容
        $.each(data.comments_hx, function(i, item) {
            $("#case_hx_img").append(
                "<div> <img src= " +' " '+  item.url  +' " ' +  ">" +
                "<p>" + item.name + "</p></div>"
                // "<p><a href='"+ item.link +"'>"+ item.name + "</a></p></div>"  //加入a链接                      
            );
        $('#case_hx_img div').addClass('col-sm-4 thumbnail');           
        });
    });

    $.getJSON("../data/data_lj.json", function(data) {            
        $.each(data.comments_lj, function(i, item) {
            $("#case_lj_img").append(
                "<div> <img src= " +' " '+  item.url  +' " ' +  ">" +
                "<p>" + item.name + "</p></div>"                                           
            );
        $('#case_lj_img div').addClass('col-sm-4 thumbnail');           
        });
    });


    //发送表单数据  联系我们，了解更多
    $("#btnSend").on("click", function(event) {
        var nicename = $("#name").val();
        var contact = $("#phone").val();
        if(!nicename) {
            alert("请输入名字");
            return;
        }
        if(!contact) {
            alert("请输入联系方式")
            return;
        }
        
        //www.ajweishequ.com
        $.post("http://www.ajweishequ.com:9000/web/contact",
        {
                "nicename":nicename,
                "contact":contact,
                "company":$("#company").val(),
                "message":$("#message").val()
        },
        function(result){
            $("#name").val("");
            $("#phone").val("");
            $("#company").val("");
            $("#message").val("");
            alert("投递成功")
        }),
        'text'
    });

     //发送表单数据  登录后台页面
     $("#btnLogin").on("click", function(event) {
        var nicename = $("#login_name").val();
        var password = $("#login_code").val();
        if(!nicename) {
            alert("请输入用户名");
            return;
        }
        if(!password) {
            alert("请输入密码")
            return;
        }
        
        //www.ajweishequ.com
        $.post("http://www.ajweishequ.com:9000/web/contact",
        {
                "nicename":nicename,
                "contact":contact
               
        },
        function(result){
            $("#name").val("");
            $("#phone").val("");
            alert("投递成功")
        }),
        'text'
    });
});	


  