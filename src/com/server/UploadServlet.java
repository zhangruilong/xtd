package com.server;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.Map;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.jsp.JspFactory;
import javax.servlet.jsp.PageContext;

import sun.misc.BASE64Decoder;
/**
 * @author navy
 */
@SuppressWarnings("serial")
public class UploadServlet extends HttpServlet {
	private PrintWriter out;

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request,response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			out=response.getWriter();
			UploadUtil uploadUtil=new UploadUtil();
			PageContext context=JspFactory.getDefaultFactory().getPageContext(this,request,response,null,true,8192,true);

			Map<String,String> map=uploadUtil.update(context);
			BASE64Decoder base64=new BASE64Decoder(); 
			
			//64位解码  
			byte[] buffer=base64.decodeBuffer(map.get("imageData"));

			//写进文件
			String filename = "images/"+new Date().getTime()+""+new Random().nextInt(100000)+".png";
			String filPath = this.getServletContext().getRealPath(filename);
			
			FileOutputStream fos=new FileOutputStream(filPath);  
			fos.write(buffer);  
			fos.flush();  
			fos.close();  
			fos=null;  
			out.print("{success:true,code:202,msg:'"+filename+"'}");
		} catch (Exception e) {
			e.printStackTrace();
			out.print("{success:false,code:400,msg:'操作失败！'}");
		}
		out.flush();
		out.close();
	}

}
