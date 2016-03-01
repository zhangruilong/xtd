package com.server.poco;

/**
 * 会员和课程 实体类的常量
 *@author ZhangRuiLong
 */
public class CcoursePoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "会员和课程";
   /**
    * 实体表名
    */
   public static String TABLE = "Ccourse";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"ccourseid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
	 	"会员",
	 	"课程",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
	 	"ccoursecustomer",
	 	"ccoursecourse",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " ccourseid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"ccoursecustomer",
	 	"ccoursecourse",
   };
}

