package com.server.poco;

/**
 * 卡种 实体类的常量
 *@author ZhangRuiLong
 */
public class CardtypePoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "卡种";
   /**
    * 实体表名
    */
   public static String TABLE = "Cardtype";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"cardtypeid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
	 	"编码",
	 	"名称",
	 	"分类",
	 	"有效期",
	 	"价格",
	 	"卡余额",
	 	"卡余次",
	 	"备注",
	 	"状态",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
	 	"cardtypecode",
	 	"cardtypename",
	 	"cardtypeclass",
	 	"cardtypeday",
	 	"cardtypeprice",
	 	"cardtypemoney",
	 	"cardtypetimes",
	 	"cardtypedetail",
	 	"cardtypestatue",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " cardtypeid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"cardtypecode",
	 	"cardtypename",
	 	"cardtypeclass",
	 	"cardtypeday",
	 	"cardtypeprice",
	 	"cardtypemoney",
	 	"cardtypetimes",
	 	"cardtypedetail",
	 	"cardtypestatue",
   };
}

