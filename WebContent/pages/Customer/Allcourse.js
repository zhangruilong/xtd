function selectAllcourse(customerid ) {
	var Allcourseclassify = "私教课";
	var Allcoursetitle = "当前位置:业务管理》" + Allcourseclassify;
	var Allcourseaction = "AllcourseAction.do";
	var Allcoursefields = ['allcourseid'
	        			    ,'allcoursecoach' 
	        			    ,'allcoursename' 
	        			    ,'allcourseproject' 
	        			    ,'allcoursenum' 
	        			    ,'allcoursemoney' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'updtime' 
	        			    ,'updor' 
	        			    ,'coachcode' 
	        			    ,'coachname' 
	        			    ,'coachphone' 
	        			      ];// 全部字段
	var Allcoursekeycolumn = [ 'allcourseid' ];// 主键
	var Allcoursestore = dataStore(Allcoursefields, basePath + "AllcourseviewAction.do?method=selQuery");// 定义Allcoursestore
	var Allcoursesm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Allcoursecm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Allcoursesm, {// 改
			header : 'ID',
			dataIndex : 'allcourseid',
			hidden : true
		}
		, {
			header : '教练',
			dataIndex : 'allcoursecoach',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '教练编码',
			dataIndex : 'coachcode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '教练姓名',
			dataIndex : 'coachname',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '教练手机',
			dataIndex : 'coachphone',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '课程',
			dataIndex : 'allcoursename',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '项目',
			dataIndex : 'allcourseproject',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '课时',
			dataIndex : 'allcoursenum',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '费用',
			dataIndex : 'allcoursemoney',
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
	
	var Allcoursebbar = pagesizebar(Allcoursestore);//定义分页
	var Allcoursegrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		store : Allcoursestore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Allcoursecm,
		sm : Allcoursesm,
		bbar : Allcoursebbar,
		tbar : [{
				xtype : 'textfield',
				id : 'query'+Allcourseaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Allcourseaction).getValue()) {
								Allcoursestore.load();
							} else {
								Allcoursestore.load({
									params : {
										query : Ext.getCmp("query"+Allcourseaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Allcoursegrid.region = 'center';
	Allcoursestore.load();//加载数据
	Allcoursestore.on("beforeload",function(){ 
		Allcoursestore.baseParams = {
				query : Ext.getCmp("query"+Allcourseaction).getValue()
		}; 
	});
	var selectgridWindow = new Ext.Window({
		layout : 'fit', // 设置窗口布局模式
		width : 820, // 窗口宽度
		height : 580, // 窗口高度
		modal : true,
		title : Allcoursetitle,
		closeAction: 'hide',
		closable : true, // 是否可关闭
		collapsible : true, // 是否可收缩
		maximizable : true, // 设置是否可以最大化
		border : false, // 边框线设置
		constrain : true, // 设置窗口是否可以溢出父容器
		animateTarget : Ext.getBody(),
		pageY : 50, // 页面定位Y坐标
		pageX : document.body.clientWidth / 2 - 820 / 2, // 页面定位X坐标
		items : Allcoursegrid, // 嵌入的表单面板
		buttons : [
					{
						text : '确定',
						iconCls : 'ok',
						handler : function() {
							var selectRows = Allcoursegrid.getSelectionModel()
									.getSelections();
							if (selectRows.length != 1) {
								Ext.Msg.alert('提示', '请选择一条！', function() {
								});
								return;
							}
							var json = "[{'mycoursecoach':'"+selectRows[0].data['allcoursecoach']
							        			    +"','mycoursecustomer':'"+customerid
													+"','mycoursename':'"+selectRows[0].data['allcoursename']
							        			    +"','mycourseproject':'"+selectRows[0].data['allcourseproject']
							        			    +"','mycoursenum':'"+selectRows[0].data['allcoursenum']
							        			    +"','mycoursemoney':'"+selectRows[0].data['allcoursemoney']
							        			    +"'}]";
							Ext.Ajax.request({
								url : basePath + "MycourseAction.do?method=insAll",
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
