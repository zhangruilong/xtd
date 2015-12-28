package com.server.pojo;

import java.sql.Date;
/**
 * 商品 实体类
 *@author ZhangRuiLong
 */
public class Goods
{
   /**
    * ID,主键
    */
   private String goodsid; 
   /**
    * 编码
    */
   private String goodscode;   
   /**
    * 名称
    */
   private String goodsname;   
   /**
    * 分类
    */
   private String goodsclass;   
   /**
    * 现价
    */
   private String goodsprice;   
   /**
    * 原价
    */
   private String goodsorgprice;   
   /**
    * 照片
    */
   private String goodsimage;   
   /**
    * 备注
    */
   private String goodsdetail;   
   /**
    * 状态
    */
   private String goodsstatue;   
   /**
    * 创建时间
    */
   private String createtime;   
   /**
    * 创建人
    */
   private String creator;   
   /**
    * 更新时间
    */
   private String updtime;   
   /**
    * 更新人
    */
   private String updor;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param goodsid 实体的Goodsid属性
	 */
	public void setGoodsid(String goodsid)
	{
		this.goodsid = goodsid;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getGoodsid()
	{
		return this.goodsid;
	}

	/**
	 *设置"编码"属性
	 *@param goodscode 实体的Goodscode属性
	 */
	public void setGoodscode(String goodscode)
	{
		this.goodscode = goodscode;
	}
	
	/**
	 *获取"编码"属性
	 */
	public String getGoodscode()
	{
		return this.goodscode;
	}	   

	/**
	 *设置"名称"属性
	 *@param goodsname 实体的Goodsname属性
	 */
	public void setGoodsname(String goodsname)
	{
		this.goodsname = goodsname;
	}
	
	/**
	 *获取"名称"属性
	 */
	public String getGoodsname()
	{
		return this.goodsname;
	}	   

	/**
	 *设置"分类"属性
	 *@param goodsclass 实体的Goodsclass属性
	 */
	public void setGoodsclass(String goodsclass)
	{
		this.goodsclass = goodsclass;
	}
	
	/**
	 *获取"分类"属性
	 */
	public String getGoodsclass()
	{
		return this.goodsclass;
	}	   

	/**
	 *设置"现价"属性
	 *@param goodsprice 实体的Goodsprice属性
	 */
	public void setGoodsprice(String goodsprice)
	{
		this.goodsprice = goodsprice;
	}
	
	/**
	 *获取"现价"属性
	 */
	public String getGoodsprice()
	{
		return this.goodsprice;
	}	   

	/**
	 *设置"原价"属性
	 *@param goodsorgprice 实体的Goodsorgprice属性
	 */
	public void setGoodsorgprice(String goodsorgprice)
	{
		this.goodsorgprice = goodsorgprice;
	}
	
	/**
	 *获取"原价"属性
	 */
	public String getGoodsorgprice()
	{
		return this.goodsorgprice;
	}	   

	/**
	 *设置"照片"属性
	 *@param goodsimage 实体的Goodsimage属性
	 */
	public void setGoodsimage(String goodsimage)
	{
		this.goodsimage = goodsimage;
	}
	
	/**
	 *获取"照片"属性
	 */
	public String getGoodsimage()
	{
		return this.goodsimage;
	}	   

	/**
	 *设置"备注"属性
	 *@param goodsdetail 实体的Goodsdetail属性
	 */
	public void setGoodsdetail(String goodsdetail)
	{
		this.goodsdetail = goodsdetail;
	}
	
	/**
	 *获取"备注"属性
	 */
	public String getGoodsdetail()
	{
		return this.goodsdetail;
	}	   

	/**
	 *设置"状态"属性
	 *@param goodsstatue 实体的Goodsstatue属性
	 */
	public void setGoodsstatue(String goodsstatue)
	{
		this.goodsstatue = goodsstatue;
	}
	
	/**
	 *获取"状态"属性
	 */
	public String getGoodsstatue()
	{
		return this.goodsstatue;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param createtime 实体的Createtime属性
	 */
	public void setCreatetime(String createtime)
	{
		this.createtime = createtime;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getCreatetime()
	{
		return this.createtime;
	}	   

	/**
	 *设置"创建人"属性
	 *@param creator 实体的Creator属性
	 */
	public void setCreator(String creator)
	{
		this.creator = creator;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getCreator()
	{
		return this.creator;
	}	   

	/**
	 *设置"更新时间"属性
	 *@param updtime 实体的Updtime属性
	 */
	public void setUpdtime(String updtime)
	{
		this.updtime = updtime;
	}
	
	/**
	 *获取"更新时间"属性
	 */
	public String getUpdtime()
	{
		return this.updtime;
	}	   

	/**
	 *设置"更新人"属性
	 *@param updor 实体的Updor属性
	 */
	public void setUpdor(String updor)
	{
		this.updor = updor;
	}
	
	/**
	 *获取"更新人"属性
	 */
	public String getUpdor()
	{
		return this.updor;
	}	   
	public Goods() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Goods(
		String goodsid
	 	,String goodscode
	 	,String goodsname
	 	,String goodsclass
	 	,String goodsprice
	 	,String goodsorgprice
	 	,String goodsimage
	 	,String goodsdetail
	 	,String goodsstatue
	 	,String createtime
	 	,String creator
	 	,String updtime
	 	,String updor
		 ){
		super();
		this.goodsid = goodsid;
	 	this.goodscode = goodscode;
	 	this.goodsname = goodsname;
	 	this.goodsclass = goodsclass;
	 	this.goodsprice = goodsprice;
	 	this.goodsorgprice = goodsorgprice;
	 	this.goodsimage = goodsimage;
	 	this.goodsdetail = goodsdetail;
	 	this.goodsstatue = goodsstatue;
	 	this.createtime = createtime;
	 	this.creator = creator;
	 	this.updtime = updtime;
	 	this.updor = updor;
	}
}

