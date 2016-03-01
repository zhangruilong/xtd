package com.server.poco;

/**
 * allcourseview 实体类的常量
 *@author ZhangRuiLong
 */
public class AllcourseviewPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "allcourseview";
   /**
    * 实体表名
    */
   public static String TABLE = "Allcourseview";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"allcourseid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
	 	"allcoursecoach",
	 	"allcoursename",
	 	"allcourseproject",
	 	"allcoursenum",
	 	"allcoursemoney",
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
	 	"allcoursecoach",
	 	"allcoursename",
	 	"allcourseproject",
	 	"allcoursenum",
	 	"allcoursemoney",
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
   public static final String ORDER = " allcourseid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"allcoursecoach",
	 	"allcoursename",
	 	"allcourseproject",
	 	"allcoursenum",
	 	"allcoursemoney",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
	 	"coachcode",
	 	"coachname",
	 	"coachphone",
   };
}

