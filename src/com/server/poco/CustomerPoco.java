package com.server.poco;

/**
 * 会员 实体类的常量
 *@author ZhangRuiLong
 */
public class CustomerPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "会员";
   /**
    * 实体表名
    */
   public static String TABLE = "Customer";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"customerid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
	 	"场馆ID",
	 	"编码",
	 	"OPENID",
	 	"姓名",
	 	"性别",
	 	"年龄",
	 	"身份证",
	 	"家庭住址",
	 	"单位地址",
	 	"手机",
	 	"生日",
	 	"纪念日",
	 	"邮箱",
	 	"入会途径",
	 	"入会时间",
	 	"照片",
	 	"顾问",
	 	"等级",
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
	 	"customerstadium",
	 	"customercode",
	 	"openid",
	 	"customername",
	 	"customersex",
	 	"customerage",
	 	"customercdcard",
	 	"customerhome",
	 	"customercompany",
	 	"customerphone",
	 	"customerbirthday",
	 	"customergoodday",
	 	"customeremail",
	 	"customerhow",
	 	"customertime",
	 	"customerimage",
	 	"customeremp",
	 	"customerlevel",
	 	"customerdetail",
	 	"customerstatue",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " customerid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"customerstadium",
	 	"customercode",
	 	"openid",
	 	"customername",
	 	"customersex",
	 	"customerage",
	 	"customercdcard",
	 	"customerhome",
	 	"customercompany",
	 	"customerphone",
	 	"customerbirthday",
	 	"customergoodday",
	 	"customeremail",
	 	"customerhow",
	 	"customertime",
	 	"customerimage",
	 	"customeremp",
	 	"customerlevel",
	 	"customerdetail",
	 	"customerstatue",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
   };
}

