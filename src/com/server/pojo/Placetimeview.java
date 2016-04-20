package com.server.pojo;

import java.sql.Date;
/**
 * 场次 实体类
 *@author ZhangRuiLong
 */
public class Placetimeview
{
   /**
    * stadiumid,主键
    */
   private String stadiumid; 
   /**
    * stadiumname
    */
   private String stadiumname;   
   /**
    * placecode
    */
   private String placecode;   
   /**
    * placeproject
    */
   private String placeproject;   
    //属性方法	    
     /**
	 *设置主键"stadiumid"属性
	 *@param stadiumid 实体的Stadiumid属性
	 */
	public void setStadiumid(String stadiumid)
	{
		this.stadiumid = stadiumid;
	}
	
	/**
	 *获取主键"stadiumid"属性
	 */
	public String getStadiumid()
	{
		return this.stadiumid;
	}

	/**
	 *设置"stadiumname"属性
	 *@param stadiumname 实体的Stadiumname属性
	 */
	public void setStadiumname(String stadiumname)
	{
		this.stadiumname = stadiumname;
	}
	
	/**
	 *获取"stadiumname"属性
	 */
	public String getStadiumname()
	{
		return this.stadiumname;
	}	   

	/**
	 *设置"placecode"属性
	 *@param placecode 实体的Placecode属性
	 */
	public void setPlacecode(String placecode)
	{
		this.placecode = placecode;
	}
	
	/**
	 *获取"placecode"属性
	 */
	public String getPlacecode()
	{
		return this.placecode;
	}	   

	/**
	 *设置"placeproject"属性
	 *@param placeproject 实体的Placeproject属性
	 */
	public void setPlaceproject(String placeproject)
	{
		this.placeproject = placeproject;
	}
	
	/**
	 *获取"placeproject"属性
	 */
	public String getPlaceproject()
	{
		return this.placeproject;
	}	   
	public Placetimeview() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Placetimeview(
		String stadiumid
	 	,String stadiumname
	 	,String placecode
	 	,String placeproject
		 ){
		super();
		this.stadiumid = stadiumid;
	 	this.stadiumname = stadiumname;
	 	this.placecode = placecode;
	 	this.placeproject = placeproject;
	}
}

