Ext.onReady(function() {
	var Ticketclassify = "体验劵核销记录";
	var Tickettitle = "当前位置:业务管理》" + Ticketclassify;
	var Ticketaction = "TicketAction.do";
	var Ticketfields = ['ticketid'
	        			    ,'ticketcustomer' 
	        			    ,'ticketcode' 
	        			    ,'ticketdetail' 
	        			    ,'ticketbegin' 
	        			    ,'ticketend' 
	        			      ];// 全部字段
	var Ticketkeycolumn = [ 'ticketid' ];// 主键
	var Ticketstore = dataStore(Ticketfields, basePath + Ticketaction + "?method=selQuery");// 定义Ticketstore
	var Ticketsm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Ticketcm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Ticketsm, {// 改
			header : 'ID',
			dataIndex : 'ticketid',
			hidden : true
		}
		, {
			header : '会员ID',
			dataIndex : 'ticketcustomer',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '券号',
			dataIndex : 'ticketcode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'ticketdetail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '创建时间',
			dataIndex : 'ticketbegin',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '创建人',
			dataIndex : 'ticketend',
			align : 'center',
			width : 80,
			sortable : true
		}
		]
	});
	var TicketdataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'TicketdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Ticketticketid',
				name : 'ticketid',
				hidden : true
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员ID',
				id : 'Ticketticketcustomer',
				name : 'ticketcustomer',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '券号',
				id : 'Ticketticketcode',
				name : 'ticketcode',
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
				id : 'Ticketticketdetail',
				name : 'ticketdetail',
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
				id : 'Ticketticketbegin',
				name : 'ticketbegin',
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
				id : 'Ticketticketend',
				name : 'ticketend',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Ticketbbar = pagesizebar(Ticketstore);//定义分页
	var Ticketgrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Tickettitle,
		store : Ticketstore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Ticketcm,
		sm : Ticketsm,
		bbar : Ticketbbar,
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					TicketdataForm.form.reset();
					createWindow(basePath + Ticketaction + "?method=insAll", "新增", TicketdataForm, Ticketstore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Ticketgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Ticketaction + "?method=updAll", "修改", TicketdataForm, Ticketstore);
					TicketdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Ticketgrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Ticketaction + "?method=delAll",selections,Ticketstore,Ticketkeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Ticketaction + "?method=impAll","导入",Ticketstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Ticketaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Ticketgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Ticketgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条您要上传附件的数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Ticketkeycolumn.length;i++){
						fid += selections[0].data[Ticketkeycolumn[i]] + ","
					}
					commonAttach(fid, Ticketclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'query'+Ticketaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Ticketaction).getValue()) {
								Ticketstore.load();
							} else {
								Ticketstore.load({
									params : {
										query : Ext.getCmp("query"+Ticketaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Ticketgrid.region = 'center';
	Ticketstore.load();//加载数据
	Ticketstore.on("beforeload",function(){ 
		Ticketstore.baseParams = {
				query : Ext.getCmp("query"+Ticketaction).getValue()
		}; 
	});
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Ticketgrid ]
	});
})
