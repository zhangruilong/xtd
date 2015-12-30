Ext.onReady(function() {
	var Cuscardchangeclassify = "会员换卡记录";
	var Cuscardchangetitle = "当前位置:业务管理》" + Cuscardchangeclassify;
	var Cuscardchangeaction = "CuscardchangeAction.do";
	var Cuscardchangefields = ['cuscardid'
		        			    ,'cuscardcustomer' 
		        			    ,'cuscardtype' 
		        			    ,'cuscardno' 
		        			    ,'cuscardnonew' 
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
		        			    ,'customerstadium' 
		        			    ,'customercode' 
		        			    ,'customername' 
		        			    ,'customerphone' 
		        			      ];// 全部字段
	var Cuscardchangekeycolumn = [ 'cuscardid' ];// 主键
	var Cuscardchangestore = dataStore(Cuscardchangefields, basePath + "CuscardchangeviewAction.do?method=selQuery");// 定义Cuscardchangestore
	var Cuscardchangesm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Cuscardchangecm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Cuscardchangesm, {// 改
			header : 'ID',
			dataIndex : 'cuscardid',
			hidden : true
		}
		, {
			header : '会员ID',
			dataIndex : 'cuscardcustomer',
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
			header : '新卡号',
			dataIndex : 'cuscardnonew',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '密码',
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
		]
	});
	var CuscardchangedataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CuscardchangedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Cuscardchangecuscardid',
				name : 'cuscardid',
				hidden : true
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员ID',
				id : 'Cuscardchangecuscardcustomer',
				name : 'cuscardcustomer',
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
				id : 'Cuscardchangecuscardtype',
				name : 'cuscardtype',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡号',
				id : 'Cuscardchangecuscardno',
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
				fieldLabel : '新卡号',
				id : 'Cuscardchangecuscardnonew',
				name : 'cuscardnonew',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '密码',
				id : 'Cuscardchangecuscardpsw',
				name : 'cuscardpsw',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '有效期开始',
				id : 'Cuscardchangecuscardbegin',
				name : 'cuscardbegin',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '有效期结束',
				id : 'Cuscardchangecuscardend',
				name : 'cuscardend',
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
				id : 'Cuscardchangecuscardmoney',
				name : 'cuscardmoney',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡总次数',
				id : 'Cuscardchangecuscardnums',
				name : 'cuscardnums',
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
				id : 'Cuscardchangecuscardtimes',
				name : 'cuscardtimes',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡积分',
				id : 'Cuscardchangecuscardint',
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
				id : 'Cuscardchangecuscarddetail',
				name : 'cuscarddetail',
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
				id : 'Cuscardchangecuscardstatue',
				name : 'cuscardstatue',
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
				id : 'Cuscardchangecreatetime',
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
				id : 'Cuscardchangecreator',
				name : 'creator',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Cuscardchangebbar = pagesizebar(Cuscardchangestore);//定义分页
	var Cuscardchangegrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Cuscardchangetitle,
		store : Cuscardchangestore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Cuscardchangecm,
		sm : Cuscardchangesm,
		bbar : Cuscardchangebbar,
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					CuscardchangedataForm.form.reset();
					createWindow(basePath + Cuscardchangeaction + "?method=insAll", "新增", CuscardchangedataForm, Cuscardchangestore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Cuscardchangegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Cuscardchangeaction + "?method=updAll", "修改", CuscardchangedataForm, Cuscardchangestore);
					CuscardchangedataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Cuscardchangegrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Cuscardchangeaction + "?method=delAll",selections,Cuscardchangestore,Cuscardchangekeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Cuscardchangeaction + "?method=impAll","导入",Cuscardchangestore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Cuscardchangeaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Cuscardchangegrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Cuscardchangegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条您要上传附件的数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Cuscardchangekeycolumn.length;i++){
						fid += selections[0].data[Cuscardchangekeycolumn[i]] + ","
					}
					commonAttach(fid, Cuscardchangeclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'query'+Cuscardchangeaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Cuscardchangeaction).getValue()) {
								Cuscardchangestore.load();
							} else {
								Cuscardchangestore.load({
									params : {
										query : Ext.getCmp("query"+Cuscardchangeaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Cuscardchangegrid.region = 'center';
	Cuscardchangestore.load();//加载数据
	Cuscardchangestore.on("beforeload",function(){ 
		Cuscardchangestore.baseParams = {
				query : Ext.getCmp("query"+Cuscardchangeaction).getValue()
		}; 
	});
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Cuscardchangegrid ]
	});
})
