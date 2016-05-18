Ext.onReady(function() {
	var Cuscardclassify = "会员卡";
	var Cuscardtitle = "当前位置:业务管理》" + Cuscardclassify;
	var Cuscardaction = "CuscardAction.do";
	var Cuscardfields = ['cuscardid'
	        			    ,'cuscardcustomer' 
	        			    ,'cuscardtype' 
	        			    ,'cuscardno' 
	        			    ,'cuscardpsw' 
	        			    ,'cuscardbegin' 
	        			    ,'cuscardend' 
	        			    ,'cuscardmoney' 
	        			    ,'cuscardnums' 
	        			    ,'cuscardtimes' 
	        			    ,'cuscardint' 
	        			    ,'cuscarddetail' 
	        			    ,'cuscardstatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'updtime' 
	        			    ,'updor' 
	        			    ,'customerstadium' 
	        			    ,'customercode' 
	        			    ,'customername' 
	        			    ,'customerphone' 
	        			      ];// 全部字段
	var Cuscardkeycolumn = [ 'cuscardid' ];// 主键
	var Cuscardstore = dataStore(Cuscardfields, basePath + "CuscardviewAction.do" + "?method=selQuery");// 定义Cuscardstore
	var Cuscardsm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Cuscardcm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Cuscardsm, {// 改
			header : 'ID',
			dataIndex : 'cuscardid',
			hidden : true
		}
		, {
			header : '会员ID',
			dataIndex : 'cuscardcustomer',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '会员编码',
			dataIndex : 'customercode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '会员姓名',
			dataIndex : 'customername',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '会员手机',
			dataIndex : 'customerphone',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '卡号',
			dataIndex : 'cuscardno',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '卡余次',
			dataIndex : 'cuscardtimes',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'cuscarddetail',
			align : 'center',
			width : 80,
			sortable : true
		}
		]
	});
	
	var Cuscardbbar = pagesizebar(Cuscardstore);//定义分页
	var Cuscardgrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		store : Cuscardstore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Cuscardcm,
		sm : Cuscardsm,
		bbar : Cuscardbbar,
		tbar : [{
			text : "售课",
			iconCls : 'add',
			handler : function() {
				var selections = Cuscardgrid.getSelectionModel().getSelections();
				if (selections.length != 1) {
					Ext.Msg.alert('提示', '请选择一条记录！', function() {
					});
					return;
				}
				selectAllcourse(selections[0].data['cuscardcustomer']);
			}
		},'-',{
			text : "预约私教",
			iconCls : 'add',
			handler : function() {
				var selections = Cuscardgrid.getSelectionModel().getSelections();
				if (selections.length != 1) {
					Ext.Msg.alert('提示', '请选择一条记录！', function() {
					});
					return;
				}
				selectMycourse(selections[0].data['cuscardcustomer']);
			}
		},'-',{
			text : "查看预约记录",
			iconCls : 'select',
			handler : function() {
				var selections = Cuscardgrid.getSelectionModel().getSelections();
				if (selections.length != 1) {
					Ext.Msg.alert('提示', '请选择一条记录！', function() {
					});
					return;
				}
				selectAppoint(selections[0].data['cuscardcustomer']);
			}
		},'->',{
				xtype : 'textfield',
				id : 'query'+Cuscardaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Cuscardaction).getValue()) {
								Cuscardstore.load();
							} else {
								Cuscardstore.load({
									params : {
										query : Ext.getCmp("query"+Cuscardaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Cuscardgrid.region = 'center';
	Cuscardstore.load();//加载数据
	Cuscardstore.on("beforeload",function(){ 
		Cuscardstore.baseParams = {
				query : Ext.getCmp("query"+Cuscardaction).getValue()
		}; 
	});
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Cuscardgrid ]
	});
})
