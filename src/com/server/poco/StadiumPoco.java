package com.server.poco;

/**
 * 场馆 实体类的常量
 *@author ZhangRuiLong
 */
public class StadiumPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "场馆";
   /**
    * 实体表名
    */
   public static String TABLE = "Stadium";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"stadiumid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
	 	"编码",
	 	"名称",
	 	"地址",
	 	"备注",
	 	"状态",
	 	"X坐标",
	 	"Y坐标",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
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
   public static final String ORDER = " stadiumid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"stadiumcode",
	 	"stadiumname",
	 	"stadiumaddress",
	 	"stadiumdetail",
	 	"stadiumstatue",
	 	"stadiumx",
	 	"stadiumy",
   };
}

