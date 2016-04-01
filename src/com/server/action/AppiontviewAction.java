package com.server.action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.dao.AppiontviewDao;
import com.server.pojo.Appiontview;
import com.server.pojo.Placeview;
import com.server.poco.AppiontviewPoco;
import com.server.poco.PlaceviewPoco;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseAction;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * 预约 逻辑层
 *@author ZhangRuiLong
 */
public class AppiontviewAction extends BaseAction {
	public String result = CommonConst.FAILURE;
	public ArrayList<Appiontview> cuss = null;
	public AppiontviewDao DAO = new AppiontviewDao();
	public java.lang.reflect.Type TYPE = new com.google.gson.reflect.TypeToken<ArrayList<Appiontview>>() {}.getType();
	
	//导出
	public void expAll(HttpServletRequest request, HttpServletResponse response) throws Exception{
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Appiontview.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(AppiontviewPoco.ORDER);
		cuss = (ArrayList<Appiontview>) DAO.selAll(queryinfo);
		FileUtil.expExcel(response,cuss,AppiontviewPoco.CHINESENAME,AppiontviewPoco.NAME);
	}
	//查询所有
	public void selAll(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Appiontview.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(AppiontviewPoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(0, DAO.selAll(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//分页查询
	public void selQuery(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Appiontview.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(AppiontviewPoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(DAO.getTotal(queryinfo), DAO.selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//查询所有
	public void selAllplace(HttpServletRequest request, HttpServletResponse response){
		String stadiumname = request.getParameter("stadiumname");
		String projectname = request.getParameter("projectname");
		String placetimedetail = request.getParameter("placetimedetail");
		String appiontdate = request.getParameter("appiontdate");
		
		Queryinfo queryinfo = getQueryinfo();
		queryinfo.setType(Appiontview.class);
		queryinfo.setWheresql("appointcoursename='"+stadiumname+
				"' and appointproject='"+projectname+
				"' and appointdetail='"+placetimedetail
				+"' and createtime like '"+appiontdate
				+"%'");
		queryinfo.setOrder(AppiontviewPoco.ORDER);
		cuss = (ArrayList<Appiontview>) DAO.selAll(queryinfo);
		
		String wheresql = "stadiumname='"+stadiumname+
				"' and placeproject='"+projectname+"'";
		for(Appiontview mAppiontview:cuss){
			wheresql += " and placeid !='"+mAppiontview.getAppointplace()+"'";
		}
		Queryinfo queryinfoplace = getQueryinfo();
		queryinfoplace.setType(Placeview.class);
		queryinfoplace.setWheresql(wheresql);
		queryinfoplace.setOrder(PlaceviewPoco.ORDER);
		ArrayList<Placeview> cussplace = (ArrayList<Placeview>) DAO.selAll(queryinfoplace);
		for(Placeview mPlaceview:cussplace){
			Appiontview mAppiontview = new Appiontview();
			mAppiontview.setAppointplace(mPlaceview.getPlaceid());
			mAppiontview.setAppointplacename(mPlaceview.getPlacename());
			cuss.add(mAppiontview);
		}
		Pageinfo pageinfo = new Pageinfo(0, cuss);
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}
