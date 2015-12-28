package com.server.pojo;

import java.sql.Date;
/**
 * 私教课 实体类
 *@author ZhangRuiLong
 */
public class Allcourse
{
   /**
    * ID,主键
    */
   private String allcourseid; 
   /**
    * 教练
    */
   private String allcoursecoach;   
   /**
    * 项目
    */
   private String allcourseproject;   
   /**
    * 课时
    */
   private String allcoursenum;   
   /**
    * 费用
    */
   private String allcoursemoney;   
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
	 *@param allcourseid 实体的Allcourseid属性
	 */
	public void setAllcourseid(String allcourseid)
	{
		this.allcourseid = allcourseid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getAllcourseid()
	{
		return this.allcourseid;
	}

	/**
	 *设置"教练"属性
	 *@param allcoursecoach 实体的Allcoursecoach属性
	 */
	public void setAllcoursecoach(String allcoursecoach)
	{
		this.allcoursecoach = allcoursecoach;
	}
	
	/**
	 *获取"教练"属性
	 */
	public String getAllcoursecoach()
	{
		return this.allcoursecoach;
	}	   

	/**
	 *设置"项目"属性
	 *@param allcourseproject 实体的Allcourseproject属性
	 */
	public void setAllcourseproject(String allcourseproject)
	{
		this.allcourseproject = allcourseproject;
	}
	
	/**
	 *获取"项目"属性
	 */
	public String getAllcourseproject()
	{
		return this.allcourseproject;
	}	   

	/**
	 *设置"课时"属性
	 *@param allcoursenum 实体的Allcoursenum属性
	 */
	public void setAllcoursenum(String allcoursenum)
	{
		this.allcoursenum = allcoursenum;
	}
	
	/**
	 *获取"课时"属性
	 */
	public String getAllcoursenum()
	{
		return this.allcoursenum;
	}	   

	/**
	 *设置"费用"属性
	 *@param allcoursemoney 实体的Allcoursemoney属性
	 */
	public void setAllcoursemoney(String allcoursemoney)
	{
		this.allcoursemoney = allcoursemoney;
	}
	
	/**
	 *获取"费用"属性
	 */
	public String getAllcoursemoney()
	{
		return this.allcoursemoney;
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
	public Allcourse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Allcourse(
		String allcourseid
	 	,String allcoursecoach
	 	,String allcourseproject
	 	,String allcoursenum
	 	,String allcoursemoney
	 	,String createtime
	 	,String creator
	 	,String updtime
	 	,String updor
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
	}
}

