function selectCustomer(cuscard) {
	var Customerclassify = "会员";
	var Customertitle = "当前位置:业务管理》" + Customerclassify;
	var Customeraction = "CustomerAction.do";
	var Customerfields = ['customerid'
	        			    ,'customerstadium' 
	        			    ,'customercode' 
	        			    ,'openid' 
	        			    ,'customername' 
	        			    ,'customersex' 
	        			    ,'customerage' 
	        			    ,'customercdcard' 
	        			    ,'customerhome' 
	        			    ,'customercompany' 
	        			    ,'customerphone' 
	        			    ,'customerbirthday' 
	        			    ,'customergoodday' 
	        			    ,'customeremail' 
	        			    ,'customerhow' 
	        			    ,'customertime' 
	        			    ,'customerimage' 
	        			    ,'customeremp' 
	        			    ,'customerlevel' 
	        			    ,'customerdetail' 
	        			    ,'customerstatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'updtime' 
	        			    ,'updor' 
	        			    ,'stadiumid' 
	        			    ,'stadiumcode' 
	        			    ,'stadiumname' 
	        			    ,'stadiumaddress' 
	        			    ,'stadiumdetail' 
	        			    ,'stadiumstatue' 
	        			    ,'stadiumx' 
	        			    ,'stadiumy' 
	        			      ];// 全部字段
	var Customerkeycolumn = [ 'customerid' ];// 主键
	var Customerstore = dataStore(Customerfields, basePath + "CustomerviewAction.do?method=selQuery");// 定义Customerstore
	var Customersm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Customercm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Customersm, {// 改
			header : 'ID',
			dataIndex : 'customerid',
			hidden : true
		}
		, {
			header : '场馆ID',
			dataIndex : 'customerstadium',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '场馆',
			dataIndex : 'stadiumname',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '编码',
			dataIndex : 'customercode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : 'OPENID',
			dataIndex : 'openid',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '姓名',
			dataIndex : 'customername',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '性别',
			dataIndex : 'customersex',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '年龄',
			dataIndex : 'customerage',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '身份证',
			dataIndex : 'customercdcard',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '家庭住址',
			dataIndex : 'customerhome',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '单位地址',
			dataIndex : 'customercompany',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '手机',
			dataIndex : 'customerphone',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '生日',
			dataIndex : 'customerbirthday',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '纪念日',
			dataIndex : 'customergoodday',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '邮箱',
			dataIndex : 'customeremail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '入会途径',
			dataIndex : 'customerhow',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '入会时间',
			dataIndex : 'customertime',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '照片',
			dataIndex : 'customerimage',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '顾问',
			dataIndex : 'customeremp',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '等级',
			dataIndex : 'customerlevel',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'customerdetail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'customerstatue',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '创建时间',
			dataIndex : 'createtime',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '创建人',
			dataIndex : 'creator',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '更新时间',
			dataIndex : 'updtime',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '更新人',
			dataIndex : 'updor',
			align : 'center',
			width : 80,
			sortable : true
		}
		]
	});
	
	var Customerbbar = pagesizebar(Customerstore);//定义分页
	var Customergrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		store : Customerstore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Customercm,
		sm : Customersm,
		bbar : Customerbbar,
		tbar : [{
				xtype : 'textfield',
				id : 'query'+Customeraction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Customeraction).getValue()) {
								Customerstore.load();
							} else {
								Customerstore.load({
									params : {
										query : Ext.getCmp("query"+Customeraction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Customergrid.region = 'center';
	Customerstore.on("beforeload",function(){ 
		Customerstore.baseParams = {
				query : Ext.getCmp("query"+Customeraction).getValue()
		}; 
	});
	Customerstore.load();//加载数据
	var selectgridWindow = new Ext.Window({
		layout : 'fit', // 设置窗口布局模式
		width : 620, // 窗口宽度
		height : document.body.clientHeight -4, // 窗口高度
		modal : true,
		title : Customertitle,
		//closeAction: 'hide',
		closable : true, // 是否可关闭
		collapsible : true, // 是否可收缩
		maximizable : true, // 设置是否可以最大化
		border : false, // 边框线设置
		constrain : true, // 设置窗口是否可以溢出父容器
		animateTarget : Ext.getBody(),
		pageY : 50, // 页面定位Y坐标
		pageX : document.body.clientWidth / 2 - 620 / 2, // 页面定位X坐标
		items : Customergrid, // 嵌入的表单面板
		buttons : [
					{
						text : '确定',
						iconCls : 'ok',
						handler : function() {
							var selectRows = Customergrid.getSelectionModel()
									.getSelections();
							if (selectRows.length != 1) {
								Ext.Msg.alert('提示', '请选择一条！', function() {
								});
								return;
							}
							var customerid = selectRows[0].get("customerid");
							var json = "[{'cuscardcustomer':'"+cuscard.data['cuscardcustomer']
		        			    +"','cuscardcustomernew':'"+customerid
		        			    +"','cuscardtype':'"+cuscard.data['cuscardtype']
		        			    +"','cuscardno':'"+cuscard.data['cuscardno']
		        			    +"','cuscardpsw':'"+cuscard.data['cuscardpsw']
								+"','cuscardbegin':'"+cuscard.data['cuscardbegin']
								+"','cuscardend':'"+cuscard.data['cuscardend']
								+"','cuscardmoney':'"+cuscard.data['cuscardmoney']
								+"','cuscardnums':'"+cuscard.data['cuscardnums']
								+"','cuscardtimes':'"+cuscard.data['cuscardtimes']
								+"','cuscardint':'"+cuscard.data['cuscardint']
								+"','cuscarddetail':'"+cuscard.data['cuscarddetail']
								+"','cuscardstatue':'"+cuscard.data['cuscardstatue']
								+"','cuscardid':'"+cuscard.data['cuscardid']
		        			    +"'}]";
							Ext.Ajax.request({
								url : basePath + "CuscarduserAction.do?method=guohu",
								method : 'POST',
								params : {
									json : json
								},
								success : function(response) {
									var resp = Ext.decode(response.responseText); 
									Ext.Msg.alert('提示', resp.msg, function(){
										selectgridWindow.close();
									});
								},
								failure : function(response) {
									Ext.Msg.alert('提示', '网络出现问题，请稍后再试');
								}
							});
							selectgridWindow.close();
						}
					}, '-', {
						text : '关闭',
						iconCls : 'close',
						handler : function() {
							selectgridWindow.close();
						}
					}]
	});
	selectgridWindow.show();
}
