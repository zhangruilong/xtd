package com.server.pojo;

import java.sql.Date;
/**
 * 会员换卡记录 实体类
 *@author ZhangRuiLong
 */
public class Cuscardchange
{
   /**
    * ID,主键
    */
   private String cuscardid; 
   /**
    * 会员ID
    */
   private String cuscardcustomer;   
   /**
    * 分类
    */
   private String cuscardtype;   
   /**
    * 卡号
    */
   private String cuscardno;   
   /**
    * 新卡号
    */
   private String cuscardnonew;   
   /**
    * 密码
    */
   private String cuscardpsw;   
   /**
    * 有效期开始
    */
   private String cuscardbegin;   
   /**
    * 有效期结束
    */
   private String cuscardend;   
   /**
    * 卡余额
    */
   private String cuscardmoney;   
   /**
    * 卡总次数
    */
   private int cuscardnums;   
   /**
    * 卡余次
    */
   private int cuscardtimes;   
   /**
    * 卡积分
    */
   private int cuscardint;   
   /**
    * 备注
    */
   private String cuscarddetail;   
   /**
    * 状态
    */
   private String cuscardstatue;   
   /**
    * 创建时间
    */
   private String createtime;   
   /**
    * 创建人
    */
   private String creator;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param cuscardid 实体的Cuscardid属性
	 */
	public void setCuscardid(String cuscardid)
	{
		this.cuscardid = cuscardid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getCuscardid()
	{
		return this.cuscardid;
	}

	/**
	 *设置"会员ID"属性
	 *@param cuscardcustomer 实体的Cuscardcustomer属性
	 */
	public void setCuscardcustomer(String cuscardcustomer)
	{
		this.cuscardcustomer = cuscardcustomer;
	}
	
	/**
	 *获取"会员ID"属性
	 */
	public String getCuscardcustomer()
	{
		return this.cuscardcustomer;
	}	   

	/**
	 *设置"分类"属性
	 *@param cuscardtype 实体的Cuscardtype属性
	 */
	public void setCuscardtype(String cuscardtype)
	{
		this.cuscardtype = cuscardtype;
	}
	
	/**
	 *获取"分类"属性
	 */
	public String getCuscardtype()
	{
		return this.cuscardtype;
	}	   

	/**
	 *设置"卡号"属性
	 *@param cuscardno 实体的Cuscardno属性
	 */
	public void setCuscardno(String cuscardno)
	{
		this.cuscardno = cuscardno;
	}
	
	/**
	 *获取"卡号"属性
	 */
	public String getCuscardno()
	{
		return this.cuscardno;
	}	   

	/**
	 *设置"新卡号"属性
	 *@param cuscardnonew 实体的Cuscardnonew属性
	 */
	public void setCuscardnonew(String cuscardnonew)
	{
		this.cuscardnonew = cuscardnonew;
	}
	
	/**
	 *获取"新卡号"属性
	 */
	public String getCuscardnonew()
	{
		return this.cuscardnonew;
	}	   

	/**
	 *设置"密码"属性
	 *@param cuscardpsw 实体的Cuscardpsw属性
	 */
	public void setCuscardpsw(String cuscardpsw)
	{
		this.cuscardpsw = cuscardpsw;
	}
	
	/**
	 *获取"密码"属性
	 */
	public String getCuscardpsw()
	{
		return this.cuscardpsw;
	}	   

	/**
	 *设置"有效期开始"属性
	 *@param cuscardbegin 实体的Cuscardbegin属性
	 */
	public void setCuscardbegin(String cuscardbegin)
	{
		this.cuscardbegin = cuscardbegin;
	}
	
	/**
	 *获取"有效期开始"属性
	 */
	public String getCuscardbegin()
	{
		return this.cuscardbegin;
	}	   

	/**
	 *设置"有效期结束"属性
	 *@param cuscardend 实体的Cuscardend属性
	 */
	public void setCuscardend(String cuscardend)
	{
		this.cuscardend = cuscardend;
	}
	
	/**
	 *获取"有效期结束"属性
	 */
	public String getCuscardend()
	{
		return this.cuscardend;
	}	   

	/**
	 *设置"卡余额"属性
	 *@param cuscardmoney 实体的Cuscardmoney属性
	 */
	public void setCuscardmoney(String cuscardmoney)
	{
		this.cuscardmoney = cuscardmoney;
	}
	
	/**
	 *获取"卡余额"属性
	 */
	public String getCuscardmoney()
	{
		return this.cuscardmoney;
	}	   

	/**
	 *设置"卡总次数"属性
	 *@param cuscardnums 实体的Cuscardnums属性
	 */
	public void setCuscardnums(int cuscardnums)
	{
		this.cuscardnums = cuscardnums;
	}
	
	/**
	 *获取"卡总次数"属性
	 */
	public int getCuscardnums()
	{
		return this.cuscardnums;
	}	   

	/**
	 *设置"卡余次"属性
	 *@param cuscardtimes 实体的Cuscardtimes属性
	 */
	public void setCuscardtimes(int cuscardtimes)
	{
		this.cuscardtimes = cuscardtimes;
	}
	
	/**
	 *获取"卡余次"属性
	 */
	public int getCuscardtimes()
	{
		return this.cuscardtimes;
	}	   

	/**
	 *设置"卡积分"属性
	 *@param cuscardint 实体的Cuscardint属性
	 */
	public void setCuscardint(int cuscardint)
	{
		this.cuscardint = cuscardint;
	}
	
	/**
	 *获取"卡积分"属性
	 */
	public int getCuscardint()
	{
		return this.cuscardint;
	}	   

	/**
	 *设置"备注"属性
	 *@param cuscarddetail 实体的Cuscarddetail属性
	 */
	public void setCuscarddetail(String cuscarddetail)
	{
		this.cuscarddetail = cuscarddetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getCuscarddetail()
	{
		return this.cuscarddetail;
	}	   

	/**
	 *设置"状态"属性
	 *@param cuscardstatue 实体的Cuscardstatue属性
	 */
	public void setCuscardstatue(String cuscardstatue)
	{
		this.cuscardstatue = cuscardstatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getCuscardstatue()
	{
		return this.cuscardstatue;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param createtime 实体的Createtime属性
	 */
	public void setCreatetime(String createtime)
	{
		this.createtime = createtime;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getCreatetime()
	{
		return this.createtime;
	}	   

	/**
	 *设置"创建人"属性
	 *@param creator 实体的Creator属性
	 */
	public void setCreator(String creator)
	{
		this.creator = creator;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getCreator()
	{
		return this.creator;
	}	   
	public Cuscardchange() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Cuscardchange(
		String cuscardid
	 	,String cuscardcustomer
	 	,String cuscardtype
	 	,String cuscardno
	 	,String cuscardnonew
	 	,String cuscardpsw
	 	,String cuscardbegin
	 	,String cuscardend
	 	,String cuscardmoney
	 	,int cuscardnums
	 	,int cuscardtimes
	 	,int cuscardint
	 	,String cuscarddetail
	 	,String cuscardstatue
	 	,String createtime
	 	,String creator
		 ){
		super();
		this.cuscardid = cuscardid;
	 	this.cuscardcustomer = cuscardcustomer;
	 	this.cuscardtype = cuscardtype;
	 	this.cuscardno = cuscardno;
	 	this.cuscardnonew = cuscardnonew;
	 	this.cuscardpsw = cuscardpsw;
	 	this.cuscardbegin = cuscardbegin;
	 	this.cuscardend = cuscardend;
	 	this.cuscardmoney = cuscardmoney;
	 	this.cuscardnums = cuscardnums;
	 	this.cuscardtimes = cuscardtimes;
	 	this.cuscardint = cuscardint;
	 	this.cuscarddetail = cuscarddetail;
	 	this.cuscardstatue = cuscardstatue;
	 	this.createtime = createtime;
	 	this.creator = creator;
	}
}

