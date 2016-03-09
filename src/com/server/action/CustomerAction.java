package com.server.action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.server.dao.CustomerDao;
import com.server.pojo.Customer;
import com.server.poco.CustomerPoco;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseAction;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * 会员 逻辑层
 *@author ZhangRuiLong
 */
public class CustomerAction extends BaseAction {
	public String result = CommonConst.FAILURE;
	public ArrayList<Customer> cuss = null;
	public CustomerDao DAO = new CustomerDao();
	public java.lang.reflect.Type TYPE = new com.google.gson.reflect.TypeToken<ArrayList<Customer>>() {}.getType();
	
	//将json转换成cuss
	public void json2cuss(HttpServletRequest request){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
	}
	//新增
	public void insAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Customer temp:cuss){
			temp.setCustomerid(CommonUtil.getNewId());
			result = DAO.insSingle(temp);
		}
		responsePW(response, result);
	}
	//删除
	public void delAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Customer temp:cuss){
			result = DAO.delSingle(temp,CustomerPoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//修改
	public void updAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		result = DAO.updSingle(cuss.get(0),CustomerPoco.KEYCOLUMN);
		responsePW(response, result);
	}
	//导出
	public void expAll(HttpServletRequest request, HttpServletResponse response) throws Exception{
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Customer.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CustomerPoco.ORDER);
		cuss = (ArrayList<Customer>) DAO.selAll(queryinfo);
		FileUtil.expExcel(response,cuss,CustomerPoco.CHINESENAME,CustomerPoco.KEYCOLUMN,CustomerPoco.NAME);
	}
	//导入
	public void impAll(HttpServletRequest request, HttpServletResponse response){
		Fileinfo fileinfo = FileUtil.upload(request,0,null,CustomerPoco.NAME,"impAll");
		String json = FileUtil.impExcel(fileinfo.getPath(),CustomerPoco.FIELDNAME); 
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Customer temp:cuss){
			temp.setCustomerid(CommonUtil.getNewId());
			result = DAO.insSingle(temp);
		}
		responsePW(response, result);
	}
	//查询所有
	public void selAll(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Customer.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CustomerPoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(0, DAO.selAll(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//分页查询
	public void selQuery(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Customer.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CustomerPoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(DAO.getTotal(queryinfo), DAO.selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//注册
	public void register(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		Customer temp = cuss.get(0);
		//判断是否已注册
		String customerid = CommonUtil.getNewId();
		Queryinfo queryinfo = getQueryinfo();
		queryinfo.setType(Customer.class);
		queryinfo.setWheresql("openid='"+temp.getOpenid()+"'");
		if(DAO.getTotal(queryinfo)==0){
			temp.setCustomerid(customerid);
			result = DAO.insSingle(temp);
			if(CommonConst.SUCCESS.equals(result)){
//				HttpSession session = request.getSession();
//				session.setAttribute("user", temp); //存
//				session.setAttribute("userid", customerid); //存
//				session.setAttribute("username", temp.getCustomername()); //存
				responsePW(response, "{success:true,code:202,msg:'"+customerid+"'}");
			}
			else
				responsePW(response, result);
		}else{
			responsePW(response, "{success:true,code:400,msg:'该账号已存在'}");
		}
		
	}
}
