package com.server.poco;

/**
 * 场地 实体类的常量
 *@author ZhangRuiLong
 */
public class PlaceviewPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "场地";
   /**
    * 实体表名
    */
   public static String TABLE = "Placeview";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"placeid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
	 	"placestadium",
	 	"placecode",
	 	"placename",
	 	"placepeople",
	 	"placedetail",
	 	"placestatue",
	 	"placebegin",
	 	"placeend",
	 	"placeproject",
	 	"stadiumid",
	 	"stadiumcode",
	 	"stadiumname",
	 	"stadiumaddress",
	 	"stadiumdetail",
	 	"stadiumstatue",
	 	"stadiumx",
	 	"stadiumy",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
	 	"placestadium",
	 	"placecode",
	 	"placename",
	 	"placepeople",
	 	"placedetail",
	 	"placestatue",
	 	"placebegin",
	 	"placeend",
	 	"placeproject",
	 	"stadiumid",
	 	"stadiumcode",
	 	"stadiumname",
	 	"stadiumaddress",
	 	"stadiumdetail",
	 	"stadiumstatue",
	 	"stadiumx",
	 	"stadiumy",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " placeid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"placestadium",
	 	"placecode",
	 	"placename",
	 	"placepeople",
	 	"placedetail",
	 	"placestatue",
	 	"placebegin",
	 	"placeend",
	 	"placeproject",
	 	"stadiumid",
	 	"stadiumcode",
	 	"stadiumname",
	 	"stadiumaddress",
	 	"stadiumdetail",
	 	"stadiumstatue",
	 	"stadiumx",
	 	"stadiumy",
   };
}

