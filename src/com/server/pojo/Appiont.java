package com.server.pojo;

import java.sql.Date;
/**
 * 我的预约 实体类
 *@author ZhangRuiLong
 */
public class Appiont
{
   /**
    * ID,主键
    */
   private String appointid; 
   /**
    * 会员ID
    */
   private String appointcustomer;   
   /**
    * 会员卡ID
    */
   private String appointcard;   
   /**
    * 场地ID
    */
   private String appointplace;   
   /**
    * 课程ID
    */
   private String appointcourse;   
   /**
    * 项目
    */
   private String appointproject;   
   /**
    * 开始时间
    */
   private String appointbegin;   
   /**
    * 结束时间
    */
   private String appointend;   
   /**
    * 备注
    */
   private String appointdetail;   
   /**
    * 状态
    */
   private String appointstatue;   
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
	 *@param appointid 实体的Appointid属性
	 */
	public void setAppointid(String appointid)
	{
		this.appointid = appointid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getAppointid()
	{
		return this.appointid;
	}

	/**
	 *设置"会员ID"属性
	 *@param appointcustomer 实体的Appointcustomer属性
	 */
	public void setAppointcustomer(String appointcustomer)
	{
		this.appointcustomer = appointcustomer;
	}
	
	/**
	 *获取"会员ID"属性
	 */
	public String getAppointcustomer()
	{
		return this.appointcustomer;
	}	   

	/**
	 *设置"会员卡ID"属性
	 *@param appointcard 实体的Appointcard属性
	 */
	public void setAppointcard(String appointcard)
	{
		this.appointcard = appointcard;
	}
	
	/**
	 *获取"会员卡ID"属性
	 */
	public String getAppointcard()
	{
		return this.appointcard;
	}	   

	/**
	 *设置"场地ID"属性
	 *@param appointplace 实体的Appointplace属性
	 */
	public void setAppointplace(String appointplace)
	{
		this.appointplace = appointplace;
	}
	
	/**
	 *获取"场地ID"属性
	 */
	public String getAppointplace()
	{
		return this.appointplace;
	}	   

	/**
	 *设置"课程ID"属性
	 *@param appointcourse 实体的Appointcourse属性
	 */
	public void setAppointcourse(String appointcourse)
	{
		this.appointcourse = appointcourse;
	}
	
	/**
	 *获取"课程ID"属性
	 */
	public String getAppointcourse()
	{
		return this.appointcourse;
	}	   

	/**
	 *设置"项目"属性
	 *@param appointproject 实体的Appointproject属性
	 */
	public void setAppointproject(String appointproject)
	{
		this.appointproject = appointproject;
	}
	
	/**
	 *获取"项目"属性
	 */
	public String getAppointproject()
	{
		return this.appointproject;
	}	   

	/**
	 *设置"开始时间"属性
	 *@param appointbegin 实体的Appointbegin属性
	 */
	public void setAppointbegin(String appointbegin)
	{
		this.appointbegin = appointbegin;
	}
	
	/**
	 *获取"开始时间"属性
	 */
	public String getAppointbegin()
	{
		return this.appointbegin;
	}	   

	/**
	 *设置"结束时间"属性
	 *@param appointend 实体的Appointend属性
	 */
	public void setAppointend(String appointend)
	{
		this.appointend = appointend;
	}
	
	/**
	 *获取"结束时间"属性
	 */
	public String getAppointend()
	{
		return this.appointend;
	}	   

	/**
	 *设置"备注"属性
	 *@param appointdetail 实体的Appointdetail属性
	 */
	public void setAppointdetail(String appointdetail)
	{
		this.appointdetail = appointdetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getAppointdetail()
	{
		return this.appointdetail;
	}	   

	/**
	 *设置"状态"属性
	 *@param appointstatue 实体的Appointstatue属性
	 */
	public void setAppointstatue(String appointstatue)
	{
		this.appointstatue = appointstatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getAppointstatue()
	{
		return this.appointstatue;
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
	public Appiont() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Appiont(
		String appointid
	 	,String appointcustomer
	 	,String appointcard
	 	,String appointplace
	 	,String appointcourse
	 	,String appointproject
	 	,String appointbegin
	 	,String appointend
	 	,String appointdetail
	 	,String appointstatue
	 	,String createtime
	 	,String creator
		 ){
		super();
		this.appointid = appointid;
	 	this.appointcustomer = appointcustomer;
	 	this.appointcard = appointcard;
	 	this.appointplace = appointplace;
	 	this.appointcourse = appointcourse;
	 	this.appointproject = appointproject;
	 	this.appointbegin = appointbegin;
	 	this.appointend = appointend;
	 	this.appointdetail = appointdetail;
	 	this.appointstatue = appointstatue;
	 	this.createtime = createtime;
	 	this.creator = creator;
	}
}

