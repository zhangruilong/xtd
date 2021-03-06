package com.server.action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.dao.CuscarduserDao;
import com.server.pojo.Cuscard;
import com.server.pojo.Cuscarduser;
import com.server.poco.CuscardPoco;
import com.server.poco.CuscarduserPoco;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseAction;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.DateUtils;
import com.system.tools.util.FileUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * 会员卡过户记录 逻辑层
 *@author ZhangRuiLong
 */
public class CuscarduserAction extends BaseAction {
	public String result = CommonConst.FAILURE;
	public ArrayList<Cuscarduser> cuss = null;
	public CuscarduserDao DAO = new CuscarduserDao();
	public java.lang.reflect.Type TYPE = new com.google.gson.reflect.TypeToken<ArrayList<Cuscarduser>>() {}.getType();
	
	//将json转换成cuss
	public void json2cuss(HttpServletRequest request){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
	}
	//新增
	public void insAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Cuscarduser temp:cuss){
			temp.setCreator(getCurrentUsername(request));
			temp.setCreatetime(DateUtils.getDateTime());
			temp.setCuscardid(CommonUtil.getNewId());
			result = DAO.insSingle(temp);
		}
		responsePW(response, result);
	}
	//删除
	public void delAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Cuscarduser temp:cuss){
			result = DAO.delSingle(temp,CuscarduserPoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//修改
	public void updAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		result = DAO.updSingle(cuss.get(0),CuscarduserPoco.KEYCOLUMN);
		responsePW(response, result);
	}
	//导出
	public void expAll(HttpServletRequest request, HttpServletResponse response) throws Exception{
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Cuscarduser.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CuscarduserPoco.ORDER);
		cuss = (ArrayList<Cuscarduser>) DAO.selAll(queryinfo);
		FileUtil.expExcel(response,cuss,CuscarduserPoco.CHINESENAME,CuscarduserPoco.KEYCOLUMN,CuscarduserPoco.NAME);
	}
	//导入
	public void impAll(HttpServletRequest request, HttpServletResponse response){
		Fileinfo fileinfo = FileUtil.upload(request,0,null,CuscarduserPoco.NAME,"impAll");
		String json = FileUtil.impExcel(fileinfo.getPath(),CuscarduserPoco.FIELDNAME); 
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Cuscarduser temp:cuss){
			temp.setCuscardid(CommonUtil.getNewId());
			result = DAO.insSingle(temp);
		}
		responsePW(response, result);
	}
	//查询所有
	public void selAll(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Cuscarduser.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CuscarduserPoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(0, DAO.selAll(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//分页查询
	public void selQuery(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Cuscarduser.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CuscarduserPoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(DAO.getTotal(queryinfo), DAO.selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//新增
	public void guohu(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		Cuscarduser temp = cuss.get(0);
		String sqlCuscard = "update Cuscard set cuscardcustomer='"+
				temp.getCuscardcustomernew()+"' where cuscardid='"+
				temp.getCuscardid()+"'";
		temp.setCuscardid(CommonUtil.getNewId());
		temp.setCreator(getCurrentUsername(request));
		temp.setCreatetime(DateUtils.getDateTime());
		String sqlCuscarduser = DAO.getInsSingleSql(temp);
		
		result = DAO.doAll(sqlCuscard,sqlCuscarduser);
		responsePW(response, result);
	}
}
