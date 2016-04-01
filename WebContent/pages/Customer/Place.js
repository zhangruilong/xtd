function selectPlace(customerid,cuscardid) {	
	var Placetimeaction = "PlacetimeAction.do";
	var Placetimefields = ['placetimeid'
	        			    ,'placetimecode' 
	        			    ,'placetimename' 
	        			    ,'placetimedetail' 
	        			    ,'placetimestatue' 
	        			    ,'placetimebegin' 
	        			    ,'placetimeend' 
	        			    ,'placetimeproject' 
	        			      ];// 全部字段
	var Placetimestore = dataStore(Placetimefields, basePath + Placetimeaction + "?method=selAll");// 定义Placetimestore
	
	var Placeclassify = "场地";
	var Placetitle = "当前位置:业务管理》" + Placeclassify;
	var Placeaction = "PlaceAction.do";
	var Placefields = ['placeid'
	        			    ,'placestadium' 
	        			    ,'placecode' 
	        			    ,'placename' 
	        			    ,'placepeople' 
	        			    ,'placedetail' 
	        			    ,'placestatue' 
	        			    ,'placebegin' 
	        			    ,'placeend' 
	        			    ,'placeproject' 
	        			      ];// 全部字段
	var Placekeycolumn = [ 'placeid' ];// 主键
	var Placestore = dataStore(Placefields, basePath + Placeaction + "?method=selQuery");// 定义Placestore
	var Placesm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Placecm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Placesm, {// 改
			header : 'ID',
			dataIndex : 'placeid',
			hidden : true
		}
		, {
			header : '场馆ID',
			dataIndex : 'placestadium',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '编码',
			dataIndex : 'placecode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '名称',
			dataIndex : 'placename',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'placedetail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'placestatue',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '项目',
			dataIndex : 'placeproject',
			align : 'center',
			width : 80,
			hidden : true
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
			anchor : '95%',
			listeners : {'select':function(){
				Placetimestore.load({params:{
					wheresql : "placetimeproject='"+Ext.getCmp('projectname').value+"'"
				}});
				Ext.getCmp('Placetimeplacetimedetail').focus();
			}
			}
		},'-',{
			xtype : 'combo',
			emptyText : '请选择',
			store : Placetimestore,
			mode : 'local',
			triggerAction : 'all',
			editable : false,
			allowBlank : false,
			displayField : 'placetimedetail',
			valueField : 'placetimedetail',
			hiddenName : 'placetimedetail',
			id : 'Placetimeplacetimedetail',
			name : 'placetimedetail',
			maxLength : 50,
			anchor : '95%'
		},'->',{
			text : "查询",
			iconCls : 'select',
			handler : function() {
				Placestore.load({params:{
					query : Ext.getCmp('Placeplaceproject').value
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
//		closeAction: 'hide',
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
							
							var json = "[{'appointcustomer':'"+customerid
		        			    +"','appointplace':'"+selectRows[0].data['placeid']
								+"','appointplacename':'"+selectRows[0].data['placename']
		        			    +"','appointcard':'"+cuscardid
		        			    +"','appointproject':'"+selectRows[0].data['placeproject']
								+"','appointdetail':'"+Ext.getCmp('Placetimeplacetimedetail').value
		        			    +"'}]";
							Ext.Ajax.request({
								url : basePath + "AppiontAction.do?method=insAll",
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