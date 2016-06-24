package com.server.action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.dao.NotesDao;
import com.server.pojo.Cuscard;
import com.server.pojo.Notes;
import com.server.poco.CuscardPoco;
import com.server.poco.NotesPoco;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseAction;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.DateUtils;
import com.system.tools.util.FileUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * 消费记录 逻辑层
 *@author ZhangRuiLong
 */
public class NotesAction extends BaseAction {
	public String result = CommonConst.FAILURE;
	public ArrayList<Notes> cuss = null;
	public NotesDao DAO = new NotesDao();
	public java.lang.reflect.Type TYPE = new com.google.gson.reflect.TypeToken<ArrayList<Notes>>() {}.getType();
	
	//将json转换成cuss
	public void json2cuss(HttpServletRequest request){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
	}
	//新增
	public void insAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Notes temp:cuss){
			temp.setNotesid(CommonUtil.getNewId());
			result = DAO.insSingle(temp);
		}
		responsePW(response, result);
	}
	//删除
	public void delAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Notes temp:cuss){
			result = DAO.delSingle(temp,NotesPoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//修改
	public void updAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		result = DAO.updSingle(cuss.get(0),NotesPoco.KEYCOLUMN);
		responsePW(response, result);
	}
	//导出
	public void expAll(HttpServletRequest request, HttpServletResponse response) throws Exception{
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Notes.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(NotesPoco.ORDER);
		cuss = (ArrayList<Notes>) DAO.selAll(queryinfo);
		FileUtil.expExcel(response,cuss,NotesPoco.CHINESENAME,NotesPoco.KEYCOLUMN,NotesPoco.NAME);
	}
	//导入
	public void impAll(HttpServletRequest request, HttpServletResponse response){
		Fileinfo fileinfo = FileUtil.upload(request,0,null,NotesPoco.NAME,"impAll");
		String json = FileUtil.impExcel(fileinfo.getPath(),NotesPoco.FIELDNAME); 
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Notes temp:cuss){
			temp.setNotesid(CommonUtil.getNewId());
			result = DAO.insSingle(temp);
		}
		responsePW(response, result);
	}
	//查询所有
	public void selAll(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Notes.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(NotesPoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(0, DAO.selAll(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//分页查询
	public void selQuery(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Notes.class);
		queryinfo.setQuery(DAO.getQuerysql(queryinfo.getQuery()));
		queryinfo.setOrder(NotesPoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(DAO.getTotal(queryinfo), DAO.selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//进场刷卡
	public void ruchang(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		Notes temp = cuss.get(0);
		
		Queryinfo queryinfo = getQueryinfo();
		queryinfo.setType(Cuscard.class);
		queryinfo.setWheresql("cuscardno='"+temp.getNotescard()+"'");
		ArrayList<Cuscard> cussCuscard = (ArrayList<Cuscard>) DAO.selAll(queryinfo);
		
		if(cussCuscard.size()==0){
			result = "{success:true,code:400,msg:'该卡号不存在!'}";
		}else if(DAO.getTotal(NotesPoco.TABLE, "notescard='"+temp.getNotescard()+"' and notesend is null")!=0){
			result = "{success:true,code:400,msg:'已经进场成功,不能重复进场!'}";
		}else{
			temp.setNotesid(CommonUtil.getNewId());
			temp.setNotesbegin(DateUtils.getDateTime());
			//判断是否为次卡
			Cuscard mCuscard = cussCuscard.get(0);
			if("次卡".equals(mCuscard.getCuscardtype())){
				if(mCuscard.getCuscardtimes()==0){
					result = "{success:true,code:400,msg:'该卡的剩余次数为0，不能进场!'}";
				}else{
					String sqlNotes = DAO.getInsSingleSql(temp);
					int Cuscardtimes = mCuscard.getCuscardtimes()-1;
					String sqlCuscard = "update Cuscard set Cuscardtimes="
					+Cuscardtimes+" where cuscardid='"+mCuscard.getCuscardid()+"'";
					result = DAO.doAll(sqlNotes,sqlCuscard);
				}
			}else{
				result = DAO.insSingle(temp);
			}
			
		}
		responsePW(response, result);
	}
	//归还钥匙
	public void guihuan(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		Notes temp = cuss.get(0);
		if(DAO.getTotal(CuscardPoco.TABLE, "cuscardno='"+temp.getNotescard()+"'")==0){
			result = "{success:true,code:400,msg:'该卡号不存在!'}";
		}else if(DAO.getTotal(NotesPoco.TABLE, "notescard='"+temp.getNotescard()+"' and notesend is null")==0){
			result = "{success:true,code:400,msg:'还未进场刷卡,不能归还钥匙!'}";
		}else{
			temp.setNotesend(DateUtils.getDateTime());
			String[] KEYCOLUMN = {"notescard"};
			result = DAO.updSingle(temp,KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//闸机接口
	public void checkcardin(HttpServletRequest request, HttpServletResponse response){
		String cardno = request.getParameter("cardno");
		System.out.println("闸机cardno : " + cardno);
		
		Queryinfo queryinfo = getQueryinfo();
		queryinfo.setType(Cuscard.class);
		queryinfo.setWheresql("cuscardno='"+cardno+"'");
		ArrayList<Cuscard> cussCuscard = (ArrayList<Cuscard>) DAO.selAll(queryinfo);
		
		if(cussCuscard.size()==0){
			result = "{success:false,code:400,msg:'该卡号不存在!'}";
		}else if(DAO.getTotal(NotesPoco.TABLE, "notescard='"+cardno+"' and notesend is null")!=0){
			result = "{success:false,code:500,msg:'已经进场成功,不能重复进场!'}";
		}else{
			Notes temp = new Notes();
			temp.setNotescard(cardno);
			temp.setNotesid(CommonUtil.getNewId());
			temp.setNotesbegin(DateUtils.getDateTime());
			//判断是否为次卡
			Cuscard mCuscard = cussCuscard.get(0);
			if("次卡".equals(mCuscard.getCuscardtype())){
				if(mCuscard.getCuscardtimes()==0){
					result = "{success:false,code:401,msg:'该卡的剩余次数为0，不能进场!'}";
				}else{
					String sqlNotes = DAO.getInsSingleSql(temp);
					int Cuscardtimes = mCuscard.getCuscardtimes()-1;
					String sqlCuscard = "update Cuscard set Cuscardtimes="
					+Cuscardtimes+" where cuscardid='"+mCuscard.getCuscardid()+"'";
					result = DAO.doAll(sqlNotes,sqlCuscard);
				}
			}else{
				result = DAO.insSingle(temp);
			}
			
		}
		responsePW(response, result);
	}
	//闸机接口
	public void checkcardout(HttpServletRequest request, HttpServletResponse response){
		String cardno = request.getParameter("cardno");
		System.out.println("闸机cardno : " + cardno);
		
		if(DAO.getTotal(CuscardPoco.TABLE, "cuscardno='"+cardno+"'")==0){
			result = "{success:false,code:400,msg:'该卡号不存在!'}";
		}else if(DAO.getTotal(NotesPoco.TABLE, "notescard='"+cardno+"' and notesend is null")==0){
			result = "{success:false,code:401,msg:'还未进场刷卡!'}";
		}else{
			Notes temp = new Notes();
			temp.setNotescard(cardno);
			temp.setNotesend(DateUtils.getDateTime());
			String[] KEYCOLUMN = {"notescard"};
			result = DAO.updSingle(temp,KEYCOLUMN);
		}
		responsePW(response, result);
	}
}
