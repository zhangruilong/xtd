function selectCuscard(customerid) {	
	var Cuscardclassify = "会员卡";
	var Cuscardtitle = "当前位置:业务管理》" + Cuscardclassify;
	var Cuscardaction = "CuscardAction.do";
	var Cuscardfields = ['cuscardid'
	        			    ,'cuscardcustomer' 
	        			    ,'cuscardtype' 
	        			    ,'cuscardno' 
	        			    ,'cuscardpsw' 
	        			    ,'cuscardbegin' 
	        			    ,'cuscardend' 
	        			    ,'cuscardmoney' 
	        			    ,'cuscardnums' 
	        			    ,'cuscardtimes' 
	        			    ,'cuscardint' 
	        			    ,'cuscarddetail' 
	        			    ,'cuscardstatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'updtime' 
	        			    ,'updor' 
	        			    ,'customerCuscard' 
	        			    ,'customercode' 
	        			    ,'customername' 
	        			    ,'customerphone' 
	        			      ];// 全部字段
	var Cuscardkeycolumn = [ 'cuscardid' ];// 主键
	var Cuscardstore = dataStore(Cuscardfields, basePath + "CuscardviewAction.do" + "?method=selQuery");// 定义Cuscardstore
	var Cuscardsm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Cuscardcm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Cuscardsm, {// 改
			header : 'ID',
			dataIndex : 'cuscardid',
			hidden : true
		}
		, {
			header : '会员ID',
			dataIndex : 'cuscardcustomer',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '会员编码',
			dataIndex : 'customercode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '会员姓名',
			dataIndex : 'customername',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '会员手机',
			dataIndex : 'customerphone',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '分类',
			dataIndex : 'cuscardtype',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '卡号',
			dataIndex : 'cuscardno',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '有效期',
			dataIndex : 'cuscardpsw',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '有效期开始',
			dataIndex : 'cuscardbegin',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '有效期结束',
			dataIndex : 'cuscardend',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '卡余额',
			dataIndex : 'cuscardmoney',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '卡总次数',
			dataIndex : 'cuscardnums',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '卡余次',
			dataIndex : 'cuscardtimes',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '卡积分',
			dataIndex : 'cuscardint',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'cuscarddetail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'cuscardstatue',
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
	var CuscarddataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CuscarddataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ { 
				xtype : 'textfield',
				id : 'Cuscardcuscardid',
				name : 'cuscardid',
				hidden : true
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '会员ID',
				id : 'Cuscardcuscardcustomer',
				name : 'cuscardcustomer',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : .9,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '分类',
				id : 'Cuscardcuscardtype',
				name : 'cuscardtype',
				maxLength : 100,
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
				handler : selectCardtype.createCallback(),
				scope : this,
				anchor : '25%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡号',
				id : 'Cuscardcuscardno',
				name : 'cuscardno',
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
				id : 'Cuscardcuscardpsw',
				name : 'cuscardpsw',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				fieldLabel : '有效期开始',
				id : 'Cuscardcuscardbegin',
				name : 'cuscardbegin',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'datefield',
				fieldLabel : '有效期结束',
				id : 'Cuscardcuscardend',
				name : 'cuscardend',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'numberfield',
				fieldLabel : '卡余额',
				id : 'Cuscardcuscardmoney',
				name : 'cuscardmoney',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'numberfield',
				fieldLabel : '卡总次数',
				id : 'Cuscardcuscardnums',
				name : 'cuscardnums',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'numberfield',
				fieldLabel : '卡余次',
				id : 'Cuscardcuscardtimes',
				name : 'cuscardtimes',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'numberfield',
				fieldLabel : '卡积分',
				id : 'Cuscardcuscardint',
				name : 'cuscardint',
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
				id : 'Cuscardcuscarddetail',
				name : 'cuscarddetail',
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
				hiddenName : 'cuscardstatue',
				fieldLabel : '状态',
				id : 'Cuscardcuscardstatue',
				name : 'cuscardstatue',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Cuscardbbar = pagesizebar(Cuscardstore);//定义分页
	var Cuscardgrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 30,
		width : '100%',
		
		store : Cuscardstore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Cuscardcm,
		sm : Cuscardsm,
		tbar : [{
				text : "预约场地",
				iconCls : 'add',
				handler : function() {
					var selections = Cuscardgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					selectPlace(customerid,selections[0].data['cuscardid']);
				}
			},'-',{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					CuscarddataForm.form.reset();
					createWindow(basePath + Cuscardaction + "?method=insAll", "新增", CuscarddataForm, Cuscardstore);
					CuscarddataForm.getForm().setValues({Cuscardcuscardcustomer:customerid});
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Cuscardgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Cuscardaction + "?method=updAll", "修改", CuscarddataForm, Cuscardstore);
					CuscarddataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Cuscardgrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Cuscardaction + "?method=delAll",selections,Cuscardstore,Cuscardkeycolumn);
				}
//			},'-',{
//				text : "导入",
//				iconCls : 'imp',
//				handler : function() {
//					commonImp(basePath + Cuscardaction + "?method=impAll","导入",Cuscardstore);
//				}
//			},'-',{
//				text : "后台导出",
//				iconCls : 'exp',
//				handler : function() {
//					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
//						if (btn == 'yes') {
//							window.location.href = basePath + Cuscardaction + "?method=expAll"; 
//						}
//					});
//				}
//			},'-',{
//				text : "前台导出",
//				iconCls : 'exp',
//				handler : function() {
//					commonExp(Cuscardgrid);
//				}
//			},'-',{
//				text : "附件",
//				iconCls : 'attach',
//				handler : function() {
//					var selections = Cuscardgrid.getSelectionModel().getSelections();
//					if (selections.length != 1) {
//						Ext.Msg.alert('提示', '请选择一条您要上传附件的数据！', function() {
//						});
//						return;
//					}
//					var fid = '';
//					for (var i=0;i<Cuscardkeycolumn.length;i++){
//						fid += selections[0].data[Cuscardkeycolumn[i]] + ","
//					}
//					commonAttach(fid, Cuscardclassify);
//				}
			},'->',{
				xtype : 'textfield',
				id : 'query'+Cuscardaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Cuscardaction).getValue()) {
								Cuscardstore.load();
							} else {
								Cuscardstore.load({
									params : {
										query : Ext.getCmp("query"+Cuscardaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Cuscardgrid.region = 'center';
	Cuscardstore.on("beforeload",function(){ 
		Cuscardstore.baseParams = {
				query : Ext.getCmp("query"+Cuscardaction).getValue(),
				wheresql : "cuscardcustomer='"+customerid+"'"
		}; 
	});
	Cuscardstore.load();//加载数据
//	var selectgridWindow = new Ext.Window({
//		layout : 'fit', // 设置窗口布局模式
//		width : 820, // 窗口宽度
//		height : 580, // 窗口高度
//		modal : true,
//		title : Cuscardtitle,
//		closeAction: 'hide',
//		closable : true, // 是否可关闭
//		collapsible : true, // 是否可收缩
//		maximizable : true, // 设置是否可以最大化
//		border : false, // 边框线设置
//		constrain : true, // 设置窗口是否可以溢出父容器
//		animateTarget : Ext.getBody(),
//		pageY : 50, // 页面定位Y坐标
//		pageX : document.body.clientWidth / 2 - 820 / 2, // 页面定位X坐标
//		items : Cuscardgrid
//	});
//	selectgridWindow.show();
	
	return Cuscardgrid;
}