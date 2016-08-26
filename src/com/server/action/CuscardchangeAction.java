package com.server.action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.ZhajiApi;
import com.server.ZhajiCard;
import com.server.ZhajiResult;
import com.server.dao.CuscardchangeDao;
import com.server.pojo.Cuscardchange;
import com.server.poco.CuscardchangePoco;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseAction;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.DateUtils;
import com.system.tools.util.FileUtil;
import com.system.tools.util.TypeUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * 会员换卡记录 逻辑层
 *@author ZhangRuiLong
 */
public class CuscardchangeAction extends BaseAction {
	public String result = CommonConst.FAILURE;
	public ArrayList<Cuscardchange> cuss = null;
	public CuscardchangeDao DAO = new CuscardchangeDao();
	public java.lang.reflect.Type TYPE = new com.google.gson.reflect.TypeToken<ArrayList<Cuscardchange>>() {}.getType();
	
	//将json转换成cuss
	public void json2cuss(HttpServletRequest request){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
	}
	//新增
	public void insAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Cuscardchange temp:cuss){
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
		for(Cuscardchange temp:cuss){
			result = DAO.delSingle(temp,CuscardchangePoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//修改
	public void updAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		result = DAO.updSingle(cuss.get(0),CuscardchangePoco.KEYCOLUMN);
		responsePW(response, result);
	}
	//导出
	public void expAll(HttpServletRequest request, HttpServletResponse response) throws Exception{
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Cuscardchange.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CuscardchangePoco.ORDER);
		cuss = (ArrayList<Cuscardchange>) DAO.selAll(queryinfo);
		FileUtil.expExcel(response,cuss,CuscardchangePoco.CHINESENAME,CuscardchangePoco.KEYCOLUMN,CuscardchangePoco.NAME);
	}
	//导入
	public void impAll(HttpServletRequest request, HttpServletResponse response){
		Fileinfo fileinfo = FileUtil.upload(request,0,null,CuscardchangePoco.NAME,"impAll");
		String json = FileUtil.impExcel(fileinfo.getPath(),CuscardchangePoco.FIELDNAME); 
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Cuscardchange temp:cuss){
			temp.setCuscardid(CommonUtil.getNewId());
			result = DAO.insSingle(temp);
		}
		responsePW(response, result);
	}
	//查询所有
	public void selAll(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Cuscardchange.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CuscardchangePoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(0, DAO.selAll(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//分页查询
	public void selQuery(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Cuscardchange.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CuscardchangePoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(DAO.getTotal(queryinfo), DAO.selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//换卡
	public void change(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		Cuscardchange temp = cuss.get(0);
		String customercode = temp.getCreator();
		String sqlCuscard = "update Cuscard set cuscardno='"+
				temp.getCuscardnonew()+"' where cuscardid='"+
				temp.getCuscardid()+"'";
		temp.setCuscardid(CommonUtil.getNewId());
		temp.setCreator(getCurrentUsername(request));
		temp.setCreatetime(DateUtils.getDateTime());
		String sqlCuscardchange = DAO.getInsSingleSql(temp);
		result = DAO.doAll(sqlCuscard,sqlCuscardchange);
		//闸机
		if(CommonConst.SUCCESS.equals(result)){
			ZhajiResult token = ZhajiApi.getToken();
			ZhajiCard card = new ZhajiCard(TypeUtil.stringToInt(customercode), token.getToken(),
					temp.getCuscardnonew(), temp.getCuscardnonew(), 
					temp.getCuscardbegin(), temp.getCuscardend());
			ZhajiResult mZhajiResult = ZhajiApi.updUser(card);
			System.out.println("批量发卡成功->闸机接口 code:" + mZhajiResult.getCode() +
					"result:" +mZhajiResult.getResult() +"msg:"+ mZhajiResult.getMessage());
		}
		responsePW(response, result);
	}
}
