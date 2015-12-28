package com.server.dao;

import java.util.ArrayList;
import java.sql.Date;

import com.server.pojo.Coach;
import com.server.poco.CoachPoco;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseDao;
import com.system.tools.util.CommonUtil;

/**
 * 教练 持久层
 *@author ZhangRuiLong
 */
public class CoachDao extends BaseDao {
	/**
    * 模糊查询语句
    * @param query
    * @return "filedname like '%query%' or ..."
    */
    public String getQuerysql(String query) {
    	if(CommonUtil.isEmpty(query)) return null;
    	String querysql = "";
    	String queryfieldname[] = CoachPoco.QUERYFIELDNAME;
    	for(int i=0;i<queryfieldname.length;i++){
    		querysql += queryfieldname[i] + " like '%" + query + "%' or ";
    	}
		return querysql.substring(0, querysql.length() - 4);
	};
}