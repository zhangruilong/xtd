package com.server.poco;

/**
 * 场次 实体类的常量
 *@author ZhangRuiLong
 */
public class PlacetimeviewPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "场次";
   /**
    * 实体表名
    */
   public static String TABLE = "Placetimeview";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"stadiumid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
   		"stadiumid",
	 	"stadiumname",
	 	"placecode",
	 	"placeproject",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"stadiumid",
	 	"stadiumname",
	 	"placecode",
	 	"placeproject",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " stadiumid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"stadiumname",
	 	"placecode",
	 	"placeproject",
   };
}

