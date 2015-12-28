package com.server.pojo;

import java.sql.Date;
/**
 * 每日课程 实体类
 *@author ZhangRuiLong
 */
public class Course
{
   /**
    * ID,主键
    */
   private String courseid; 
   /**
    * 场地ID
    */
   private String courseplace;   
   /**
    * 教练ID
    */
   private String coursecoach;   
   /**
    * 编码
    */
   private String coursecode;   
   /**
    * 名称
    */
   private String coursename;   
   /**
    * 开始时间
    */
   private String coursebegin;   
   /**
    * 结束时间
    */
   private String courseend;   
   /**
    * 备注
    */
   private String coursedetail;   
   /**
    * 状态
    */
   private String coursestatue;   
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
	 *@param courseid 实体的Courseid属性
	 */
	public void setCourseid(String courseid)
	{
		this.courseid = courseid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getCourseid()
	{
		return this.courseid;
	}

	/**
	 *设置"场地ID"属性
	 *@param courseplace 实体的Courseplace属性
	 */
	public void setCourseplace(String courseplace)
	{
		this.courseplace = courseplace;
	}
	
	/**
	 *获取"场地ID"属性
	 */
	public String getCourseplace()
	{
		return this.courseplace;
	}	   

	/**
	 *设置"教练ID"属性
	 *@param coursecoach 实体的Coursecoach属性
	 */
	public void setCoursecoach(String coursecoach)
	{
		this.coursecoach = coursecoach;
	}
	
	/**
	 *获取"教练ID"属性
	 */
	public String getCoursecoach()
	{
		return this.coursecoach;
	}	   

	/**
	 *设置"编码"属性
	 *@param coursecode 实体的Coursecode属性
	 */
	public void setCoursecode(String coursecode)
	{
		this.coursecode = coursecode;
	}
	
	/**
	 *获取"编码"属性
	 */
	public String getCoursecode()
	{
		return this.coursecode;
	}	   

	/**
	 *设置"名称"属性
	 *@param coursename 实体的Coursename属性
	 */
	public void setCoursename(String coursename)
	{
		this.coursename = coursename;
	}
	
	/**
	 *获取"名称"属性
	 */
	public String getCoursename()
	{
		return this.coursename;
	}	   

	/**
	 *设置"开始时间"属性
	 *@param coursebegin 实体的Coursebegin属性
	 */
	public void setCoursebegin(String coursebegin)
	{
		this.coursebegin = coursebegin;
	}
	
	/**
	 *获取"开始时间"属性
	 */
	public String getCoursebegin()
	{
		return this.coursebegin;
	}	   

	/**
	 *设置"结束时间"属性
	 *@param courseend 实体的Courseend属性
	 */
	public void setCourseend(String courseend)
	{
		this.courseend = courseend;
	}
	
	/**
	 *获取"结束时间"属性
	 */
	public String getCourseend()
	{
		return this.courseend;
	}	   

	/**
	 *设置"备注"属性
	 *@param coursedetail 实体的Coursedetail属性
	 */
	public void setCoursedetail(String coursedetail)
	{
		this.coursedetail = coursedetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getCoursedetail()
	{
		return this.coursedetail;
	}	   

	/**
	 *设置"状态"属性
	 *@param coursestatue 实体的Coursestatue属性
	 */
	public void setCoursestatue(String coursestatue)
	{
		this.coursestatue = coursestatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getCoursestatue()
	{
		return this.coursestatue;
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
	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Course(
		String courseid
	 	,String courseplace
	 	,String coursecoach
	 	,String coursecode
	 	,String coursename
	 	,String coursebegin
	 	,String courseend
	 	,String coursedetail
	 	,String coursestatue
	 	,String createtime
	 	,String creator
	 	,String updtime
	 	,String updor
		 ){
		super();
		this.courseid = courseid;
	 	this.courseplace = courseplace;
	 	this.coursecoach = coursecoach;
	 	this.coursecode = coursecode;
	 	this.coursename = coursename;
	 	this.coursebegin = coursebegin;
	 	this.courseend = courseend;
	 	this.coursedetail = coursedetail;
	 	this.coursestatue = coursestatue;
	 	this.createtime = createtime;
	 	this.creator = creator;
	 	this.updtime = updtime;
	 	this.updor = updor;
	}
}

