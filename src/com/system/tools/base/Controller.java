package com.system.tools.base;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public interface Controller {
	
	ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception;
}
