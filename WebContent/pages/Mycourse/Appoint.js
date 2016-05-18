function selectAppoint(customerid) {
	var Appiontclassify = "我的预约";
	var Appionttitle = "当前位置:业务管理》" + Appiontclassify;
	var Appiontaction = "AppiontAction.do";
	var Appiontfields = ['appointid'
	        			    ,'appointcustomer' 
	        			    ,'appointcard' 
	        			    ,'appointplace' 
	        			    ,'appointcourse' 
	        			    ,'appointplacename' 
	        			    ,'appointcoursename' 
	        			    ,'appointcoachname' 
	        			    ,'appointproject' 
	        			    ,'appointbegin' 
	        			    ,'appointend' 
	        			    ,'appointdetail' 
	        			    ,'appointstatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			      ];// 全部字段
	var Appiontkeycolumn = [ 'appointid' ];// 主键
	var Appiontstore = dataStore(Appiontfields, basePath + Appiontaction + "?method=selQuery");// 定义Appiontstore
	var Appiontsm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Appiontcm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Appiontsm, {// 改
			header : 'ID',
			dataIndex : 'appointid',
			hidden : true
		}
		, {
			header : '会员ID',
			dataIndex : 'appointcustomer',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '会员卡ID',
			dataIndex : 'appointcard',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '场地ID',
			dataIndex : 'appointplace',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '课程ID',
			dataIndex : 'appointcourse',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '场馆',
			dataIndex : 'appointcoursename',
			align : 'center',
			width : 100,
			sortable : true
		}
		, {
			header : '场地',
			dataIndex : 'appointplacename',
			align : 'center',
			width : 180,
			sortable : true
		}
		, {
			header : '教练',
			dataIndex : 'appointcoachname',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '项目',
			dataIndex : 'appointproject',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '日期',
			dataIndex : 'appointbegin',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '结束时间',
			dataIndex : 'appointend',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '场次',
			dataIndex : 'appointdetail',
			align : 'center',
			width : 180,
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'appointstatue',
			align : 'center',
			width : 80,
			hidden : true
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
			hidden : true
		}
		]
	});
	var AppiontdataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'AppiontdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Appiontappointid',
				name : 'appointid',
				hidden : true
			} ]
		}
//		, {
//			columnWidth : 1,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '会员ID',
//				id : 'Appiontappointcustomer',
//				name : 'appointcustomer',
//				maxLength : 100,
//				anchor : '95%'
//			} ]
//		}
//		, {
//			columnWidth : 1,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '会员卡ID',
//				id : 'Appiontappointcard',
//				name : 'appointcard',
//				maxLength : 100,
//				anchor : '95%'
//			} ]
//		}
//		, {
//			columnWidth : 1,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '场地ID',
//				id : 'Appiontappointplace',
//				name : 'appointplace',
//				maxLength : 100,
//				anchor : '95%'
//			} ]
//		}
//		, {
//			columnWidth : 1,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '课程ID',
//				id : 'Appiontappointcourse',
//				name : 'appointcourse',
//				maxLength : 100,
//				anchor : '95%'
//			} ]
//		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场地',
				id : 'Appiontappointplacename',
				name : 'appointplacename',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆',
				id : 'Appiontappointcoursename',
				name : 'appointcoursename',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
//		, {
//			columnWidth : 1,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '教练',
//				id : 'Appiontappointcoachname',
//				name : 'appointcoachname',
//				maxLength : 100,
//				anchor : '95%'
//			} ]
//		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '项目',
				id : 'Appiontappointproject',
				name : 'appointproject',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				fieldLabel : '日期',
				id : 'Appiontappointbegin',
				name : 'appointbegin',
				format : 'Y-m-d',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
//		, {
//			columnWidth : 1,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '结束时间',
//				id : 'Appiontappointend',
//				name : 'appointend',
//				maxLength : 100,
//				anchor : '95%'
//			} ]
//		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Appiontappointdetail',
				name : 'appointdetail',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'Appiontappointstatue',
				name : 'appointstatue',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Appiontbbar = pagesizebar(Appiontstore);//定义分页
	var Appiontgrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 30,
		width : '100%',
		store : Appiontstore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Appiontcm,
		sm : Appiontsm,
		bbar : Appiontbbar,
		tbar : [{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Appiontgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createTextWindow(basePath + Appiontaction + "?method=updAll", "修改", AppiontdataForm, Appiontstore);
					AppiontdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Appiontgrid);
				}
			},'->',{
				xtype : 'textfield',
				id : 'query'+Appiontaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Appiontaction).getValue()) {
								Appiontstore.load();
							} else {
								Appiontstore.load({
									params : {
										query : Ext.getCmp("query"+Appiontaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Appiontgrid.region = 'center';
	Appiontstore.on("beforeload",function(){ 
		Appiontstore.baseParams = {
				query : Ext.getCmp("query"+Appiontaction).getValue(),
				wheresql : "appointcustomer='"+customerid+"'"
		}; 
	});
	Appiontstore.load();//加载数据
	
	var selectgridWindow = new Ext.Window({
		layout : 'fit', // 设置窗口布局模式
		width : 820, // 窗口宽度
		height : 580, // 窗口高度
		modal : true,
		title : Appionttitle,
		closeAction: 'hide',
		closable : true, // 是否可关闭
		collapsible : true, // 是否可收缩
		maximizable : true, // 设置是否可以最大化
		border : false, // 边框线设置
		constrain : true, // 设置窗口是否可以溢出父容器
		animateTarget : Ext.getBody(),
		pageY : 50, // 页面定位Y坐标
		pageX : document.body.clientWidth / 2 - 820 / 2, // 页面定位X坐标
		items : Appiontgrid
	});
	selectgridWindow.show();
}
