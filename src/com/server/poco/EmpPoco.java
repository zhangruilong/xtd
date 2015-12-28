package com.server.poco;

/**
 * 员工 实体类的常量
 *@author ZhangRuiLong
 */
public class EmpPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "员工";
   /**
    * 实体表名
    */
   public static String TABLE = "Emp";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"empid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
	 	"场馆ID",
	 	"编码",
	 	"姓名",
	 	"年龄",
	 	"性别",
	 	"手机",
	 	"邮箱",
	 	"照片",
	 	"地址",
	 	"备注",
	 	"状态",
	 	"创建时间",
	 	"创建人",
	 	"更新时间",
	 	"更新人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
	 	"empstadium",
	 	"empcode",
	 	"empname",
	 	"empage",
	 	"empsex",
	 	"empphone",
	 	"empemail",
	 	"empimage",
	 	"empaddress",
	 	"empdetail",
	 	"empstatue",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " empid ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"empstadium",
	 	"empcode",
	 	"empname",
	 	"empage",
	 	"empsex",
	 	"empphone",
	 	"empemail",
	 	"empimage",
	 	"empaddress",
	 	"empdetail",
	 	"empstatue",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
   };
}

