package com.server.poco;

/**
 * 教练和会员 实体类的常量
 *@author ZhangRuiLong
 */
public class CcustomerPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "教练和会员";
   /**
    * 实体表名
    */
   public static String TABLE = "Ccustomer";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"ccustomerid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
	 	"教练ID",
	 	"会员ID",
	 	"创建时间",
	 	"创建人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
	 	"ccustomercoach",
	 	"ccustomercustomer",
	 	"createtime",
	 	"creator",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " ccustomerid ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"ccustomercoach",
	 	"ccustomercustomer",
	 	"createtime",
	 	"creator",
   };
}

