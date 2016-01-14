package com.server.pojo;

import java.sql.Date;
/**
 * 场次 实体类
 *@author ZhangRuiLong
 */
public class Placetime
{
   /**
    * ID,主键
    */
   private String placetimeid; 
   /**
    * 编码
    */
   private String placetimecode;   
   /**
    * 名称
    */
   private String placetimename;   
   /**
    * 备注
    */
   private String placetimedetail;   
   /**
    * 状态
    */
   private String placetimestatue;   
   /**
    * 开始时间
    */
   private String placetimebegin;   
   /**
    * 结束时间
    */
   private String placetimeend;   
   /**
    * 项目
    */
   private String placetimeproject;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param placetimeid 实体的Placetimeid属性
	 */
	public void setPlacetimeid(String placetimeid)
	{
		this.placetimeid = placetimeid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getPlacetimeid()
	{
		return this.placetimeid;
	}

	/**
	 *设置"编码"属性
	 *@param placetimecode 实体的Placetimecode属性
	 */
	public void setPlacetimecode(String placetimecode)
	{
		this.placetimecode = placetimecode;
	}
	
	/**
	 *获取"编码"属性
	 */
	public String getPlacetimecode()
	{
		return this.placetimecode;
	}	   

	/**
	 *设置"名称"属性
	 *@param placetimename 实体的Placetimename属性
	 */
	public void setPlacetimename(String placetimename)
	{
		this.placetimename = placetimename;
	}
	
	/**
	 *获取"名称"属性
	 */
	public String getPlacetimename()
	{
		return this.placetimename;
	}	   

	/**
	 *设置"备注"属性
	 *@param placetimedetail 实体的Placetimedetail属性
	 */
	public void setPlacetimedetail(String placetimedetail)
	{
		this.placetimedetail = placetimedetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getPlacetimedetail()
	{
		return this.placetimedetail;
	}	   

	/**
	 *设置"状态"属性
	 *@param placetimestatue 实体的Placetimestatue属性
	 */
	public void setPlacetimestatue(String placetimestatue)
	{
		this.placetimestatue = placetimestatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getPlacetimestatue()
	{
		return this.placetimestatue;
	}	   

	/**
	 *设置"开始时间"属性
	 *@param placetimebegin 实体的Placetimebegin属性
	 */
	public void setPlacetimebegin(String placetimebegin)
	{
		this.placetimebegin = placetimebegin;
	}
	
	/**
	 *获取"开始时间"属性
	 */
	public String getPlacetimebegin()
	{
		return this.placetimebegin;
	}	   

	/**
	 *设置"结束时间"属性
	 *@param placetimeend 实体的Placetimeend属性
	 */
	public void setPlacetimeend(String placetimeend)
	{
		this.placetimeend = placetimeend;
	}
	
	/**
	 *获取"结束时间"属性
	 */
	public String getPlacetimeend()
	{
		return this.placetimeend;
	}	   

	/**
	 *设置"项目"属性
	 *@param placetimeproject 实体的Placetimeproject属性
	 */
	public void setPlacetimeproject(String placetimeproject)
	{
		this.placetimeproject = placetimeproject;
	}
	
	/**
	 *获取"项目"属性
	 */
	public String getPlacetimeproject()
	{
		return this.placetimeproject;
	}	   
	public Placetime() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Placetime(
		String placetimeid
	 	,String placetimecode
	 	,String placetimename
	 	,String placetimedetail
	 	,String placetimestatue
	 	,String placetimebegin
	 	,String placetimeend
	 	,String placetimeproject
		 ){
		super();
		this.placetimeid = placetimeid;
	 	this.placetimecode = placetimecode;
	 	this.placetimename = placetimename;
	 	this.placetimedetail = placetimedetail;
	 	this.placetimestatue = placetimestatue;
	 	this.placetimebegin = placetimebegin;
	 	this.placetimeend = placetimeend;
	 	this.placetimeproject = placetimeproject;
	}
}

