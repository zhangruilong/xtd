package com.server.poco;

/**
 * 会员卡续卡记录 实体类的常量
 *@author ZhangRuiLong
 */
public class CuscardcontinuePoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "会员卡续卡记录";
   /**
    * 实体表名
    */
   public static String TABLE = "Cuscardcontinue";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"cuscardid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
	 	"会员ID",
	 	"分类",
	 	"卡号",
	 	"密码",
	 	"有效期开始",
	 	"有效期结束",
	 	"卡余额",
	 	"卡总次数",
	 	"卡余次",
	 	"卡新余额",
	 	"卡新总次数",
	 	"卡新余次",
	 	"卡积分",
	 	"备注",
	 	"状态",
	 	"创建时间",
	 	"创建人",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
	 	"cuscardcustomer",
	 	"cuscardtype",
	 	"cuscardno",
	 	"cuscardpsw",
	 	"cuscardbegin",
	 	"cuscardend",
	 	"cuscardmoney",
	 	"cuscardnums",
	 	"cuscardtimes",
	 	"cuscardmoneynew",
	 	"cuscardnumsnew",
	 	"cuscardtimesnew",
	 	"cuscardint",
	 	"cuscarddetail",
	 	"cuscardstatue",
	 	"createtime",
	 	"creator",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " cuscardid desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"cuscardcustomer",
	 	"cuscardtype",
	 	"cuscardno",
	 	"cuscardpsw",
	 	"cuscardbegin",
	 	"cuscardend",
	 	"cuscardmoney",
	 	"cuscardnums",
	 	"cuscardtimes",
	 	"cuscardmoneynew",
	 	"cuscardnumsnew",
	 	"cuscardtimesnew",
	 	"cuscardint",
	 	"cuscarddetail",
	 	"cuscardstatue",
	 	"createtime",
	 	"creator",
   };
}

