Ext.onReady(function() {
	var Allcourseclassify = "私教课";
	var Allcoursetitle = "当前位置:业务管理》" + Allcourseclassify;
	var Allcourseaction = "AllcourseAction.do";
	var Allcoursefields = ['allcourseid'
	        			    ,'allcoursecoach' 
	        			    ,'allcoursename'
	        			    ,'allcourseproject' 
	        			    ,'allcoursenum' 
	        			    ,'allcoursemoney' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'updtime' 
	        			    ,'updor' 
	        			    ,'coachcode' 
	        			    ,'coachname' 
	        			    ,'coachphone' 
	        			      ];// 全部字段
	var Allcoursekeycolumn = [ 'allcourseid' ];// 主键
	var Allcoursestore = dataStore(Allcoursefields, basePath + "AllcourseviewAction.do?method=selQuery");// 定义Allcoursestore
	var Allcoursesm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Allcoursecm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Allcoursesm, {// 改
			header : 'ID',
			dataIndex : 'allcourseid',
			hidden : true
		}
		, {
			header : '教练',
			dataIndex : 'allcoursecoach',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '教练编码',
			dataIndex : 'coachcode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '教练姓名',
			dataIndex : 'coachname',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '教练手机',
			dataIndex : 'coachphone',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '课程',
			dataIndex : 'allcoursename',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '项目',
			dataIndex : 'allcourseproject',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '课时',
			dataIndex : 'allcoursenum',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '费用',
			dataIndex : 'allcoursemoney',
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
	var AllcoursedataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'AllcoursedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Allcourseallcourseid',
				name : 'allcourseid',
				hidden : true
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '教练',
				id : 'Allcourseallcoursecoach',
				name : 'allcoursecoach',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : .9,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '教练',
				id : 'Allcourseallcoursecoachname',
				name : 'coachname',
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
				handler : selectCoach.createCallback(),
				scope : this,
				anchor : '25%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '项目',
				id : 'Allcourseallcourseproject',
				name : 'allcourseproject',
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
				id : 'Allcourseallcoursename',
				name : 'allcoursename',
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
				id : 'Allcourseallcoursenum',
				name : 'allcoursenum',
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
				id : 'Allcourseallcoursemoney',
				name : 'allcoursemoney',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Allcoursebbar = pagesizebar(Allcoursestore);//定义分页
	var Allcoursegrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Allcoursetitle,
		store : Allcoursestore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Allcoursecm,
		sm : Allcoursesm,
		bbar : Allcoursebbar,
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					AllcoursedataForm.form.reset();
					createWindow(basePath + Allcourseaction + "?method=insAll", "新增", AllcoursedataForm, Allcoursestore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Allcoursegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Allcourseaction + "?method=updAll", "修改", AllcoursedataForm, Allcoursestore);
					AllcoursedataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Allcoursegrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Allcourseaction + "?method=delAll",selections,Allcoursestore,Allcoursekeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Allcourseaction + "?method=impAll","导入",Allcoursestore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Allcourseaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Allcoursegrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Allcoursegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条您要上传附件的数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Allcoursekeycolumn.length;i++){
						fid += selections[0].data[Allcoursekeycolumn[i]] + ","
					}
					commonAttach(fid, Allcourseclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'query'+Allcourseaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Allcourseaction).getValue()) {
								Allcoursestore.load();
							} else {
								Allcoursestore.load({
									params : {
										query : Ext.getCmp("query"+Allcourseaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Allcoursegrid.region = 'center';
	Allcoursestore.load();//加载数据
	Allcoursestore.on("beforeload",function(){ 
		Allcoursestore.baseParams = {
				query : Ext.getCmp("query"+Allcourseaction).getValue()
		}; 
	});
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Allcoursegrid ]
	});
})
