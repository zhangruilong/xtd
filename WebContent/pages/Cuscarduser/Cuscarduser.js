Ext.onReady(function() {
	var Cuscarduserclassify = "会员卡过户记录";
	var Cuscardusertitle = "当前位置:业务管理》" + Cuscarduserclassify;
	var Cuscarduseraction = "CuscarduserAction.do";
	var Cuscarduserfields = ['cuscardid'
	        			    ,'cuscardcustomer' 
	        			    ,'cuscardcustomernew' 
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
	        			      ];// 全部字段
	var Cuscarduserkeycolumn = [ 'cuscardid' ];// 主键
	var Cuscarduserstore = dataStore(Cuscarduserfields, basePath + Cuscarduseraction + "?method=selQuery");// 定义Cuscarduserstore
	var Cuscardusersm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Cuscardusercm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Cuscardusersm, {// 改
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
			header : '新会员ID',
			dataIndex : 'cuscardcustomernew',
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
	var CuscarduserdataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CuscarduserdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Cuscardusercuscardid',
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
				id : 'Cuscardusercuscardcustomer',
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
				fieldLabel : '新会员ID',
				id : 'Cuscardusercuscardcustomernew',
				name : 'cuscardcustomernew',
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
				id : 'Cuscardusercuscardtype',
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
				id : 'Cuscardusercuscardno',
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
				fieldLabel : '密码',
				id : 'Cuscardusercuscardpsw',
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
				id : 'Cuscardusercuscardbegin',
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
				id : 'Cuscardusercuscardend',
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
				id : 'Cuscardusercuscardmoney',
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
				id : 'Cuscardusercuscardnums',
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
				id : 'Cuscardusercuscardtimes',
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
				id : 'Cuscardusercuscardint',
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
				id : 'Cuscardusercuscarddetail',
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
				id : 'Cuscardusercuscardstatue',
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
				id : 'Cuscardusercreatetime',
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
				id : 'Cuscardusercreator',
				name : 'creator',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Cuscarduserbbar = pagesizebar(Cuscarduserstore);//定义分页
	var Cuscardusergrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Cuscardusertitle,
		store : Cuscarduserstore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Cuscardusercm,
		sm : Cuscardusersm,
		bbar : Cuscarduserbbar,
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					CuscarduserdataForm.form.reset();
					createWindow(basePath + Cuscarduseraction + "?method=insAll", "新增", CuscarduserdataForm, Cuscarduserstore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Cuscardusergrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Cuscarduseraction + "?method=updAll", "修改", CuscarduserdataForm, Cuscarduserstore);
					CuscarduserdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Cuscardusergrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Cuscarduseraction + "?method=delAll",selections,Cuscarduserstore,Cuscarduserkeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Cuscarduseraction + "?method=impAll","导入",Cuscarduserstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Cuscarduseraction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Cuscardusergrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Cuscardusergrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条您要上传附件的数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Cuscarduserkeycolumn.length;i++){
						fid += selections[0].data[Cuscarduserkeycolumn[i]] + ","
					}
					commonAttach(fid, Cuscarduserclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'query'+Cuscarduseraction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Cuscarduseraction).getValue()) {
								Cuscarduserstore.load();
							} else {
								Cuscarduserstore.load({
									params : {
										query : Ext.getCmp("query"+Cuscarduseraction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Cuscardusergrid.region = 'center';
	Cuscarduserstore.load();//加载数据
	Cuscarduserstore.on("beforeload",function(){ 
		Cuscarduserstore.baseParams = {
				query : Ext.getCmp("query"+Cuscarduseraction).getValue()
		}; 
	});
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Cuscardusergrid ]
	});
})
