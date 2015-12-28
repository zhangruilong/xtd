Ext.onReady(function() {
	var Mycourseclassify = "我的私教课";
	var Mycoursetitle = "当前位置:业务管理》" + Mycourseclassify;
	var Mycourseaction = "MycourseAction.do";
	var Mycoursefields = ['mycourseid'
	        			    ,'mycoursecoach' 
	        			    ,'mycourseroject' 
	        			    ,'mycoursenum' 
	        			    ,'mycoursemoney' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'updtime' 
	        			    ,'updor' 
	        			      ];// 全部字段
	var Mycoursekeycolumn = [ 'mycourseid' ];// 主键
	var Mycoursestore = dataStore(Mycoursefields, basePath + Mycourseaction + "?method=selQuery");// 定义Mycoursestore
	var Mycoursesm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Mycoursecm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Mycoursesm, {// 改
			header : 'ID',
			dataIndex : 'mycourseid',
			hidden : true
		}
		, {
			header : '教练',
			dataIndex : 'mycoursecoach',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '项目',
			dataIndex : 'mycourseroject',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '课时',
			dataIndex : 'mycoursenum',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '费用',
			dataIndex : 'mycoursemoney',
			align : 'center',
			width : 80,
			sortable : true
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
			sortable : true
		}
		, {
			header : '更新时间',
			dataIndex : 'updtime',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '更新人',
			dataIndex : 'updor',
			align : 'center',
			width : 80,
			sortable : true
		}
		]
	});
	var MycoursedataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'MycoursedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Mycoursemycourseid',
				name : 'mycourseid',
				hidden : true
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '教练',
				id : 'Mycoursemycoursecoach',
				name : 'mycoursecoach',
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
				id : 'Mycoursemycourseroject',
				name : 'mycourseroject',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课时',
				id : 'Mycoursemycoursenum',
				name : 'mycoursenum',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '费用',
				id : 'Mycoursemycoursemoney',
				name : 'mycoursemoney',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建时间',
				id : 'Mycoursecreatetime',
				name : 'createtime',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '创建人',
				id : 'Mycoursecreator',
				name : 'creator',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '更新时间',
				id : 'Mycourseupdtime',
				name : 'updtime',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '更新人',
				id : 'Mycourseupdor',
				name : 'updor',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Mycoursebbar = pagesizebar(Mycoursestore);//定义分页
	var Mycoursegrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Mycoursetitle,
		store : Mycoursestore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Mycoursecm,
		sm : Mycoursesm,
		bbar : Mycoursebbar,
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					MycoursedataForm.form.reset();
					createWindow(basePath + Mycourseaction + "?method=insAll", "新增", MycoursedataForm, Mycoursestore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Mycoursegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Mycourseaction + "?method=updAll", "修改", MycoursedataForm, Mycoursestore);
					MycoursedataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Mycoursegrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Mycourseaction + "?method=delAll",selections,Mycoursestore,Mycoursekeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Mycourseaction + "?method=impAll","导入",Mycoursestore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Mycourseaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Mycoursegrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Mycoursegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条您要上传附件的数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Mycoursekeycolumn.length;i++){
						fid += selections[0].data[Mycoursekeycolumn[i]] + ","
					}
					commonAttach(fid, Mycourseclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'query'+Mycourseaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Mycourseaction).getValue()) {
								Mycoursestore.load();
							} else {
								Mycoursestore.load({
									params : {
										query : Ext.getCmp("query"+Mycourseaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Mycoursegrid.region = 'center';
	Mycoursestore.load();//加载数据
	Mycoursestore.on("beforeload",function(){ 
		Mycoursestore.baseParams = {
				query : Ext.getCmp("query"+Mycourseaction).getValue()
		}; 
	});
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Mycoursegrid ]
	});
})
