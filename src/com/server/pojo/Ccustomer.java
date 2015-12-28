package com.server.pojo;

import java.sql.Date;
/**
 * 教练和会员 实体类
 *@author ZhangRuiLong
 */
public class Ccustomer
{
   /**
    * ID,主键
    */
   private String ccustomerid; 
   /**
    * 教练ID
    */
   private String ccustomercoach;   
   /**
    * 会员ID
    */
   private String ccustomercustomer;   
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
	 *@param ccustomerid 实体的Ccustomerid属性
	 */
	public void setCcustomerid(String ccustomerid)
	{
		this.ccustomerid = ccustomerid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getCcustomerid()
	{
		return this.ccustomerid;
	}

	/**
	 *设置"教练ID"属性
	 *@param ccustomercoach 实体的Ccustomercoach属性
	 */
	public void setCcustomercoach(String ccustomercoach)
	{
		this.ccustomercoach = ccustomercoach;
	}
	
	/**
	 *获取"教练ID"属性
	 */
	public String getCcustomercoach()
	{
		return this.ccustomercoach;
	}	   

	/**
	 *设置"会员ID"属性
	 *@param ccustomercustomer 实体的Ccustomercustomer属性
	 */
	public void setCcustomercustomer(String ccustomercustomer)
	{
		this.ccustomercustomer = ccustomercustomer;
	}
	
	/**
	 *获取"会员ID"属性
	 */
	public String getCcustomercustomer()
	{
		return this.ccustomercustomer;
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
	public Ccustomer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Ccustomer(
		String ccustomerid
	 	,String ccustomercoach
	 	,String ccustomercustomer
	 	,String createtime
	 	,String creator
		 ){
		super();
		this.ccustomerid = ccustomerid;
	 	this.ccustomercoach = ccustomercoach;
	 	this.ccustomercustomer = ccustomercustomer;
	 	this.createtime = createtime;
	 	this.creator = creator;
	}
}

