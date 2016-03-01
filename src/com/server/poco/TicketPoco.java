package com.server.poco;

/**
 * 体验劵核销记录 实体类的常量
 *@author ZhangRuiLong
 */
public class TicketPoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "体验劵核销记录";
   /**
    * 实体表名
    */
   public static String TABLE = "Ticket";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"ticketid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
	 	"会员ID",
	 	"券号",
	 	"备注",
	 	"创建时间",
	 	"创建人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
	 	"ticketcustomer",
	 	"ticketcode",
	 	"ticketdetail",
	 	"ticketbegin",
	 	"ticketend",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " ticketid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"ticketcustomer",
	 	"ticketcode",
	 	"ticketdetail",
	 	"ticketbegin",
	 	"ticketend",
   };
}

