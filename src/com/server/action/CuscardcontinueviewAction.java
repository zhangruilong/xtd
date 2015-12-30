package com.server.action;

import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.dao.CuscardcontinueviewDao;
import com.server.pojo.Cuscardcontinueview;
import com.server.poco.CuscardcontinueviewPoco;
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
public class CuscardcontinueviewAction extends BaseAction {
	public String result = CommonConst.FAILURE;
	public ArrayList<Cuscardcontinueview> cuss = null;
	public CuscardcontinueviewDao DAO = new CuscardcontinueviewDao();
	public java.lang.reflect.Type TYPE = new com.google.gson.reflect.TypeToken<ArrayList<Cuscardcontinueview>>() {}.getType();
	
	//导出
	public void expAll(HttpServletRequest request, HttpServletResponse response) throws Exception{
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Cuscardcontinueview.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CuscardcontinueviewPoco.ORDER);
		cuss = (ArrayList<Cuscardcontinueview>) DAO.selAll(queryinfo);
		FileUtil.expExcel(response,cuss,CuscardcontinueviewPoco.CHINESENAME,CuscardcontinueviewPoco.KEYCOLUMN,CuscardcontinueviewPoco.NAME);
	}
	//查询所有
	public void selAll(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Cuscardcontinueview.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CuscardcontinueviewPoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(0, DAO.selAll(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//分页查询
	public void selQuery(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Cuscardcontinueview.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CuscardcontinueviewPoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(DAO.getTotal(queryinfo), DAO.selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}
