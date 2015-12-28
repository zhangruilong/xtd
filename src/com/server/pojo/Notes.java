package com.server.pojo;

import java.sql.Date;
/**
 * 消费记录 实体类
 *@author ZhangRuiLong
 */
public class Notes
{
   /**
    * ID,主键
    */
   private String notesid; 
   /**
    * 会员ID
    */
   private String notescustomer;   
   /**
    * 会员卡ID
    */
   private String notescard;   
   /**
    * 场地ID
    */
   private String notesplace;   
   /**
    * 课程ID
    */
   private String notescourse;   
   /**
    * 项目
    */
   private String notesproject;   
   /**
    * 入场时间
    */
   private String notesbegin;   
   /**
    * 离场时间
    */
   private String notesend;   
   /**
    * 创建人
    */
   private String creator;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param notesid 实体的Notesid属性
	 */
	public void setNotesid(String notesid)
	{
		this.notesid = notesid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getNotesid()
	{
		return this.notesid;
	}

	/**
	 *设置"会员ID"属性
	 *@param notescustomer 实体的Notescustomer属性
	 */
	public void setNotescustomer(String notescustomer)
	{
		this.notescustomer = notescustomer;
	}
	
	/**
	 *获取"会员ID"属性
	 */
	public String getNotescustomer()
	{
		return this.notescustomer;
	}	   

	/**
	 *设置"会员卡ID"属性
	 *@param notescard 实体的Notescard属性
	 */
	public void setNotescard(String notescard)
	{
		this.notescard = notescard;
	}
	
	/**
	 *获取"会员卡ID"属性
	 */
	public String getNotescard()
	{
		return this.notescard;
	}	   

	/**
	 *设置"场地ID"属性
	 *@param notesplace 实体的Notesplace属性
	 */
	public void setNotesplace(String notesplace)
	{
		this.notesplace = notesplace;
	}
	
	/**
	 *获取"场地ID"属性
	 */
	public String getNotesplace()
	{
		return this.notesplace;
	}	   

	/**
	 *设置"课程ID"属性
	 *@param notescourse 实体的Notescourse属性
	 */
	public void setNotescourse(String notescourse)
	{
		this.notescourse = notescourse;
	}
	
	/**
	 *获取"课程ID"属性
	 */
	public String getNotescourse()
	{
		return this.notescourse;
	}	   

	/**
	 *设置"项目"属性
	 *@param notesproject 实体的Notesproject属性
	 */
	public void setNotesproject(String notesproject)
	{
		this.notesproject = notesproject;
	}
	
	/**
	 *获取"项目"属性
	 */
	public String getNotesproject()
	{
		return this.notesproject;
	}	   

	/**
	 *设置"入场时间"属性
	 *@param notesbegin 实体的Notesbegin属性
	 */
	public void setNotesbegin(String notesbegin)
	{
		this.notesbegin = notesbegin;
	}
	
	/**
	 *获取"入场时间"属性
	 */
	public String getNotesbegin()
	{
		return this.notesbegin;
	}	   

	/**
	 *设置"离场时间"属性
	 *@param notesend 实体的Notesend属性
	 */
	public void setNotesend(String notesend)
	{
		this.notesend = notesend;
	}
	
	/**
	 *获取"离场时间"属性
	 */
	public String getNotesend()
	{
		return this.notesend;
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
	public Notes() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Notes(
		String notesid
	 	,String notescustomer
	 	,String notescard
	 	,String notesplace
	 	,String notescourse
	 	,String notesproject
	 	,String notesbegin
	 	,String notesend
	 	,String creator
		 ){
		super();
		this.notesid = notesid;
	 	this.notescustomer = notescustomer;
	 	this.notescard = notescard;
	 	this.notesplace = notesplace;
	 	this.notescourse = notescourse;
	 	this.notesproject = notesproject;
	 	this.notesbegin = notesbegin;
	 	this.notesend = notesend;
	 	this.creator = creator;
	}
}

