package com.server.poco;

/**
 * 私教课 实体类的常量
 *@author ZhangRuiLong
 */
public class AllcoursePoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "私教课";
   /**
    * 实体表名
    */
   public static String TABLE = "Allcourse";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"allcourseid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
	 	"教练",
	 	"项目",
	 	"课时",
	 	"费用",
	 	"创建时间",
	 	"创建人",
	 	"更新时间",
	 	"更新人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
	 	"allcoursecoach",
	 	"allcourseproject",
	 	"allcoursenum",
	 	"allcoursemoney",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " allcourseid ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"allcoursecoach",
	 	"allcourseproject",
	 	"allcoursenum",
	 	"allcoursemoney",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
   };
}

