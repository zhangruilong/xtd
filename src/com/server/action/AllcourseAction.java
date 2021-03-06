package com.server.action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.dao.AllcourseDao;
import com.server.pojo.Allcourse;
import com.server.poco.AllcoursePoco;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseAction;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.DateUtils;
import com.system.tools.util.FileUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * 私教课 逻辑层
 *@author ZhangRuiLong
 */
public class AllcourseAction extends BaseAction {
	public String result = CommonConst.FAILURE;
	public ArrayList<Allcourse> cuss = null;
	public AllcourseDao DAO = new AllcourseDao();
	public java.lang.reflect.Type TYPE = new com.google.gson.reflect.TypeToken<ArrayList<Allcourse>>() {}.getType();
	
	//将json转换成cuss
	public void json2cuss(HttpServletRequest request){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
	}
	//新增
	public void insAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Allcourse temp:cuss){
			temp.setAllcourseid(CommonUtil.getNewId());
			temp.setCreator(getCurrentUsername(request));
			temp.setCreatetime(DateUtils.getDateTime());
			result = DAO.insSingle(temp);
		}
		responsePW(response, result);
	}
	//删除
	public void delAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Allcourse temp:cuss){
			result = DAO.delSingle(temp,AllcoursePoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//修改
	public void updAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		cuss.get(0).setUpdor(getCurrentUsername(request));
		cuss.get(0).setUpdtime(DateUtils.getDateTime());
		result = DAO.updSingle(cuss.get(0),AllcoursePoco.KEYCOLUMN);
		responsePW(response, result);
	}
	//导出
	public void expAll(HttpServletRequest request, HttpServletResponse response) throws Exception{
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Allcourse.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(AllcoursePoco.ORDER);
		cuss = (ArrayList<Allcourse>) DAO.selAll(queryinfo);
		FileUtil.expExcel(response,cuss,AllcoursePoco.CHINESENAME,AllcoursePoco.KEYCOLUMN,AllcoursePoco.NAME);
	}
	//导入
	public void impAll(HttpServletRequest request, HttpServletResponse response){
		Fileinfo fileinfo = FileUtil.upload(request,0,null,AllcoursePoco.NAME,"impAll");
		String json = FileUtil.impExcel(fileinfo.getPath(),AllcoursePoco.FIELDNAME); 
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Allcourse temp:cuss){
			temp.setAllcourseid(CommonUtil.getNewId());
			result = DAO.insSingle(temp);
		}
		responsePW(response, result);
	}
	//查询所有
	public void selAll(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Allcourse.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(AllcoursePoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(0, DAO.selAll(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//分页查询
	public void selQuery(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Allcourse.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(AllcoursePoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(DAO.getTotal(queryinfo), DAO.selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}
