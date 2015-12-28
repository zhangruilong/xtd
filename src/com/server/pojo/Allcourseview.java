package com.server.pojo;

import java.sql.Date;
/**
 * 私教课 实体类
 *@author ZhangRuiLong
 */
public class Allcourseview
{
   /**
    * allcourseid,主键
    */
   private String allcourseid; 
   /**
    * allcoursecoach
    */
   private String allcoursecoach;   
   /**
    * allcourseproject
    */
   private String allcourseproject;   
   /**
    * allcoursenum
    */
   private String allcoursenum;   
   /**
    * allcoursemoney
    */
   private String allcoursemoney;   
   /**
    * createtime
    */
   private String createtime;   
   /**
    * creator
    */
   private String creator;   
   /**
    * updtime
    */
   private String updtime;   
   /**
    * updor
    */
   private String updor;   
   /**
    * coachcode
    */
   private String coachcode;   
   /**
    * coachname
    */
   private String coachname;   
   /**
    * coachphone
    */
   private String coachphone;   
    //属性方法	    
     /**
	 *设置主键"allcourseid"属性
	 *@param allcourseid 实体的Allcourseid属性
	 */
	public void setAllcourseid(String allcourseid)
	{
		this.allcourseid = allcourseid;
	}
	
	/**
	 *获取主键"allcourseid"属性
	 */
	public String getAllcourseid()
	{
		return this.allcourseid;
	}

	/**
	 *设置"allcoursecoach"属性
	 *@param allcoursecoach 实体的Allcoursecoach属性
	 */
	public void setAllcoursecoach(String allcoursecoach)
	{
		this.allcoursecoach = allcoursecoach;
	}
	
	/**
	 *获取"allcoursecoach"属性
	 */
	public String getAllcoursecoach()
	{
		return this.allcoursecoach;
	}	   

	/**
	 *设置"allcourseproject"属性
	 *@param allcourseproject 实体的Allcourseproject属性
	 */
	public void setAllcourseproject(String allcourseproject)
	{
		this.allcourseproject = allcourseproject;
	}
	
	/**
	 *获取"allcourseproject"属性
	 */
	public String getAllcourseproject()
	{
		return this.allcourseproject;
	}	   

	/**
	 *设置"allcoursenum"属性
	 *@param allcoursenum 实体的Allcoursenum属性
	 */
	public void setAllcoursenum(String allcoursenum)
	{
		this.allcoursenum = allcoursenum;
	}
	
	/**
	 *获取"allcoursenum"属性
	 */
	public String getAllcoursenum()
	{
		return this.allcoursenum;
	}	   

	/**
	 *设置"allcoursemoney"属性
	 *@param allcoursemoney 实体的Allcoursemoney属性
	 */
	public void setAllcoursemoney(String allcoursemoney)
	{
		this.allcoursemoney = allcoursemoney;
	}
	
	/**
	 *获取"allcoursemoney"属性
	 */
	public String getAllcoursemoney()
	{
		return this.allcoursemoney;
	}	   

	/**
	 *设置"createtime"属性
	 *@param createtime 实体的Createtime属性
	 */
	public void setCreatetime(String createtime)
	{
		this.createtime = createtime;
	}
	
	/**
	 *获取"createtime"属性
	 */
	public String getCreatetime()
	{
		return this.createtime;
	}	   

	/**
	 *设置"creator"属性
	 *@param creator 实体的Creator属性
	 */
	public void setCreator(String creator)
	{
		this.creator = creator;
	}
	
	/**
	 *获取"creator"属性
	 */
	public String getCreator()
	{
		return this.creator;
	}	   

	/**
	 *设置"updtime"属性
	 *@param updtime 实体的Updtime属性
	 */
	public void setUpdtime(String updtime)
	{
		this.updtime = updtime;
	}
	
	/**
	 *获取"updtime"属性
	 */
	public String getUpdtime()
	{
		return this.updtime;
	}	   

	/**
	 *设置"updor"属性
	 *@param updor 实体的Updor属性
	 */
	public void setUpdor(String updor)
	{
		this.updor = updor;
	}
	
	/**
	 *获取"updor"属性
	 */
	public String getUpdor()
	{
		return this.updor;
	}	   

	/**
	 *设置"coachcode"属性
	 *@param coachcode 实体的Coachcode属性
	 */
	public void setCoachcode(String coachcode)
	{
		this.coachcode = coachcode;
	}
	
	/**
	 *获取"coachcode"属性
	 */
	public String getCoachcode()
	{
		return this.coachcode;
	}	   

	/**
	 *设置"coachname"属性
	 *@param coachname 实体的Coachname属性
	 */
	public void setCoachname(String coachname)
	{
		this.coachname = coachname;
	}
	
	/**
	 *获取"coachname"属性
	 */
	public String getCoachname()
	{
		return this.coachname;
	}	   

	/**
	 *设置"coachphone"属性
	 *@param coachphone 实体的Coachphone属性
	 */
	public void setCoachphone(String coachphone)
	{
		this.coachphone = coachphone;
	}
	
	/**
	 *获取"coachphone"属性
	 */
	public String getCoachphone()
	{
		return this.coachphone;
	}	   
	public Allcourseview() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Allcourseview(
		String allcourseid
	 	,String allcoursecoach
	 	,String allcourseproject
	 	,String allcoursenum
	 	,String allcoursemoney
	 	,String createtime
	 	,String creator
	 	,String updtime
	 	,String updor
	 	,String coachcode
	 	,String coachname
	 	,String coachphone
		 ){
		super();
		this.allcourseid = allcourseid;
	 	this.allcoursecoach = allcoursecoach;
	 	this.allcourseproject = allcourseproject;
	 	this.allcoursenum = allcoursenum;
	 	this.allcoursemoney = allcoursemoney;
	 	this.createtime = createtime;
	 	this.creator = creator;
	 	this.updtime = updtime;
	 	this.updor = updor;
	 	this.coachcode = coachcode;
	 	this.coachname = coachname;
	 	this.coachphone = coachphone;
	}
}

