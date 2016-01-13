package com.server.pojo;

import java.sql.Date;
/**
 * 我的私教课 实体类
 *@author ZhangRuiLong
 */
public class Mycourseview
{
   /**
    * mycourseid,主键
    */
   private String mycourseid; 
   /**
    * mycoursecoach
    */
   private String mycoursecoach;   
   /**
    * mycoursename
    */
   private String mycoursename;   
   /**
    * mycourseroject
    */
   private String mycourseroject;   
   /**
    * mycoursenum
    */
   private String mycoursenum;   
   /**
    * mycoursemoney
    */
   private String mycoursemoney;   
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
	 *设置主键"mycourseid"属性
	 *@param mycourseid 实体的Mycourseid属性
	 */
	public void setMycourseid(String mycourseid)
	{
		this.mycourseid = mycourseid;
	}
	
	/**
	 *获取主键"mycourseid"属性
	 */
	public String getMycourseid()
	{
		return this.mycourseid;
	}

	/**
	 *设置"mycoursecoach"属性
	 *@param mycoursecoach 实体的Mycoursecoach属性
	 */
	public void setMycoursecoach(String mycoursecoach)
	{
		this.mycoursecoach = mycoursecoach;
	}
	
	/**
	 *获取"mycoursecoach"属性
	 */
	public String getMycoursecoach()
	{
		return this.mycoursecoach;
	}	   

	/**
	 *设置"mycoursename"属性
	 *@param mycoursename 实体的Mycoursename属性
	 */
	public void setMycoursename(String mycoursename)
	{
		this.mycoursename = mycoursename;
	}
	
	/**
	 *获取"mycoursename"属性
	 */
	public String getMycoursename()
	{
		return this.mycoursename;
	}	   

	/**
	 *设置"mycourseroject"属性
	 *@param mycourseroject 实体的Mycourseroject属性
	 */
	public void setMycourseroject(String mycourseroject)
	{
		this.mycourseroject = mycourseroject;
	}
	
	/**
	 *获取"mycourseroject"属性
	 */
	public String getMycourseroject()
	{
		return this.mycourseroject;
	}	   

	/**
	 *设置"mycoursenum"属性
	 *@param mycoursenum 实体的Mycoursenum属性
	 */
	public void setMycoursenum(String mycoursenum)
	{
		this.mycoursenum = mycoursenum;
	}
	
	/**
	 *获取"mycoursenum"属性
	 */
	public String getMycoursenum()
	{
		return this.mycoursenum;
	}	   

	/**
	 *设置"mycoursemoney"属性
	 *@param mycoursemoney 实体的Mycoursemoney属性
	 */
	public void setMycoursemoney(String mycoursemoney)
	{
		this.mycoursemoney = mycoursemoney;
	}
	
	/**
	 *获取"mycoursemoney"属性
	 */
	public String getMycoursemoney()
	{
		return this.mycoursemoney;
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
	public Mycourseview() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Mycourseview(
		String mycourseid
	 	,String mycoursecoach
	 	,String mycoursename
	 	,String mycourseroject
	 	,String mycoursenum
	 	,String mycoursemoney
	 	,String createtime
	 	,String creator
	 	,String updtime
	 	,String updor
	 	,String coachcode
	 	,String coachname
	 	,String coachphone
		 ){
		super();
		this.mycourseid = mycourseid;
	 	this.mycoursecoach = mycoursecoach;
	 	this.mycoursename = mycoursename;
	 	this.mycourseroject = mycourseroject;
	 	this.mycoursenum = mycoursenum;
	 	this.mycoursemoney = mycoursemoney;
	 	this.createtime = createtime;
	 	this.creator = creator;
	 	this.updtime = updtime;
	 	this.updor = updor;
	 	this.coachcode = coachcode;
	 	this.coachname = coachname;
	 	this.coachphone = coachphone;
	}
}

