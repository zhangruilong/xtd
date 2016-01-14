Ext.onReady(function() {
	var Placetimeclassify = "场次";
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
			header : '编码',
			dataIndex : 'placetimecode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '名称',
			dataIndex : 'placetimename',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'placetimedetail',
			align : 'center',
			width : 80,
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
			header : '开始时间',
			dataIndex : 'placetimebegin',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '结束时间',
			dataIndex : 'placetimeend',
			align : 'center',
			width : 80,
			sortable : true
		}
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
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Placetimeplacetimecode',
				name : 'placetimecode',
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
				xtype : 'textfield',
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
				fieldLabel : '开始时间',
				id : 'Placetimeplacetimebegin',
				name : 'placetimebegin',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '结束时间',
				id : 'Placetimeplacetimeend',
				name : 'placetimeend',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
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
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Placetimeaction + "?method=impAll","导入",Placetimestore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Placetimeaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Placetimegrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Placetimegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条您要上传附件的数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Placetimekeycolumn.length;i++){
						fid += selections[0].data[Placetimekeycolumn[i]] + ","
					}
					commonAttach(fid, Placetimeclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'query'+Placetimeaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Placetimeaction).getValue()) {
								Placetimestore.load();
							} else {
								Placetimestore.load({
									params : {
										query : Ext.getCmp("query"+Placetimeaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Placetimegrid.region = 'center';
	Placetimestore.on("beforeload",function(){ 
		Placetimestore.baseParams = {
				query : Ext.getCmp("query"+Placetimeaction).getValue()
		}; 
	});
	Placetimestore.load();//加载数据
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Placetimegrid ]
	});
})
