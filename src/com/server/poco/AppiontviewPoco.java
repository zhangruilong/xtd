package com.server.poco;

/**
 * 预约 实体类的常量
 *@author ZhangRuiLong
 */
public class AppiontviewPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "预约";
   /**
    * 实体表名
    */
   public static String TABLE = "Appiontview";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"appointid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
   		"appointid",
	 	"appointcustomer",
	 	"appointcard",
	 	"appointplace",
	 	"appointcourse",
	 	"appointplacename",
	 	"appointcoursename",
	 	"appointcoachname",
	 	"appointproject",
	 	"appointbegin",
	 	"appointend",
	 	"appointdetail",
	 	"appointstatue",
	 	"createtime",
	 	"creator",
	 	"customercode",
	 	"openid",
	 	"customername",
	 	"customerphone",
	 	"cuscardtype",
	 	"cuscardno",
	 	"cuscarddetail",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"appointid",
	 	"appointcustomer",
	 	"appointcard",
	 	"appointplace",
	 	"appointcourse",
	 	"appointplacename",
	 	"appointcoursename",
	 	"appointcoachname",
	 	"appointproject",
	 	"appointbegin",
	 	"appointend",
	 	"appointdetail",
	 	"appointstatue",
	 	"createtime",
	 	"creator",
	 	"customercode",
	 	"openid",
	 	"customername",
	 	"customerphone",
	 	"cuscardtype",
	 	"cuscardno",
	 	"cuscarddetail",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " appointid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"appointcustomer",
	 	"appointcard",
	 	"appointplace",
	 	"appointcourse",
	 	"appointplacename",
	 	"appointcoursename",
	 	"appointcoachname",
	 	"appointproject",
	 	"appointbegin",
	 	"appointend",
	 	"appointdetail",
	 	"appointstatue",
	 	"createtime",
	 	"creator",
	 	"customercode",
	 	"openid",
	 	"customername",
	 	"customerphone",
	 	"cuscardtype",
	 	"cuscardno",
	 	"cuscarddetail",
   };
}

