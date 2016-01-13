package com.server.poco;

/**
 * 我的私教课 实体类的常量
 *@author ZhangRuiLong
 */
public class MycourseviewPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "我的私教课";
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
	 	"mycoursecoach",
	 	"mycoursename",
	 	"mycourseproject",
	 	"mycoursenum",
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
	 	"mycoursecoach",
	 	"mycoursename",
	 	"mycourseproject",
	 	"mycoursenum",
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
   public static final String ORDER = " mycourseid ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"mycoursecoach",
	 	"mycoursename",
	 	"mycourseproject",
	 	"mycoursenum",
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

