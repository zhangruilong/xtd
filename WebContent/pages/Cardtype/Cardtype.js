Ext.onReady(function() {
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
		, {
			header : '卡余额',
			dataIndex : 'cardtypemoney',
			align : 'center',
			width : 80,
			sortable : true
		}
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
				xtype : 'textfield',
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
				xtype : 'textfield',
				fieldLabel : '价格',
				id : 'Cardtypecardtypeprice',
				name : 'cardtypeprice',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡余额',
				id : 'Cardtypecardtypemoney',
				name : 'cardtypemoney',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
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
				xtype : 'textfield',
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
		title : Cardtypetitle,
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
				text : "新增",
				iconCls : 'add',
				handler : function() {
					CardtypedataForm.form.reset();
					createWindow(basePath + Cardtypeaction + "?method=insAll", "新增", CardtypedataForm, Cardtypestore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Cardtypegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Cardtypeaction + "?method=updAll", "修改", CardtypedataForm, Cardtypestore);
					CardtypedataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Cardtypegrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Cardtypeaction + "?method=delAll",selections,Cardtypestore,Cardtypekeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Cardtypeaction + "?method=impAll","导入",Cardtypestore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Cardtypeaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Cardtypegrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Cardtypegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条您要上传附件的数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Cardtypekeycolumn.length;i++){
						fid += selections[0].data[Cardtypekeycolumn[i]] + ","
					}
					commonAttach(fid, Cardtypeclassify);
				}
			},'->',{
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
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Cardtypegrid ]
	});
})
