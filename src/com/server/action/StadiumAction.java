package com.server.action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.dao.StadiumDao;
import com.server.pojo.Stadium;
import com.server.pojo.Stadiums;
import com.server.poco.StadiumPoco;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseAction;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * 场馆 逻辑层
 *@author ZhangRuiLong
 */
public class StadiumAction extends BaseAction {
	public String result = CommonConst.FAILURE;
	public ArrayList<Stadium> cuss = null;
	public StadiumDao DAO = new StadiumDao();
	public java.lang.reflect.Type TYPE = new com.google.gson.reflect.TypeToken<ArrayList<Stadium>>() {}.getType();
	
	//将json转换成cuss
	public void json2cuss(HttpServletRequest request){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
	}
	//新增
	public void insAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Stadium temp:cuss){
			temp.setStadiumid(CommonUtil.getNewId());
			result = DAO.insSingle(temp);
		}
		responsePW(response, result);
	}
	//删除
	public void delAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Stadium temp:cuss){
			result = DAO.delSingle(temp,StadiumPoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//修改
	public void updAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		result = DAO.updSingle(cuss.get(0),StadiumPoco.KEYCOLUMN);
		responsePW(response, result);
	}
	//导出
	public void expAll(HttpServletRequest request, HttpServletResponse response) throws Exception{
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Stadium.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(StadiumPoco.ORDER);
		cuss = (ArrayList<Stadium>) DAO.selAll(queryinfo);
		FileUtil.expExcel(response,cuss,StadiumPoco.CHINESENAME,StadiumPoco.KEYCOLUMN,StadiumPoco.NAME);
	}
	//导入
	public void impAll(HttpServletRequest request, HttpServletResponse response){
		Fileinfo fileinfo = FileUtil.upload(request,0,null,StadiumPoco.NAME,"impAll");
		String json = FileUtil.impExcel(fileinfo.getPath(),StadiumPoco.FIELDNAME); 
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Stadium temp:cuss){
			temp.setStadiumid(CommonUtil.getNewId());
			result = DAO.insSingle(temp);
		}
		responsePW(response, result);
	}
	//查询所有
	public void selAll(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Stadium.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(StadiumPoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(0, DAO.selAll(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//分页查询
	public void selQuery(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Stadium.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(StadiumPoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(DAO.getTotal(queryinfo), DAO.selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//查询所有
	public void selStadiums(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Stadium.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(StadiumPoco.ORDER);
		cuss = (ArrayList<Stadium>) DAO.selAll(queryinfo);
		ArrayList<Stadiums> sStadiums = new ArrayList<Stadiums>();
		for(Stadium mStadium:cuss){
			double dis = distance(Double.parseDouble(mStadium.getStadiumx()), Double.parseDouble(mStadium.getStadiumy()), 1, 1);
			String disstr;
			if(dis<1000){
				disstr = "<1km";
			}else{
				disstr = ">"+Math.round(dis/1000)+"km";
			}
			Stadiums mStadiums = new Stadiums(mStadium.getStadiumid(), mStadium.getStadiumcode(), 
					mStadium.getStadiumname(), mStadium.getStadiumaddress(), 
					mStadium.getStadiumdetail(), mStadium.getStadiumstatue(), 
					mStadium.getStadiumx(), mStadium.getStadiumy(), disstr);
			sStadiums.add(mStadiums);
		}
		Pageinfo pageinfo = new Pageinfo(0, sStadiums);
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	/**
	 * 计算地球上任意两点(经纬度)距离
	 * 
	 * @param long1
	 *            第一点经度
	 * @param lat1
	 *            第一点纬度
	 * @param long2
	 *            第二点经度
	 * @param lat2
	 *            第二点纬度
	 * @return 返回距离 单位：米
	 */
	public double distance(double long1, double lat1, double long2,
			double lat2) {
		double a, b, R;
		R = 6378137; // 地球半径
		lat1 = lat1 * Math.PI / 180.0;
		lat2 = lat2 * Math.PI / 180.0;
		a = lat1 - lat2;
		b = (long1 - long2) * Math.PI / 180.0;
		double d;
		double sa2, sb2;
		sa2 = Math.sin(a / 2.0);
		sb2 = Math.sin(b / 2.0);
		d = 2
				* R
				* Math.asin(Math.sqrt(sa2 * sa2 + Math.cos(lat1)
						* Math.cos(lat2) * sb2 * sb2));
		return d;
	}
}
