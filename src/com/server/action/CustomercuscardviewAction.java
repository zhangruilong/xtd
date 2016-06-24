package com.server.action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.dao.CustomercuscardviewDao;
import com.server.pojo.Customercuscardview;
import com.server.poco.CustomercuscardviewPoco;
import com.system.pojo.System_attach;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseAction;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * 会员的会员卡 逻辑层
 *@author ZhangRuiLong
 */
public class CustomercuscardviewAction extends BaseAction {
	public String result = CommonConst.FAILURE;
	public ArrayList<Customercuscardview> cuss = null;
	public CustomercuscardviewDao DAO = new CustomercuscardviewDao();
	public java.lang.reflect.Type TYPE = new com.google.gson.reflect.TypeToken<ArrayList<Customercuscardview>>() {}.getType();
	
	//导出
	public void expAll(HttpServletRequest request, HttpServletResponse response) throws Exception{
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Customercuscardview.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CustomercuscardviewPoco.ORDER);
		cuss = (ArrayList<Customercuscardview>) DAO.selAll(queryinfo);
		FileUtil.expExcel(response,cuss,CustomercuscardviewPoco.CHINESENAME,CustomercuscardviewPoco.NAME);
	}
	//查询所有
	public void selAll(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Customercuscardview.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CustomercuscardviewPoco.ORDER);
		cuss = (ArrayList<Customercuscardview>) DAO.selAll(queryinfo);
		//取出照片
		if(0!=cuss.size()){
			Queryinfo attqueryinfo = getQueryinfo();
			attqueryinfo.setType(System_attach.class);
			for(int i=0;i<cuss.size();i++){
				attqueryinfo.setWheresql("fid='"+cuss.get(i).getCuscardcustomer()+",' and classify='会员'");
				ArrayList<System_attach> attcuss = (ArrayList<System_attach>) DAO.selAll(attqueryinfo);
				if(0!=attcuss.size())
					cuss.get(i).setCustomerimage(attcuss.get(0).getName());
			}
		}
		
		Pageinfo pageinfo = new Pageinfo(0, cuss);
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//分页查询
	public void selQuery(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Customercuscardview.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CustomercuscardviewPoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(DAO.getTotal(queryinfo), DAO.selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}
