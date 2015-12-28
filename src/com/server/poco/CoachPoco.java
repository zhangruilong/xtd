package com.server.poco;

/**
 * 教练 实体类的常量
 *@author ZhangRuiLong
 */
public class CoachPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "教练";
   /**
    * 实体表名
    */
   public static String TABLE = "Coach";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"coachid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
	 	"场馆ID",
	 	"编码",
	 	"姓名",
	 	"手机",
	 	"地址",
	 	"性别",
	 	"年龄",
	 	"照片",
	 	"备注",
	 	"状态",
	 	"创建时间",
	 	"创建人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
	 	"coachstadium",
	 	"coachcode",
	 	"coachname",
	 	"coachphone",
	 	"coachaddress",
	 	"coachsex",
	 	"coachage",
	 	"coachimage",
	 	"coachdetail",
	 	"coachstatue",
	 	"createtime",
	 	"creator",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " coachid ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"coachstadium",
	 	"coachcode",
	 	"coachname",
	 	"coachphone",
	 	"coachaddress",
	 	"coachsex",
	 	"coachage",
	 	"coachimage",
	 	"coachdetail",
	 	"coachstatue",
	 	"createtime",
	 	"creator",
   };
}

