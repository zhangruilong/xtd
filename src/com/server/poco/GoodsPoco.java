package com.server.poco;

/**
 * 商品 实体类的常量
 *@author ZhangRuiLong
 */
public class GoodsPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "商品";
   /**
    * 实体表名
    */
   public static String TABLE = "Goods";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"goodsid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
	 	"编码",
	 	"名称",
	 	"分类",
	 	"现价",
	 	"原价",
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
	 	"goodscode",
	 	"goodsname",
	 	"goodsclass",
	 	"goodsprice",
	 	"goodsorgprice",
	 	"goodsimage",
	 	"goodsdetail",
	 	"goodsstatue",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " goodsid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"goodscode",
	 	"goodsname",
	 	"goodsclass",
	 	"goodsprice",
	 	"goodsorgprice",
	 	"goodsimage",
	 	"goodsdetail",
	 	"goodsstatue",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
   };
}

