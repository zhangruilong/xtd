package com.server.poco;

/**
 * 场地 实体类的常量
 *@author ZhangRuiLong
 */
public class PlacePoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "场地";
   /**
    * 实体表名
    */
   public static String TABLE = "Place";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"placeid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
	    "ID",
	 	"场馆ID",
	 	"编码",
	 	"名称",
	 	"人数",
	 	"备注",
	 	"状态",
	 	"开始时间",
	 	"结束时间",
	 	"项目",
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
   };
}

