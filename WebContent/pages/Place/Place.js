Ext.onReady(function() {
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
	    			    ,'stadiumid' 
	    			    ,'stadiumcode' 
	    			    ,'stadiumname' 
	    			    ,'stadiumaddress' 
	    			    ,'stadiumdetail' 
	    			    ,'stadiumstatue' 
	    			    ,'stadiumx' 
	    			    ,'stadiumy' 
	    			      ];// 全部字段
	var Placekeycolumn = [ 'placeid' ];// 主键
	var Placestore = dataStore(Placefields, basePath + "PlaceviewAction.do?method=selQuery");// 定义Placestore
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
			header : '场馆',
			dataIndex : 'stadiumname',
			align : 'center',
			width : 100,
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
			header : '位置',
			dataIndex : 'placename',
			align : 'center',
			width : 80,
			sortable : true
		}
//		, {
//			header : '人数',
//			dataIndex : 'placepeople',
//			align : 'center',
//			width : 80,
//			sortable : true
//		}
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
//		, {
//			header : '开始时间',
//			dataIndex : 'placebegin',
//			align : 'center',
//			width : 80,
//			sortable : true
//		}
//		, {
//			header : '结束时间',
//			dataIndex : 'placeend',
//			align : 'center',
//			width : 80,
//			sortable : true
//		}
		, {
			header : '项目',
			dataIndex : 'placeproject',
			align : 'center',
			width : 80,
			sortable : true
		}
		]
	});
	var PlacedataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'PlacedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Placeplaceid',
				name : 'placeid',
				hidden : true
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '场馆ID',
				id : 'Placeplacestadium',
				name : 'placestadium',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : .9,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆',
				id : 'stadiumname',
				name : 'stadiumname',
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
				handler : selectStadium.createCallback(),
				scope : this,
				anchor : '25%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场地',
				id : 'Placeplacecode',
				name : 'placecode',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '位置',
				id : 'Placeplacename',
				name : 'placename',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
//		, {
//			columnWidth : 1,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '人数',
//				id : 'Placeplacepeople',
//				name : 'placepeople',
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
				id : 'Placeplacedetail',
				name : 'placedetail',
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
				hiddenName : 'placestatue',
				fieldLabel : '状态',
				id : 'Placeplacestatue',
				name : 'placestatue',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
//		, {
//			columnWidth : 1,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '开始时间',
//				id : 'Placeplacebegin',
//				name : 'placebegin',
//				maxLength : 100,
//				anchor : '95%'
//			} ]
//		}
//		, {
//			columnWidth : 1,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '结束时间',
//				id : 'Placeplaceend',
//				name : 'placeend',
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
				hiddenName : 'placeproject',
				fieldLabel : '项目',
				id : 'Placeplaceproject',
				name : 'placeproject',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Placebbar = pagesizebar(Placestore);//定义分页
	var Placegrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Placetitle,
		store : Placestore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Placecm,
		sm : Placesm,
		bbar : Placebbar,
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					PlacedataForm.form.reset();
					createWindow(basePath + Placeaction + "?method=insAll", "新增", PlacedataForm, Placestore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Placegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Placeaction + "?method=updAll", "修改", PlacedataForm, Placestore);
					PlacedataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Placegrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Placeaction + "?method=delAll",selections,Placestore,Placekeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Placeaction + "?method=impAll","导入",Placestore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Placeaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Placegrid);
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
				hiddenName : 'stadiumname',
				id : 'stadiumname',
				name : 'stadiumname',
				width : 120,
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
				hiddenName : 'projectname',
				id : 'projectname',
				name : 'projectname',
				width : 100,
				maxLength : 50,
				anchor : '95%'
			},'-',{
				xtype : 'textfield',
				id : 'query'+Placeaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100
			},'->',{
				text : "查询",
				iconCls : 'select',
				handler : function() {
					if ("" == Ext.getCmp("query"+Placeaction).getValue()) {
						Placestore.load({
							params : {
								wheresql : "stadiumname='"+Ext.getCmp("stadiumname").getValue()+
								"' and placeproject='"+Ext.getCmp("projectname").getValue()+"'"
							}
						});
					} else {
						Placestore.load({
							params : {
								query : Ext.getCmp("query"+Placeaction).getValue(),
								wheresql : "stadiumname='"+Ext.getCmp("stadiumname").getValue()+
								"' and placeproject='"+Ext.getCmp("projectname").getValue()+"'"
							}
						});
					}
				}
			}
		]
	});
	Placegrid.region = 'center';
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Placegrid ]
	});
})
