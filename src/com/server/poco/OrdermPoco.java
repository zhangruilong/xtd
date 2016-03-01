package com.server.poco;

/**
 * 订单 实体类的常量
 *@author ZhangRuiLong
 */
public class OrdermPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "订单";
   /**
    * 实体表名
    */
   public static String TABLE = "Orderm";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"orderid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
	 	"商品编码",
	 	"商品名称",
	 	"商品分类",
	 	"下单金额",
	 	"打折",
	 	"实际金额",
	 	"照片",
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
	 	"ordercode",
	 	"ordername",
	 	"orderclass",
	 	"ordermoney",
	 	"orderdiscount",
	 	"orderrightmoney",
	 	"orderimage",
	 	"orderdetail",
	 	"orderstatue",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " orderid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"ordercode",
	 	"ordername",
	 	"orderclass",
	 	"ordermoney",
	 	"orderdiscount",
	 	"orderrightmoney",
	 	"orderimage",
	 	"orderdetail",
	 	"orderstatue",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
   };
}

