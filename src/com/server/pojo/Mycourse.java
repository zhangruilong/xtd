package com.server.pojo;

import java.sql.Date;
/**
 * 我的私教课 实体类
 *@author ZhangRuiLong
 */
public class Mycourse
{
   /**
    * ID,主键
    */
   private String mycourseid; 
   /**
    * 教练ID
    */
   private String mycoursecoach;   
   private String mycoursecustomer; 
   /**
    * 课程名
    */
   private String mycoursename;   
   /**
    * 项目
    */
   private String mycourseproject;   
   /**
    * 课时
    */
   private String mycoursenum;   
   /**
    * 费用
    */
   private String mycoursemoney;   
   /**
    * 创建时间
    */
   private String createtime;   
   /**
    * 创建人
    */
   private String creator;   
   /**
    * 更新时间
    */
   private String updtime;   
   /**
    * 更新人
    */
   private String updor;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param mycourseid 实体的Mycourseid属性
	 */
	public void setMycourseid(String mycourseid)
	{
		this.mycourseid = mycourseid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getMycourseid()
	{
		return this.mycourseid;
	}

	/**
	 *设置"教练ID"属性
	 *@param mycoursecoach 实体的Mycoursecoach属性
	 */
	public void setMycoursecoach(String mycoursecoach)
	{
		this.mycoursecoach = mycoursecoach;
	}
	
	/**
	 *获取"教练ID"属性
	 */
	public String getMycoursecoach()
	{
		return this.mycoursecoach;
	}	   

	/**
	 *设置"课程名"属性
	 *@param mycoursename 实体的Mycoursename属性
	 */
	public void setMycoursename(String mycoursename)
	{
		this.mycoursename = mycoursename;
	}
	
	/**
	 *获取"课程名"属性
	 */
	public String getMycoursename()
	{
		return this.mycoursename;
	}	   

	/**
	 *设置"项目"属性
	 *@param mycourseproject 实体的Mycourseproject属性
	 */
	public void setMycourseproject(String mycourseproject)
	{
		this.mycourseproject = mycourseproject;
	}
	
	/**
	 *获取"项目"属性
	 */
	public String getMycourseproject()
	{
		return this.mycourseproject;
	}	   

	/**
	 *设置"课时"属性
	 *@param mycoursenum 实体的Mycoursenum属性
	 */
	public void setMycoursenum(String mycoursenum)
	{
		this.mycoursenum = mycoursenum;
	}
	
	/**
	 *获取"课时"属性
	 */
	public String getMycoursenum()
	{
		return this.mycoursenum;
	}	   

	/**
	 *设置"费用"属性
	 *@param mycoursemoney 实体的Mycoursemoney属性
	 */
	public void setMycoursemoney(String mycoursemoney)
	{
		this.mycoursemoney = mycoursemoney;
	}
	
	/**
	 *获取"费用"属性
	 */
	public String getMycoursemoney()
	{
		return this.mycoursemoney;
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

	/**
	 *设置"更新时间"属性
	 *@param updtime 实体的Updtime属性
	 */
	public void setUpdtime(String updtime)
	{
		this.updtime = updtime;
	}
	
	/**
	 *获取"更新时间"属性
	 */
	public String getUpdtime()
	{
		return this.updtime;
	}	   

	/**
	 *设置"更新人"属性
	 *@param updor 实体的Updor属性
	 */
	public void setUpdor(String updor)
	{
		this.updor = updor;
	}
	
	/**
	 *获取"更新人"属性
	 */
	public String getUpdor()
	{
		return this.updor;
	}	   
	public Mycourse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Mycourse(
		String mycourseid
	 	,String mycoursecoach
	 	,String mycoursecustomer
	 	,String mycoursename
	 	,String mycourseproject
	 	,String mycoursenum
	 	,String mycoursemoney
	 	,String createtime
	 	,String creator
	 	,String updtime
	 	,String updor
		 ){
		super();
		this.mycourseid = mycourseid;
	 	this.mycoursecoach = mycoursecoach;
	 	this.mycoursecustomer = mycoursecustomer;
	 	this.mycoursename = mycoursename;
	 	this.mycourseproject = mycourseproject;
	 	this.mycoursenum = mycoursenum;
	 	this.mycoursemoney = mycoursemoney;
	 	this.createtime = createtime;
	 	this.creator = creator;
	 	this.updtime = updtime;
	 	this.updor = updor;
	}

	public String getMycoursecustomer() {
		return mycoursecustomer;
	}

	public void setMycoursecustomer(String mycoursecustomer) {
		this.mycoursecustomer = mycoursecustomer;
	}
}

