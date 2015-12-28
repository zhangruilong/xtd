package com.server.pojo;

import java.sql.Date;
/**
 * 会员和课程 实体类
 *@author ZhangRuiLong
 */
public class Ccourse
{
   /**
    * ID,主键
    */
   private String ccourseid; 
   /**
    * 会员
    */
   private String ccoursecustomer;   
   /**
    * 课程
    */
   private String ccoursecourse;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param ccourseid 实体的Ccourseid属性
	 */
	public void setCcourseid(String ccourseid)
	{
		this.ccourseid = ccourseid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getCcourseid()
	{
		return this.ccourseid;
	}

	/**
	 *设置"会员"属性
	 *@param ccoursecustomer 实体的Ccoursecustomer属性
	 */
	public void setCcoursecustomer(String ccoursecustomer)
	{
		this.ccoursecustomer = ccoursecustomer;
	}
	
	/**
	 *获取"会员"属性
	 */
	public String getCcoursecustomer()
	{
		return this.ccoursecustomer;
	}	   

	/**
	 *设置"课程"属性
	 *@param ccoursecourse 实体的Ccoursecourse属性
	 */
	public void setCcoursecourse(String ccoursecourse)
	{
		this.ccoursecourse = ccoursecourse;
	}
	
	/**
	 *获取"课程"属性
	 */
	public String getCcoursecourse()
	{
		return this.ccoursecourse;
	}	   
	public Ccourse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Ccourse(
		String ccourseid
	 	,String ccoursecustomer
	 	,String ccoursecourse
		 ){
		super();
		this.ccourseid = ccourseid;
	 	this.ccoursecustomer = ccoursecustomer;
	 	this.ccoursecourse = ccoursecourse;
	}
}

