package com.server.poco;

/**
 * 每日课程 实体类的常量
 *@author ZhangRuiLong
 */
public class CoursePoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "每日课程";
   /**
    * 实体表名
    */
   public static String TABLE = "Course";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"courseid"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
	 	"场地ID",
	 	"教练ID",
	 	"编码",
	 	"名称",
	 	"开始时间",
	 	"结束时间",
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
	 	"courseplace",
	 	"coursecoach",
	 	"coursecode",
	 	"coursename",
	 	"coursebegin",
	 	"courseend",
	 	"coursedetail",
	 	"coursestatue",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " courseid ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
	 	"courseplace",
	 	"coursecoach",
	 	"coursecode",
	 	"coursename",
	 	"coursebegin",
	 	"courseend",
	 	"coursedetail",
	 	"coursestatue",
	 	"createtime",
	 	"creator",
	 	"updtime",
	 	"updor",
   };
}

