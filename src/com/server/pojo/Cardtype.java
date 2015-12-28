package com.server.pojo;

import java.sql.Date;
/**
 * 卡种 实体类
 *@author ZhangRuiLong
 */
public class Cardtype
{
   /**
    * ID,主键
    */
   private String cardtypeid; 
   /**
    * 编码
    */
   private String cardtypecode;   
   /**
    * 名称
    */
   private String cardtypename;   
   /**
    * 分类
    */
   private String cardtypeclass;   
   /**
    * 有效期
    */
   private String cardtypeday;   
   /**
    * 价格
    */
   private String cardtypeprice;   
   /**
    * 卡余额
    */
   private String cardtypemoney;   
   /**
    * 卡余次
    */
   private int cardtypetimes;   
   /**
    * 备注
    */
   private String cardtypedetail;   
   /**
    * 状态
    */
   private String cardtypestatue;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param cardtypeid 实体的Cardtypeid属性
	 */
	public void setCardtypeid(String cardtypeid)
	{
		this.cardtypeid = cardtypeid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getCardtypeid()
	{
		return this.cardtypeid;
	}

	/**
	 *设置"编码"属性
	 *@param cardtypecode 实体的Cardtypecode属性
	 */
	public void setCardtypecode(String cardtypecode)
	{
		this.cardtypecode = cardtypecode;
	}
	
	/**
	 *获取"编码"属性
	 */
	public String getCardtypecode()
	{
		return this.cardtypecode;
	}	   

	/**
	 *设置"名称"属性
	 *@param cardtypename 实体的Cardtypename属性
	 */
	public void setCardtypename(String cardtypename)
	{
		this.cardtypename = cardtypename;
	}
	
	/**
	 *获取"名称"属性
	 */
	public String getCardtypename()
	{
		return this.cardtypename;
	}	   

	/**
	 *设置"分类"属性
	 *@param cardtypeclass 实体的Cardtypeclass属性
	 */
	public void setCardtypeclass(String cardtypeclass)
	{
		this.cardtypeclass = cardtypeclass;
	}
	
	/**
	 *获取"分类"属性
	 */
	public String getCardtypeclass()
	{
		return this.cardtypeclass;
	}	   

	/**
	 *设置"有效期"属性
	 *@param cardtypeday 实体的Cardtypeday属性
	 */
	public void setCardtypeday(String cardtypeday)
	{
		this.cardtypeday = cardtypeday;
	}
	
	/**
	 *获取"有效期"属性
	 */
	public String getCardtypeday()
	{
		return this.cardtypeday;
	}	   

	/**
	 *设置"价格"属性
	 *@param cardtypeprice 实体的Cardtypeprice属性
	 */
	public void setCardtypeprice(String cardtypeprice)
	{
		this.cardtypeprice = cardtypeprice;
	}
	
	/**
	 *获取"价格"属性
	 */
	public String getCardtypeprice()
	{
		return this.cardtypeprice;
	}	   

	/**
	 *设置"卡余额"属性
	 *@param cardtypemoney 实体的Cardtypemoney属性
	 */
	public void setCardtypemoney(String cardtypemoney)
	{
		this.cardtypemoney = cardtypemoney;
	}
	
	/**
	 *获取"卡余额"属性
	 */
	public String getCardtypemoney()
	{
		return this.cardtypemoney;
	}	   

	/**
	 *设置"卡余次"属性
	 *@param cardtypetimes 实体的Cardtypetimes属性
	 */
	public void setCardtypetimes(int cardtypetimes)
	{
		this.cardtypetimes = cardtypetimes;
	}
	
	/**
	 *获取"卡余次"属性
	 */
	public int getCardtypetimes()
	{
		return this.cardtypetimes;
	}	   

	/**
	 *设置"备注"属性
	 *@param cardtypedetail 实体的Cardtypedetail属性
	 */
	public void setCardtypedetail(String cardtypedetail)
	{
		this.cardtypedetail = cardtypedetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getCardtypedetail()
	{
		return this.cardtypedetail;
	}	   

	/**
	 *设置"状态"属性
	 *@param cardtypestatue 实体的Cardtypestatue属性
	 */
	public void setCardtypestatue(String cardtypestatue)
	{
		this.cardtypestatue = cardtypestatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getCardtypestatue()
	{
		return this.cardtypestatue;
	}	   
	public Cardtype() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Cardtype(
		String cardtypeid
	 	,String cardtypecode
	 	,String cardtypename
	 	,String cardtypeclass
	 	,String cardtypeday
	 	,String cardtypeprice
	 	,String cardtypemoney
	 	,int cardtypetimes
	 	,String cardtypedetail
	 	,String cardtypestatue
		 ){
		super();
		this.cardtypeid = cardtypeid;
	 	this.cardtypecode = cardtypecode;
	 	this.cardtypename = cardtypename;
	 	this.cardtypeclass = cardtypeclass;
	 	this.cardtypeday = cardtypeday;
	 	this.cardtypeprice = cardtypeprice;
	 	this.cardtypemoney = cardtypemoney;
	 	this.cardtypetimes = cardtypetimes;
	 	this.cardtypedetail = cardtypedetail;
	 	this.cardtypestatue = cardtypestatue;
	}
}

