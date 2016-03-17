function selectNotes(customerid) {
	var Notesclassify = "消费记录";
	var Notestitle = "当前位置:业务管理》" + Notesclassify;
	var Notesaction = "NotesAction.do";
	var Notesfields = ['notesid'
	        			    ,'notescustomer' 
	        			    ,'notescard' 
	        			    ,'notesplace' 
	        			    ,'notescourse' 
	        			    ,'notesproject' 
	        			    ,'notesbegin' 
	        			    ,'notesend' 
	        			    ,'creator' 
	        			      ];// 全部字段
	var Noteskeycolumn = [ 'notesid' ];// 主键
	var Notesstore = dataStore(Notesfields, basePath + Notesaction + "?method=selQuery");// 定义Notesstore
	var Notessm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Notescm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Notessm, {// 改
			header : 'ID',
			dataIndex : 'notesid',
			hidden : true
		}
		, {
			header : '会员ID',
			dataIndex : 'notescustomer',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '会员卡ID',
			dataIndex : 'notescard',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '场地ID',
			dataIndex : 'notesplace',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '课程ID',
			dataIndex : 'notescourse',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '项目',
			dataIndex : 'notesproject',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '入场时间',
			dataIndex : 'notesbegin',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '离场时间',
			dataIndex : 'notesend',
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
		]
	});
	var NotesdataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'NotesdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Notesnotesid',
				name : 'notesid',
				hidden : true
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员ID',
				id : 'Notesnotescustomer',
				name : 'notescustomer',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员卡ID',
				id : 'Notesnotescard',
				name : 'notescard',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场地ID',
				id : 'Notesnotesplace',
				name : 'notesplace',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课程ID',
				id : 'Notesnotescourse',
				name : 'notescourse',
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
				id : 'Notesnotesproject',
				name : 'notesproject',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '入场时间',
				id : 'Notesnotesbegin',
				name : 'notesbegin',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '离场时间',
				id : 'Notesnotesend',
				name : 'notesend',
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
				id : 'Notescreator',
				name : 'creator',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Notesbbar = pagesizebar(Notesstore);//定义分页
	var Notesgrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Notestitle,
		store : Notesstore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Notescm,
		sm : Notessm,
		bbar : Notesbbar,
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					NotesdataForm.form.reset();
					createWindow(basePath + Notesaction + "?method=insAll", "新增", NotesdataForm, Notesstore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Notesgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Notesaction + "?method=updAll", "修改", NotesdataForm, Notesstore);
					NotesdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Notesgrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Notesaction + "?method=delAll",selections,Notesstore,Noteskeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Notesaction + "?method=impAll","导入",Notesstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Notesaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Notesgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Notesgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条您要上传附件的数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Noteskeycolumn.length;i++){
						fid += selections[0].data[Noteskeycolumn[i]] + ","
					}
					commonAttach(fid, Notesclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'query'+Notesaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Notesaction).getValue()) {
								Notesstore.load();
							} else {
								Notesstore.load({
									params : {
										query : Ext.getCmp("query"+Notesaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Notesgrid.region = 'center';
	Notesstore.on("beforeload",function(){ 
		Notesstore.baseParams = {
				query : Ext.getCmp("query"+Notesaction).getValue(),
				wheresql : "notescustomer='"+customerid+"'"
		}; 
	});
	Notesstore.load();//加载数据
	return Notesgrid;
}
