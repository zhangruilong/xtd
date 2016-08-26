package com.server.action;

import java.util.ArrayList;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.ZhajiApi;
import com.server.ZhajiCard;
import com.server.ZhajiResult;
import com.server.dao.CuscardDao;
import com.server.pojo.Cuscard;
import com.server.pojo.Customer;
import com.server.poco.CuscardPoco;
import com.server.poco.CustomerPoco;
import com.system.pojo.System_attach;
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
			ZhajiResult token = ZhajiApi.getToken();
			for(int i=0;i<num;i++){
				String newid = CommonUtil.getNewId();
				temp.setCreator(creator);
				temp.setCreatetime(createtime);
				temp.setCuscardid(newid);
				temp.setCuscardno(TypeUtil.intToString(mCuscardno));
				temp.setCuscardcustomer(newid);
				result = DAO.insSingle(temp);
				String cuscardsql = DAO.getInsSingleSql(temp);
				//会员code 闸机用
				int randomnum = new Random().nextInt();
				Customer mCustomer = new Customer();
				mCustomer.setCustomercode(randomnum+"");
				mCustomer.setCustomerid(newid);
				mCustomer.setCustomername("批量发卡的用户");
				mCustomer.setCreator(creator);
				mCustomer.setCreatetime(createtime);
				String customersql = DAO.getInsSingleSql(mCustomer);
				result = DAO.doAll(cuscardsql,customersql);
				//闸机
				if(CommonConst.SUCCESS.equals(result)){
					ZhajiCard card = new ZhajiCard(randomnum, token.getToken(),
							temp.getCuscardno(), temp.getCuscardno(), 
							temp.getCuscardbegin(), temp.getCuscardend());
					ZhajiResult mZhajiResult = ZhajiApi.updUser(card);
					System.out.println("批量发卡成功->闸机接口 code:" + mZhajiResult.getCode() +
							"result:" +mZhajiResult.getResult() +"msg:"+ mZhajiResult.getMessage());
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
		Customer mCustomer = Customercuss.get(0);
		if(DAO.getTotal(CuscardPoco.TABLE, "cuscardno='"+mCuscard.getCuscardno()+"'")>0){
			responsePW(response, "{success:true,code:403,msg:'该卡号已存在'}");
		}else if(DAO.getTotal(CustomerPoco.TABLE, "customerphone='"+mCustomer.getCustomerphone()+"'")>0){
			responsePW(response, "{success:true,code:403,msg:'手机号已存在'}");
		}else{
			//会员code 闸机用
			int randomnum = new Random().nextInt();
			//新增会员
			mCustomer.setCustomercode(randomnum+"");
			mCustomer.setCreatetime(Createtime);
			mCustomer.setCreator(Creator);
			mCustomer.setCustomerid(newid);
			mCustomer.setCustomerstatue("启用");
			String sqlCustomer = DAO.getInsSingleSql(mCustomer);
			//新增会员卡
			mCuscard.setCreator(Creator);
			mCuscard.setCreatetime(Createtime);
			mCuscard.setCuscardid(newid);
			mCuscard.setCuscardcustomer(newid);
			String sqlCuscard = DAO.getInsSingleSql(mCuscard);
			
			result = DAO.doAll(sqlCustomer,sqlCuscard);
			
			//新增照片附件
			if(CommonUtil.isNotNull(mCustomer.getCustomerimage())){
//				Fileinfo fileinfo = FileUtil.upload(request,0,null,null,"upload");
				System_attach mSystem_attach = new System_attach();
				mSystem_attach.setFid(newid+",");
				mSystem_attach.setCode(newid);
				mSystem_attach.setClassify("会员");
				mSystem_attach.setId(newid);
				mSystem_attach.setName(mCustomer.getCustomerimage());
//				mSystem_attach.setAttachsize(String.valueOf(fileinfo.getSize()/1024)+"KB");
//				mSystem_attach.setType(fileinfo.getType());
				mSystem_attach.setCreator(Creator);
				mSystem_attach.setCreatetime(Createtime);
				DAO.insSingle(mSystem_attach);
			}
			if(CommonConst.SUCCESS.equals(result)){
				ZhajiResult token = ZhajiApi.getToken();
				ZhajiCard card = new ZhajiCard(randomnum, token.getToken(),
						mCuscard.getCuscardno(), mCuscard.getCuscardno(), 
						mCuscard.getCuscardbegin(), mCuscard.getCuscardend());
				ZhajiResult mZhajiResult = ZhajiApi.updUser(card);
				System.out.println("发卡成功->闸机接口 code:" + mZhajiResult.getCode() +
						"result:" +mZhajiResult.getResult() +"msg:"+ mZhajiResult.getMessage());
			}
			responsePW(response, result);
		}
	}
}
