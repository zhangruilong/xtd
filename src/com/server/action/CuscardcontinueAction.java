package com.server.action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.dao.CuscardcontinueDao;
import com.server.pojo.Cuscardchange;
import com.server.pojo.Cuscardcontinue;
import com.server.poco.CuscardcontinuePoco;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseAction;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * 会员卡续卡记录 逻辑层
 *@author ZhangRuiLong
 */
public class CuscardcontinueAction extends BaseAction {
	public String result = CommonConst.FAILURE;
	public ArrayList<Cuscardcontinue> cuss = null;
	public CuscardcontinueDao DAO = new CuscardcontinueDao();
	public java.lang.reflect.Type TYPE = new com.google.gson.reflect.TypeToken<ArrayList<Cuscardcontinue>>() {}.getType();
	
	//将json转换成cuss
	public void json2cuss(HttpServletRequest request){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
	}
	//新增
	public void insAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Cuscardcontinue temp:cuss){
			temp.setCuscardid(CommonUtil.getNewId());
			result = DAO.insSingle(temp);
		}
		responsePW(response, result);
	}
	//删除
	public void delAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Cuscardcontinue temp:cuss){
			result = DAO.delSingle(temp,CuscardcontinuePoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//修改
	public void updAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		result = DAO.updSingle(cuss.get(0),CuscardcontinuePoco.KEYCOLUMN);
		responsePW(response, result);
	}
	//导出
	public void expAll(HttpServletRequest request, HttpServletResponse response) throws Exception{
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Cuscardcontinue.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CuscardcontinuePoco.ORDER);
		cuss = (ArrayList<Cuscardcontinue>) DAO.selAll(queryinfo);
		FileUtil.expExcel(response,cuss,CuscardcontinuePoco.CHINESENAME,CuscardcontinuePoco.KEYCOLUMN,CuscardcontinuePoco.NAME);
	}
	//导入
	public void impAll(HttpServletRequest request, HttpServletResponse response){
		Fileinfo fileinfo = FileUtil.upload(request,0,null,CuscardcontinuePoco.NAME,"impAll");
		String json = FileUtil.impExcel(fileinfo.getPath(),CuscardcontinuePoco.FIELDNAME); 
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Cuscardcontinue temp:cuss){
			temp.setCuscardid(CommonUtil.getNewId());
			result = DAO.insSingle(temp);
		}
		responsePW(response, result);
	}
	//查询所有
	public void selAll(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Cuscardcontinue.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CuscardcontinuePoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(0, DAO.selAll(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//分页查询
	public void selQuery(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Cuscardcontinue.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CuscardcontinuePoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(DAO.getTotal(queryinfo), DAO.selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//续卡
	public void ccontinue(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		Cuscardcontinue temp = cuss.get(0);
		String sqlCuscard = "update Cuscard set cuscardmoney='"+
				temp.getCuscardmoneynew()+"',cuscardnums="+
				temp.getCuscardnumsnew()+",cuscardtimes="+
				temp.getCuscardtimesnew()+" where cuscardid='"+
				temp.getCuscardid()+"'";
		temp.setCuscardid(CommonUtil.getNewId());
		String sqlCuscardchange = DAO.getInsSingleSql(temp);
		result = DAO.doAll(sqlCuscard,sqlCuscardchange);
		responsePW(response, result);
	}
}
