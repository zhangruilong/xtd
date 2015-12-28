package com.server.poco;

/**
 * 我的私教课 实体类的常量
 *@author ZhangRuiLong
 */
public class MycoursePoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "我的私教课";
   /**
    * 实体表名
    */
   public static String TABLE = "Mycourse";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"mycourseid"};
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
	 	"mycoursecoach",
	 	"mycourseroject",
	 	"mycoursenum",
	 	"mycoursemoney",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
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
	 	"mycourseroject",
	 	"mycoursenum",
	 	"mycoursemoney",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
   };
}

