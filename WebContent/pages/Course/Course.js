Ext.onReady(function() {
	var Courseclassify = "每日课程";
	var Coursetitle = "当前位置:业务管理》" + Courseclassify;
	var Courseaction = "CourseAction.do";
	var Coursefields = ['courseid'
	        			    ,'courseplace' 
	        			    ,'coursecoach' 
	        			    ,'coursecode' 
	        			    ,'coursename' 
	        			    ,'coursebegin' 
	        			    ,'courseend' 
	        			    ,'coursedetail' 
	        			    ,'coursestatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'updtime' 
	        			    ,'updor' 
	        			      ];// 全部字段
	var Coursekeycolumn = [ 'courseid' ];// 主键
	var Coursestore = dataStore(Coursefields, basePath + Courseaction + "?method=selQuery");// 定义Coursestore
	var Coursesm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Coursecm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Coursesm, {// 改
			header : 'ID',
			dataIndex : 'courseid',
			hidden : true
		}
		, {
			header : '场地ID',
			dataIndex : 'courseplace',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '教练ID',
			dataIndex : 'coursecoach',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '编码',
			dataIndex : 'coursecode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '名称',
			dataIndex : 'coursename',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '开始时间',
			dataIndex : 'coursebegin',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '结束时间',
			dataIndex : 'courseend',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'coursedetail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'coursestatue',
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
	var CoursedataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CoursedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Coursecourseid',
				name : 'courseid',
				hidden : true
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场地ID',
				id : 'Coursecourseplace',
				name : 'courseplace',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '教练ID',
				id : 'Coursecoursecoach',
				name : 'coursecoach',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Coursecoursecode',
				name : 'coursecode',
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
				id : 'Coursecoursename',
				name : 'coursename',
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
				id : 'Coursecoursebegin',
				name : 'coursebegin',
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
				id : 'Coursecourseend',
				name : 'courseend',
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
				id : 'Coursecoursedetail',
				name : 'coursedetail',
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
				id : 'Coursecoursestatue',
				name : 'coursestatue',
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
				id : 'Coursecreatetime',
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
				id : 'Coursecreator',
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
				id : 'Courseupdtime',
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
				id : 'Courseupdor',
				name : 'updor',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Coursebbar = pagesizebar(Coursestore);//定义分页
	var Coursegrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Coursetitle,
		store : Coursestore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Coursecm,
		sm : Coursesm,
		bbar : Coursebbar,
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					CoursedataForm.form.reset();
					createWindow(basePath + Courseaction + "?method=insAll", "新增", CoursedataForm, Coursestore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Coursegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Courseaction + "?method=updAll", "修改", CoursedataForm, Coursestore);
					CoursedataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Coursegrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Courseaction + "?method=delAll",selections,Coursestore,Coursekeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Courseaction + "?method=impAll","导入",Coursestore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Courseaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Coursegrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Coursegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条您要上传附件的数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Coursekeycolumn.length;i++){
						fid += selections[0].data[Coursekeycolumn[i]] + ","
					}
					commonAttach(fid, Courseclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'query'+Courseaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Courseaction).getValue()) {
								Coursestore.load();
							} else {
								Coursestore.load({
									params : {
										query : Ext.getCmp("query"+Courseaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Coursegrid.region = 'center';
	Coursestore.load();//加载数据
	Coursestore.on("beforeload",function(){ 
		Coursestore.baseParams = {
				query : Ext.getCmp("query"+Courseaction).getValue()
		}; 
	});
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Coursegrid ]
	});
})
