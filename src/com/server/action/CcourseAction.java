package com.server.action;

import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.dao.CcourseDao;
import com.server.pojo.Ccourse;
import com.server.poco.CcoursePoco;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseAction;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * 会员和课程 逻辑层
 *@author ZhangRuiLong
 */
public class CcourseAction extends BaseAction {
	public String result = CommonConst.FAILURE;
	public ArrayList<Ccourse> cuss = null;
	public CcourseDao DAO = new CcourseDao();
	public java.lang.reflect.Type TYPE = new com.google.gson.reflect.TypeToken<ArrayList<Ccourse>>() {}.getType();
	
	//将json转换成cuss
	public void json2cuss(HttpServletRequest request){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
	}
	//新增
	public void insAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Ccourse temp:cuss){
			temp.setCcourseid(CommonUtil.getNewId());
			result = DAO.insSingle(temp);
		}
		responsePW(response, result);
	}
	//删除
	public void delAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Ccourse temp:cuss){
			result = DAO.delSingle(temp,CcoursePoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//修改
	public void updAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		result = DAO.updSingle(cuss.get(0),CcoursePoco.KEYCOLUMN);
		responsePW(response, result);
	}
	//导出
	public void expAll(HttpServletRequest request, HttpServletResponse response) throws Exception{
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Ccourse.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CcoursePoco.ORDER);
		cuss = (ArrayList<Ccourse>) DAO.selAll(queryinfo);
		FileUtil.expExcel(response,cuss,CcoursePoco.CHINESENAME,CcoursePoco.KEYCOLUMN,CcoursePoco.NAME);
	}
	//导入
	public void impAll(HttpServletRequest request, HttpServletResponse response){
		Fileinfo fileinfo = FileUtil.upload(request,0,null,CcoursePoco.NAME,"impAll");
		String json = FileUtil.impExcel(fileinfo.getPath(),CcoursePoco.FIELDNAME); 
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Ccourse temp:cuss){
			temp.setCcourseid(CommonUtil.getNewId());
			result = DAO.insSingle(temp);
		}
		responsePW(response, result);
	}
	//查询所有
	public void selAll(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Ccourse.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CcoursePoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(0, DAO.selAll(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//分页查询
	public void selQuery(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Ccourse.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CcoursePoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(DAO.getTotal(queryinfo), DAO.selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}
