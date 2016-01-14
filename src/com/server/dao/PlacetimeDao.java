package com.server.dao;

import java.util.ArrayList;
import java.sql.Date;

import com.server.pojo.Placetime;
import com.server.poco.PlacetimePoco;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseDao;
import com.system.tools.util.CommonUtil;

/**
 * 场次 持久层
 *@author ZhangRuiLong
 */
public class PlacetimeDao extends BaseDao {
	/**
    * 模糊查询语句
    * @param query
    * @return "filedname like '%query%' or ..."
    */
    public String getQuerysql(String query) {
    	if(CommonUtil.isEmpty(query)) return null;
    	String querysql = "";
    	String queryfieldname[] = PlacetimePoco.QUERYFIELDNAME;
    	for(int i=0;i<queryfieldname.length;i++){
    		querysql += queryfieldname[i] + " like '%" + query + "%' or ";
    	}
		return querysql.substring(0, querysql.length() - 4);
	};
}