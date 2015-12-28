function selectStadium() {
	var Stadiumclassify = "场馆";
	var Stadiumtitle = "当前位置:业务管理》" + Stadiumclassify;
	var Stadiumaction = "StadiumAction.do";
	var Stadiumfields = ['stadiumid'
	        			    ,'stadiumcode' 
	        			    ,'stadiumname' 
	        			    ,'stadiumaddress' 
	        			    ,'stadiumdetail' 
	        			    ,'stadiumstatue' 
	        			    ,'stadiumx' 
	        			    ,'stadiumy' 
	        			      ];// 全部字段
	var Stadiumkeycolumn = [ 'stadiumid' ];// 主键
	var Stadiumstore = dataStore(Stadiumfields, basePath + Stadiumaction + "?method=selQuery");// 定义Stadiumstore
	var Stadiumsm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Stadiumcm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Stadiumsm, {// 改
			header : 'ID',
			dataIndex : 'stadiumid',
			hidden : true
		}
		, {
			header : '编码',
			dataIndex : 'stadiumcode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '名称',
			dataIndex : 'stadiumname',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '地址',
			dataIndex : 'stadiumaddress',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'stadiumdetail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'stadiumstatue',
			align : 'center',
			width : 80,
			sortable : true
		}
		]
	});
	
	var Stadiumbbar = pagesizebar(Stadiumstore);//定义分页
	var Stadiumgrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		store : Stadiumstore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Stadiumcm,
		sm : Stadiumsm,
		bbar : Stadiumbbar,
		tbar : [{
				xtype : 'textfield',
				id : 'query'+Stadiumaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Stadiumaction).getValue()) {
								Stadiumstore.load();
							} else {
								Stadiumstore.load({
									params : {
										query : Ext.getCmp("query"+Stadiumaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Stadiumgrid.region = 'center';
	Stadiumstore.load();//加载数据
	Stadiumstore.on("beforeload",function(){ 
		Stadiumstore.baseParams = {
				query : Ext.getCmp("query"+Stadiumaction).getValue()
		}; 
	});
	var selectgridWindow = new Ext.Window({
		layout : 'fit', // 设置窗口布局模式
		width : 620, // 窗口宽度
		height : document.body.clientHeight -4, // 窗口高度
		modal : true,
		//closeAction: 'hide',
		closable : true, // 是否可关闭
		collapsible : true, // 是否可收缩
		maximizable : true, // 设置是否可以最大化
		border : false, // 边框线设置
		constrain : true, // 设置窗口是否可以溢出父容器
		animateTarget : Ext.getBody(),
		pageY : 50, // 页面定位Y坐标
		pageX : document.body.clientWidth / 2 - 620 / 2, // 页面定位X坐标
		items : Stadiumgrid, // 嵌入的表单面板
		buttons : [
					{
						text : '确定',
						iconCls : 'ok',
						handler : function() {
							var selectRows = Stadiumgrid.getSelectionModel()
									.getSelections();
							if (selectRows.length != 1) {
								Ext.Msg.alert('提示', '请选择一条！', function() {
								});
								return;
							}
							Ext.getCmp('Empempstadiumname').setValue(selectRows[0].get("stadiumname"));
							Ext.getCmp('Empempstadium').setValue(selectRows[0].get("stadiumid"));
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
