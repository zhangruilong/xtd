function selectPlace() {
	var Placeclassify = "场地";
	var Placetitle = "当前位置:业务管理》" + Placeclassify;
	var Placeaction = "PlacetimeviewAction.do";
	var Placefields = ['stadiumid'
       			    ,'stadiumname' 
    			    ,'placecode'
    			    ,'placeproject' 
	        			      ];// 全部字段
	var Placekeycolumn = [ 'stadiumid' ];// 主键
	var Placestore = dataStore(Placefields, basePath + Placeaction + "?method=selQuery");// 定义Placestore
	var Placesm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Placecm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Placesm, {// 改
			header : 'ID',
			dataIndex : 'placeid',
			hidden : true
		}
		, {
			header : '场馆',
			dataIndex : 'stadiumname',
			align : 'center',
			width : 180,
			sortable : true
		}
		, {
			header : '场地',
			dataIndex : 'placecode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '项目',
			dataIndex : 'placeproject',
			sortable : true
		}
		]
	});
	
	var Placegrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		store : Placestore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Placecm,
		sm : Placesm,
		tbar : [{
			xtype : 'combo',
			emptyText : '请选择',
			store : stadiumStore,
			mode : 'local',
			triggerAction : 'all',
			editable : false,
			allowBlank : false,
			displayField : 'name',
			valueField : 'name',
			hiddenName : 'stadiumname',
			id : 'stadiumname',
			name : 'stadiumname',
			maxLength : 50,
			anchor : '95%'
		},'-',{
			xtype : 'combo',
			emptyText : '请选择',
			store : projectStore,
			mode : 'local',
			triggerAction : 'all',
			editable : false,
			allowBlank : false,
			displayField : 'name',
			valueField : 'name',
			hiddenName : 'placeproject',
			id : 'Placeplaceproject',
			name : 'placeproject',
			maxLength : 50,
			anchor : '95%'
		},'->',{
			text : "查询",
			iconCls : 'select',
			handler : function() {
				Placestore.load({params:{
					wheresql : "placeproject='"+Ext.getCmp('Placeplaceproject').value+
					"' and stadiumname='"+Ext.getCmp('stadiumname').value+"'"
				}});
			}
		}
	]
	});
	Placegrid.region = 'center';
	
	var selectgridWindow = new Ext.Window({
		layout : 'fit', // 设置窗口布局模式
		width : 820, // 窗口宽度
		height : 580, // 窗口高度
		modal : true,
		title : Placetitle,
		closeAction: 'hide',
		closable : true, // 是否可关闭
		collapsible : true, // 是否可收缩
		maximizable : true, // 设置是否可以最大化
		border : false, // 边框线设置
		constrain : true, // 设置窗口是否可以溢出父容器
		animateTarget : Ext.getBody(),
		pageY : 50, // 页面定位Y坐标
		pageX : document.body.clientWidth / 2 - 820 / 2, // 页面定位X坐标
		items : Placegrid, // 嵌入的表单面板
		buttons : [
					{
						text : '确定',
						iconCls : 'ok',
						handler : function() {
							var selectRows = Placegrid.getSelectionModel()
									.getSelections();
							if (selectRows.length != 1) {
								Ext.Msg.alert('提示', '请选择一条！', function() {
								});
								return;
							}
							Ext.getCmp('Placetimeplacetimename').setValue(selectRows[0].get("stadiumname"));
							Ext.getCmp('Placetimeplacetimecode').setValue(selectRows[0].get("placecode"));
							Ext.getCmp('Placetimeplacetimeproject').setValue(selectRows[0].get("placeproject"));
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
