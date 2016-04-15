function selectCardtype() {
	var Cardtypeclassify = "卡种";
	var Cardtypetitle = "当前位置:业务管理》" + Cardtypeclassify;
	var Cardtypeaction = "CardtypeAction.do";
	var Cardtypefields = ['cardtypeid'
	        			    ,'cardtypecode' 
	        			    ,'cardtypename' 
	        			    ,'cardtypeclass' 
	        			    ,'cardtypeday' 
	        			    ,'cardtypeprice' 
	        			    ,'cardtypemoney' 
	        			    ,'cardtypetimes' 
	        			    ,'cardtypedetail' 
	        			    ,'cardtypestatue' 
	        			      ];// 全部字段
	var Cardtypekeycolumn = [ 'cardtypeid' ];// 主键
	var Cardtypestore = dataStore(Cardtypefields, basePath + Cardtypeaction + "?method=selQuery");// 定义Cardtypestore
	var Cardtypesm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Cardtypecm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Cardtypesm, {// 改
			header : 'ID',
			dataIndex : 'cardtypeid',
			hidden : true
		}
		, {
			header : '编码',
			dataIndex : 'cardtypecode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '名称',
			dataIndex : 'cardtypename',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '分类',
			dataIndex : 'cardtypeclass',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '有效期',
			dataIndex : 'cardtypeday',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '价格',
			dataIndex : 'cardtypeprice',
			align : 'center',
			width : 80,
			sortable : true
		}
//		, {
//			header : '卡余额',
//			dataIndex : 'cardtypemoney',
//			align : 'center',
//			width : 80,
//			sortable : true
//		}
		, {
			header : '卡余次',
			dataIndex : 'cardtypetimes',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'cardtypedetail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'cardtypestatue',
			align : 'center',
			width : 80,
			sortable : true
		}
		]
	});
	var CardtypedataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CardtypedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Cardtypecardtypeid',
				name : 'cardtypeid',
				hidden : true
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Cardtypecardtypecode',
				name : 'cardtypecode',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '名称',
				id : 'Cardtypecardtypename',
				name : 'cardtypename',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'combo',
				emptyText : '请选择',
				store : cardStore,
				mode : 'local',
				triggerAction : 'all',
				editable : false,
				allowBlank : false,
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'cardtypeclass',
				fieldLabel : '分类',
				id : 'Cardtypecardtypeclass',
				name : 'cardtypeclass',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '有效期',
				id : 'Cardtypecardtypeday',
				name : 'cardtypeday',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'numberfield',
				fieldLabel : '价格',
				id : 'Cardtypecardtypeprice',
				name : 'cardtypeprice',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
//		, {
//			columnWidth : 1,
//			layout : 'form',
//			items : [ {
//				xtype : 'numberfield',
//				fieldLabel : '卡余额',
//				id : 'Cardtypecardtypemoney',
//				name : 'cardtypemoney',
//				maxLength : 100,
//				anchor : '95%'
//			} ]
//		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'numberfield',
				fieldLabel : '卡余次',
				id : 'Cardtypecardtypetimes',
				name : 'cardtypetimes',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '备注',
				id : 'Cardtypecardtypedetail',
				name : 'cardtypedetail',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'combo',
				emptyText : '请选择',
				store : statueStore,
				mode : 'local',
				triggerAction : 'all',
				editable : false,
				allowBlank : false,
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'cardtypestatue',
				fieldLabel : '状态',
				id : 'Cardtypecardtypestatue',
				name : 'cardtypestatue',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Cardtypebbar = pagesizebar(Cardtypestore);//定义分页
	var Cardtypegrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		store : Cardtypestore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Cardtypecm,
		sm : Cardtypesm,
		bbar : Cardtypebbar,
		tbar : [{
				xtype : 'textfield',
				id : 'query'+Cardtypeaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Cardtypeaction).getValue()) {
								Cardtypestore.load();
							} else {
								Cardtypestore.load({
									params : {
										query : Ext.getCmp("query"+Cardtypeaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Cardtypegrid.region = 'center';
	Cardtypestore.load();//加载数据
	Cardtypestore.on("beforeload",function(){ 
		Cardtypestore.baseParams = {
				query : Ext.getCmp("query"+Cardtypeaction).getValue()
		}; 
	});
	var selectgridWindow = new Ext.Window({
		layout : 'fit', // 设置窗口布局模式
		width : 620, // 窗口宽度
		height : document.body.clientHeight -4, // 窗口高度
		modal : true,
		title : Cardtypetitle,
		//closeAction: 'hide',
		closable : true, // 是否可关闭
		collapsible : true, // 是否可收缩
		maximizable : true, // 设置是否可以最大化
		border : false, // 边框线设置
		constrain : true, // 设置窗口是否可以溢出父容器
		animateTarget : Ext.getBody(),
		pageY : 50, // 页面定位Y坐标
		pageX : document.body.clientWidth / 2 - 620 / 2, // 页面定位X坐标
		items : Cardtypegrid, // 嵌入的表单面板
		buttons : [
					{
						text : '确定',
						iconCls : 'ok',
						handler : function() {
							var selectRows = Cardtypegrid.getSelectionModel()
									.getSelections();
							if (selectRows.length != 1) {
								Ext.Msg.alert('提示', '请选择一条！', function() {
								});
								return;
							} 
							Ext.getCmp('cuscarddetail').setValue(selectRows[0].get("cardtypename"));
							Ext.getCmp('cuscardtype').setValue(selectRows[0].get("cardtypeclass"));
							Ext.getCmp('cuscardpsw').setValue(selectRows[0].get("cardtypeday"));
							Ext.getCmp('cuscardmoney').setValue(selectRows[0].get("cardtypeprice"));
							Ext.getCmp('cuscardnums').setValue(selectRows[0].get("cardtypetimes"));
							Ext.getCmp('cuscardtimes').setValue(selectRows[0].get("cardtypetimes"));
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
