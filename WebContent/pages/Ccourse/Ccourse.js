Ext.onReady(function() {
	var Ccourseclassify = "会员和课程";
	var Ccoursetitle = "当前位置:业务管理》" + Ccourseclassify;
	var Ccourseaction = "CcourseAction.do";
	var Ccoursefields = ['ccourseid'
	        			    ,'ccoursecustomer' 
	        			    ,'ccoursecourse' 
	        			      ];// 全部字段
	var Ccoursekeycolumn = [ 'ccourseid' ];// 主键
	var Ccoursestore = dataStore(Ccoursefields, basePath + Ccourseaction + "?method=selQuery");// 定义Ccoursestore
	var Ccoursesm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Ccoursecm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Ccoursesm, {// 改
			header : 'ID',
			dataIndex : 'ccourseid',
			hidden : true
		}
		, {
			header : '会员',
			dataIndex : 'ccoursecustomer',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '课程',
			dataIndex : 'ccoursecourse',
			align : 'center',
			width : 80,
			sortable : true
		}
		]
	});
	var CcoursedataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CcoursedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Ccourseccourseid',
				name : 'ccourseid',
				hidden : true
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员',
				id : 'Ccourseccoursecustomer',
				name : 'ccoursecustomer',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课程',
				id : 'Ccourseccoursecourse',
				name : 'ccoursecourse',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Ccoursebbar = pagesizebar(Ccoursestore);//定义分页
	var Ccoursegrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Ccoursetitle,
		store : Ccoursestore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Ccoursecm,
		sm : Ccoursesm,
		bbar : Ccoursebbar,
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					CcoursedataForm.form.reset();
					createWindow(basePath + Ccourseaction + "?method=insAll", "新增", CcoursedataForm, Ccoursestore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Ccoursegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Ccourseaction + "?method=updAll", "修改", CcoursedataForm, Ccoursestore);
					CcoursedataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Ccoursegrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Ccourseaction + "?method=delAll",selections,Ccoursestore,Ccoursekeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Ccourseaction + "?method=impAll","导入",Ccoursestore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Ccourseaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Ccoursegrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Ccoursegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条您要上传附件的数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Ccoursekeycolumn.length;i++){
						fid += selections[0].data[Ccoursekeycolumn[i]] + ","
					}
					commonAttach(fid, Ccourseclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'query'+Ccourseaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Ccourseaction).getValue()) {
								Ccoursestore.load();
							} else {
								Ccoursestore.load({
									params : {
										query : Ext.getCmp("query"+Ccourseaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Ccoursegrid.region = 'center';
	Ccoursestore.load();//加载数据
	Ccoursestore.on("beforeload",function(){ 
		Ccoursestore.baseParams = {
				query : Ext.getCmp("query"+Ccourseaction).getValue()
		}; 
	});
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Ccoursegrid ]
	});
})
