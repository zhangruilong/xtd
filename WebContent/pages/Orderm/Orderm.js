Ext.onReady(function() {
	var Ordermclassify = "订单";
	var Ordermtitle = "当前位置:业务管理》" + Ordermclassify;
	var Ordermaction = "OrdermAction.do";
	var Ordermfields = ['orderid'
	        			    ,'ordercode' 
	        			    ,'ordername' 
	        			    ,'orderclass' 
	        			    ,'ordermoney' 
	        			    ,'orderdiscount' 
	        			    ,'orderrightmoney' 
	        			    ,'orderimage' 
	        			    ,'orderdetail' 
	        			    ,'orderstatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'updtime' 
	        			    ,'updor' 
	        			      ];// 全部字段
	var Ordermkeycolumn = [ 'orderid' ];// 主键
	var Ordermstore = dataStore(Ordermfields, basePath + Ordermaction + "?method=selQuery");// 定义Ordermstore
	var Ordermsm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Ordermcm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Ordermsm, {// 改
			header : 'ID',
			dataIndex : 'orderid',
			hidden : true
		}
		, {
			header : '商品编码',
			dataIndex : 'ordercode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '商品名称',
			dataIndex : 'ordername',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '商品分类',
			dataIndex : 'orderclass',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '下单金额',
			dataIndex : 'ordermoney',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '打折',
			dataIndex : 'orderdiscount',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '实际金额',
			dataIndex : 'orderrightmoney',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '照片',
			dataIndex : 'orderimage',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'orderdetail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'orderstatue',
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
	var OrdermdataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'OrdermdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Ordermorderid',
				name : 'orderid',
				hidden : true
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '商品编码',
				id : 'Ordermordercode',
				name : 'ordercode',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '商品名称',
				id : 'Ordermordername',
				name : 'ordername',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '商品分类',
				id : 'Ordermorderclass',
				name : 'orderclass',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '下单金额',
				id : 'Ordermordermoney',
				name : 'ordermoney',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '打折',
				id : 'Ordermorderdiscount',
				name : 'orderdiscount',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '实际金额',
				id : 'Ordermorderrightmoney',
				name : 'orderrightmoney',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '照片',
				id : 'Ordermorderimage',
				name : 'orderimage',
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
				id : 'Ordermorderdetail',
				name : 'orderdetail',
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
				id : 'Ordermorderstatue',
				name : 'orderstatue',
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
				id : 'Ordermcreatetime',
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
				id : 'Ordermcreator',
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
				id : 'Ordermupdtime',
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
				id : 'Ordermupdor',
				name : 'updor',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Ordermbbar = pagesizebar(Ordermstore);//定义分页
	var Ordermgrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Ordermtitle,
		store : Ordermstore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Ordermcm,
		sm : Ordermsm,
		bbar : Ordermbbar,
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					OrdermdataForm.form.reset();
					createWindow(basePath + Ordermaction + "?method=insAll", "新增", OrdermdataForm, Ordermstore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Ordermgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Ordermaction + "?method=updAll", "修改", OrdermdataForm, Ordermstore);
					OrdermdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Ordermgrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Ordermaction + "?method=delAll",selections,Ordermstore,Ordermkeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Ordermaction + "?method=impAll","导入",Ordermstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Ordermaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Ordermgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Ordermgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条您要上传附件的数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Ordermkeycolumn.length;i++){
						fid += selections[0].data[Ordermkeycolumn[i]] + ","
					}
					commonAttach(fid, Ordermclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'query'+Ordermaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Ordermaction).getValue()) {
								Ordermstore.load();
							} else {
								Ordermstore.load({
									params : {
										query : Ext.getCmp("query"+Ordermaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Ordermgrid.region = 'center';
	Ordermstore.load();//加载数据
	Ordermstore.on("beforeload",function(){ 
		Ordermstore.baseParams = {
				query : Ext.getCmp("query"+Ordermaction).getValue()
		}; 
	});
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Ordermgrid ]
	});
})
