Ext.onReady(function() {
	var Placetimeclassify = "排课";
	var Placetimetitle = "当前位置:业务管理》" + Placetimeclassify;
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
	var Placetimekeycolumn = [ 'placetimeid' ];// 主键
	var Placetimestore = dataStore(Placetimefields, basePath + Placetimeaction + "?method=selQuery");// 定义Placetimestore
	var Placetimesm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Placetimecm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Placetimesm, {// 改
			header : 'ID',
			dataIndex : 'placetimeid',
			hidden : true
		}
		, {
			header : '场馆',
			dataIndex : 'placetimename',
			align : 'center',
			width : 120,
			sortable : true
		}
		, {
			header : '场地',
			dataIndex : 'placetimecode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'placetimedetail',
			align : 'center',
			width : 180,
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'placetimestatue',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '日期',
			dataIndex : 'placetimebegin',
			align : 'center',
			width : 90,
			sortable : true
		}
//		, {
//			header : '结束时间',
//			dataIndex : 'placetimeend',
//			align : 'center',
//			width : 80,
//			sortable : true
//		}
		, {
			header : '项目',
			dataIndex : 'placetimeproject',
			align : 'center',
			width : 80,
			sortable : true
		}
		]
	});
	var PlacetimedataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'PlacetimedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Placetimeplacetimeid',
				name : 'placetimeid',
				hidden : true
			} ]
		}
		, {
			columnWidth : .9,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场地',
				id : 'Placetimeplacetimecode',
				name : 'placetimecode',
				readOnly:true,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : .1,
			layout : 'form',
			items : [ {
				xtype : 'button',
				iconCls : 'select',
				maxLength : 100,
				handler : selectPlace.createCallback(),
				scope : this,
				anchor : '25%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆',
				id : 'Placetimeplacetimename',
				name : 'placetimename',
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
				hiddenName : 'placetimestatue',
				fieldLabel : '状态',
				id : 'Placetimeplacetimestatue',
				name : 'placetimestatue',
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
				id : 'Placetimeplacetimedetail',
				name : 'placetimedetail',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				fieldLabel : '开始时间',
				id : 'Placetimeplacetimebegin',
				name : 'placetimebegin',
				format : 'Y-m-d',
				allowBlank : false,
				maxLength : 100,
				anchor : '95%'
			} ]
		}
//		, {
//			columnWidth : 1,
//			layout : 'form',
//			items : [ {
//				xtype : 'timefield',
//				fieldLabel : '结束时间',
//				id : 'Placetimeplacetimeend',
//				name : 'placetimeend',
//				maxLength : 100,
//				anchor : '95%'
//			} ]
//		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'combo',
				emptyText : '请选择',
				store : projectStore,
				mode : 'local',
				triggerAction : 'all',
				editable : false,
				allowBlank : false,
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'placetimeproject',
				fieldLabel : '项目',
				id : 'Placetimeplacetimeproject',
				name : 'placetimeproject',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Placetimebbar = pagesizebar(Placetimestore);//定义分页
	var Placetimegrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Placetimetitle,
		store : Placetimestore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Placetimecm,
		sm : Placetimesm,
		bbar : Placetimebbar,
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					PlacetimedataForm.form.reset();
					createWindow(basePath + Placetimeaction + "?method=insAll", "新增", PlacetimedataForm, Placetimestore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Placetimegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Placetimeaction + "?method=updAll", "修改", PlacetimedataForm, Placetimestore);
					PlacetimedataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Placetimegrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Placetimeaction + "?method=delAll",selections,Placetimestore,Placetimekeycolumn);
				}
			},'-',{
				xtype : 'combo',
				emptyText : '请选择',
				store : stadiumStore,
				mode : 'local',
				triggerAction : 'all',
				editable : false,
				allowBlank : false,
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'sstadiumname',
				id : 'sstadiumname',
				name : 'sstadiumname',
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
				hiddenName : 'sprojectname',
				id : 'sprojectname',
				name : 'sprojectname',
				maxLength : 50,
				anchor : '95%'
			},'-',{
				xtype : 'datefield',
				emptyText : '日期',
				id : 'appiontdate',
				name : 'appiontdate',
				maxLength : 100,
				format : 'Y-m-d',
				allowBlank : false,
				anchor : '95%'
			},'-',{
				text : "查询",
				iconCls : 'select',
				handler : function() {
					Placetimestore.load({params:{
						wheresql:"placetimename='"+Ext.getCmp('sstadiumname').value+
						"' and placetimeproject='"+Ext.getCmp('sprojectname').value+
						"' and placetimebegin like '"+Ext.getCmp('appiontdate').value+
						"%'"
					}});
				}
			}
		]
	});
	Placetimegrid.region = 'center';
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Placetimegrid ]
	});
})
