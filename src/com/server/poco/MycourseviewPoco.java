package com.server.poco;

/**
 * mycourseview 实体类的常量
 *@author ZhangRuiLong
 */
public class MycourseviewPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "mycourseview";
   /**
    * 实体表名
    */
   public static String TABLE = "Mycourseview";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"mycourseid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
   		"mycourseid",
	 	"mycoursecoach",
	 	"mycoursecustomer",
	 	"mycoursename",
	 	"mycourseproject",
	 	"mycoursenum",
	 	"mycoursenuma",
	 	"mycoursemoney",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
	 	"coachcode",
	 	"coachname",
	 	"coachphone",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"mycourseid",
	 	"mycoursecoach",
	 	"mycoursecustomer",
	 	"mycoursename",
	 	"mycourseproject",
	 	"mycoursenum",
	 	"mycoursenuma",
	 	"mycoursemoney",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
	 	"coachcode",
	 	"coachname",
	 	"coachphone",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " mycourseid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"mycoursecoach",
	 	"mycoursecustomer",
	 	"mycoursename",
	 	"mycourseproject",
	 	"mycoursenum",
	 	"mycoursenuma",
	 	"mycoursemoney",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
	 	"coachcode",
	 	"coachname",
	 	"coachphone",
   };
}

