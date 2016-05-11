package com.server.action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.dao.CuscardDao;
import com.server.pojo.Cuscard;
import com.server.pojo.Customer;
import com.server.poco.CuscardPoco;
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
 * 会员卡 逻辑层
 *@author ZhangRuiLong
 */
public class CuscardAction extends BaseAction {
	public String result = CommonConst.FAILURE;
	public ArrayList<Cuscard> cuss = null;
	public CuscardDao DAO = new CuscardDao();
	public java.lang.reflect.Type TYPE = new com.google.gson.reflect.TypeToken<ArrayList<Cuscard>>() {}.getType();
	
	//将json转换成cuss
	public void json2cuss(HttpServletRequest request){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
	}
	//新增
	public void insAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Cuscard temp:cuss){
			temp.setCreatetime(DateUtils.getDateTime());
			temp.setCuscardid(CommonUtil.getNewId());
			result = DAO.insSingle(temp);
		}
		responsePW(response, result);
	}
	//删除
	public void delAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Cuscard temp:cuss){
			result = DAO.delSingle(temp,CuscardPoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//修改
	public void updAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		result = DAO.updSingle(cuss.get(0),CuscardPoco.KEYCOLUMN);
		responsePW(response, result);
	}
	//导出
	public void expAll(HttpServletRequest request, HttpServletResponse response) throws Exception{
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Cuscard.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CuscardPoco.ORDER);
		cuss = (ArrayList<Cuscard>) DAO.selAll(queryinfo);
		FileUtil.expExcel(response,cuss,CuscardPoco.CHINESENAME,CuscardPoco.KEYCOLUMN,CuscardPoco.NAME);
	}
	//导入
	public void impAll(HttpServletRequest request, HttpServletResponse response){
		Fileinfo fileinfo = FileUtil.upload(request,0,null,CuscardPoco.NAME,"impAll");
		String json = FileUtil.impExcel(fileinfo.getPath(),CuscardPoco.FIELDNAME); 
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Cuscard temp:cuss){
			temp.setCuscardid(CommonUtil.getNewId());
			result = DAO.insSingle(temp);
		}
		responsePW(response, result);
	}
	//查询所有
	public void selAll(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Cuscard.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CuscardPoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(0, DAO.selAll(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//分页查询
	public void selQuery(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Cuscard.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(CuscardPoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(DAO.getTotal(queryinfo), DAO.selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//批量发卡
	public void addAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Cuscard temp:cuss){
			int num = TypeUtil.stringToInt(temp.getCuscardid());
			int mCuscardno = TypeUtil.stringToInt(temp.getCuscardno()) ;
			String creator = getCurrentUsername(request);
			String createtime = DateUtils.getDateTime();
			for(int i=0;i<num;i++){
				String newid = CommonUtil.getNewId();
				temp.setCreator(creator);
				temp.setCreatetime(createtime);
				temp.setCuscardid(newid);
				temp.setCuscardno(TypeUtil.intToString(mCuscardno));
				temp.setCuscardcustomer(newid);
				result = DAO.insSingle(temp);
				if(CommonConst.SUCCESS.equals(result)){
					Customer mCustomer = new Customer();
					mCustomer.setCustomercode(TypeUtil.intToString(mCuscardno));
					mCustomer.setCustomerid(newid);
					mCustomer.setCustomername("批量发卡的用户");
					mCustomer.setCreator(creator);
					mCustomer.setCreatetime(createtime);
					result = DAO.insSingle(mCustomer);
				}
				mCuscardno++;
			}
		}
		responsePW(response, result);
	}
	
	public void addCuscardcustomer(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		String json = request.getParameter("json");
		String newid = CommonUtil.getNewId();
		String Createtime = DateUtils.getDateTime();
		String Creator = getCurrentUsername(request);
		java.lang.reflect.Type CustomerTYPE = new com.google.gson.reflect.TypeToken<ArrayList<Customer>>() {}.getType();
		ArrayList<Customer> Customercuss = new ArrayList<Customer>();
		if(CommonUtil.isNotEmpty(json)){
			Customercuss = CommonConst.GSON.fromJson(json, CustomerTYPE);
			cuss = CommonConst.GSON.fromJson(json, TYPE);
		}
		Cuscard mCuscard = cuss.get(0);
		if(DAO.getTotal(CuscardPoco.TABLE, "cuscardno='"+mCuscard.getCuscardno()+"'")>0){
			responsePW(response, CommonConst.SAMELOGINNAME);
		}else{
			Customer mCustomer = Customercuss.get(0);
			mCustomer.setCreatetime(Createtime);
			mCustomer.setCreator(Creator);
			mCustomer.setCustomerid(newid);
			result = DAO.insSingle(mCustomer);
			if(CommonConst.SUCCESS.equals(result)){
				mCuscard.setCreator(Creator);
				mCuscard.setCreatetime(Createtime);
				mCuscard.setCuscardid(newid);
				mCuscard.setCuscardcustomer(newid);
				result = DAO.insSingle(mCuscard);
			}
			responsePW(response, result);
		}
	}
}
