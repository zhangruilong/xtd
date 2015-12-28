package com.server.pojo;

import java.sql.Date;
/**
 * 场馆 实体类
 *@author ZhangRuiLong
 */
public class Stadium
{
   /**
    * ID,主键
    */
   private String stadiumid; 
   /**
    * 编码
    */
   private String stadiumcode;   
   /**
    * 名称
    */
   private String stadiumname;   
   /**
    * 地址
    */
   private String stadiumaddress;   
   /**
    * 备注
    */
   private String stadiumdetail;   
   /**
    * 状态
    */
   private String stadiumstatue;   
   /**
    * X坐标
    */
   private String stadiumx;   
   /**
    * Y坐标
    */
   private String stadiumy;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param stadiumid 实体的Stadiumid属性
	 */
	public void setStadiumid(String stadiumid)
	{
		this.stadiumid = stadiumid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getStadiumid()
	{
		return this.stadiumid;
	}

	/**
	 *设置"编码"属性
	 *@param stadiumcode 实体的Stadiumcode属性
	 */
	public void setStadiumcode(String stadiumcode)
	{
		this.stadiumcode = stadiumcode;
	}
	
	/**
	 *获取"编码"属性
	 */
	public String getStadiumcode()
	{
		return this.stadiumcode;
	}	   

	/**
	 *设置"名称"属性
	 *@param stadiumname 实体的Stadiumname属性
	 */
	public void setStadiumname(String stadiumname)
	{
		this.stadiumname = stadiumname;
	}
	
	/**
	 *获取"名称"属性
	 */
	public String getStadiumname()
	{
		return this.stadiumname;
	}	   

	/**
	 *设置"地址"属性
	 *@param stadiumaddress 实体的Stadiumaddress属性
	 */
	public void setStadiumaddress(String stadiumaddress)
	{
		this.stadiumaddress = stadiumaddress;
	}
	
	/**
	 *获取"地址"属性
	 */
	public String getStadiumaddress()
	{
		return this.stadiumaddress;
	}	   

	/**
	 *设置"备注"属性
	 *@param stadiumdetail 实体的Stadiumdetail属性
	 */
	public void setStadiumdetail(String stadiumdetail)
	{
		this.stadiumdetail = stadiumdetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getStadiumdetail()
	{
		return this.stadiumdetail;
	}	   

	/**
	 *设置"状态"属性
	 *@param stadiumstatue 实体的Stadiumstatue属性
	 */
	public void setStadiumstatue(String stadiumstatue)
	{
		this.stadiumstatue = stadiumstatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getStadiumstatue()
	{
		return this.stadiumstatue;
	}	   

	/**
	 *设置"X坐标"属性
	 *@param stadiumx 实体的Stadiumx属性
	 */
	public void setStadiumx(String stadiumx)
	{
		this.stadiumx = stadiumx;
	}
	
	/**
	 *获取"X坐标"属性
	 */
	public String getStadiumx()
	{
		return this.stadiumx;
	}	   

	/**
	 *设置"Y坐标"属性
	 *@param stadiumy 实体的Stadiumy属性
	 */
	public void setStadiumy(String stadiumy)
	{
		this.stadiumy = stadiumy;
	}
	
	/**
	 *获取"Y坐标"属性
	 */
	public String getStadiumy()
	{
		return this.stadiumy;
	}	   
	public Stadium() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Stadium(
		String stadiumid
	 	,String stadiumcode
	 	,String stadiumname
	 	,String stadiumaddress
	 	,String stadiumdetail
	 	,String stadiumstatue
	 	,String stadiumx
	 	,String stadiumy
		 ){
		super();
		this.stadiumid = stadiumid;
	 	this.stadiumcode = stadiumcode;
	 	this.stadiumname = stadiumname;
	 	this.stadiumaddress = stadiumaddress;
	 	this.stadiumdetail = stadiumdetail;
	 	this.stadiumstatue = stadiumstatue;
	 	this.stadiumx = stadiumx;
	 	this.stadiumy = stadiumy;
	}
}

