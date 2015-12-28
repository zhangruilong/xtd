package com.server.pojo;

import java.sql.Date;
/**
 * 体验劵核销记录 实体类
 *@author ZhangRuiLong
 */
public class Ticket
{
   /**
    * ID,主键
    */
   private String ticketid; 
   /**
    * 会员ID
    */
   private String ticketcustomer;   
   /**
    * 券号
    */
   private String ticketcode;   
   /**
    * 备注
    */
   private String ticketdetail;   
   /**
    * 创建时间
    */
   private String ticketbegin;   
   /**
    * 创建人
    */
   private String ticketend;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param ticketid 实体的Ticketid属性
	 */
	public void setTicketid(String ticketid)
	{
		this.ticketid = ticketid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getTicketid()
	{
		return this.ticketid;
	}

	/**
	 *设置"会员ID"属性
	 *@param ticketcustomer 实体的Ticketcustomer属性
	 */
	public void setTicketcustomer(String ticketcustomer)
	{
		this.ticketcustomer = ticketcustomer;
	}
	
	/**
	 *获取"会员ID"属性
	 */
	public String getTicketcustomer()
	{
		return this.ticketcustomer;
	}	   

	/**
	 *设置"券号"属性
	 *@param ticketcode 实体的Ticketcode属性
	 */
	public void setTicketcode(String ticketcode)
	{
		this.ticketcode = ticketcode;
	}
	
	/**
	 *获取"券号"属性
	 */
	public String getTicketcode()
	{
		return this.ticketcode;
	}	   

	/**
	 *设置"备注"属性
	 *@param ticketdetail 实体的Ticketdetail属性
	 */
	public void setTicketdetail(String ticketdetail)
	{
		this.ticketdetail = ticketdetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getTicketdetail()
	{
		return this.ticketdetail;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param ticketbegin 实体的Ticketbegin属性
	 */
	public void setTicketbegin(String ticketbegin)
	{
		this.ticketbegin = ticketbegin;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getTicketbegin()
	{
		return this.ticketbegin;
	}	   

	/**
	 *设置"创建人"属性
	 *@param ticketend 实体的Ticketend属性
	 */
	public void setTicketend(String ticketend)
	{
		this.ticketend = ticketend;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getTicketend()
	{
		return this.ticketend;
	}	   
	public Ticket() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Ticket(
		String ticketid
	 	,String ticketcustomer
	 	,String ticketcode
	 	,String ticketdetail
	 	,String ticketbegin
	 	,String ticketend
		 ){
		super();
		this.ticketid = ticketid;
	 	this.ticketcustomer = ticketcustomer;
	 	this.ticketcode = ticketcode;
	 	this.ticketdetail = ticketdetail;
	 	this.ticketbegin = ticketbegin;
	 	this.ticketend = ticketend;
	}
}

