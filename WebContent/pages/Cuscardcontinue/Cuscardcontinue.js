Ext.onReady(function() {
	var Cuscardcontinueclassify = "会员卡续卡记录";
	var Cuscardcontinuetitle = "当前位置:业务管理》" + Cuscardcontinueclassify;
	var Cuscardcontinueaction = "CuscardcontinueAction.do";
	var Cuscardcontinuefields = ['cuscardid'
	        			    ,'cuscardcustomer' 
	        			    ,'cuscardtype' 
	        			    ,'cuscardno' 
	        			    ,'cuscardpsw' 
	        			    ,'cuscardbegin' 
	        			    ,'cuscardend' 
	        			    ,'cuscardmoney' 
	        			    ,'cuscardnums' 
	        			    ,'cuscardtimes' 
	        			    ,'cuscardmoneynew' 
	        			    ,'cuscardnumsnew' 
	        			    ,'cuscardtimesnew' 
	        			    ,'cuscardint' 
	        			    ,'cuscarddetail' 
	        			    ,'cuscardstatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			      ];// 全部字段
	var Cuscardcontinuekeycolumn = [ 'cuscardid' ];// 主键
	var Cuscardcontinuestore = dataStore(Cuscardcontinuefields, basePath + Cuscardcontinueaction + "?method=selQuery");// 定义Cuscardcontinuestore
	var Cuscardcontinuesm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Cuscardcontinuecm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Cuscardcontinuesm, {// 改
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
			header : '卡新余额',
			dataIndex : 'cuscardmoneynew',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '卡新总次数',
			dataIndex : 'cuscardnumsnew',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '卡新余次',
			dataIndex : 'cuscardtimesnew',
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
	var CuscardcontinuedataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CuscardcontinuedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Cuscardcontinuecuscardid',
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
				id : 'Cuscardcontinuecuscardcustomer',
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
				id : 'Cuscardcontinuecuscardtype',
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
				id : 'Cuscardcontinuecuscardno',
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
				id : 'Cuscardcontinuecuscardpsw',
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
				id : 'Cuscardcontinuecuscardbegin',
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
				id : 'Cuscardcontinuecuscardend',
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
				id : 'Cuscardcontinuecuscardmoney',
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
				id : 'Cuscardcontinuecuscardnums',
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
				id : 'Cuscardcontinuecuscardtimes',
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
				fieldLabel : '卡新余额',
				id : 'Cuscardcontinuecuscardmoneynew',
				name : 'cuscardmoneynew',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡新总次数',
				id : 'Cuscardcontinuecuscardnumsnew',
				name : 'cuscardnumsnew',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡新余次',
				id : 'Cuscardcontinuecuscardtimesnew',
				name : 'cuscardtimesnew',
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
				id : 'Cuscardcontinuecuscardint',
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
				id : 'Cuscardcontinuecuscarddetail',
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
				id : 'Cuscardcontinuecuscardstatue',
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
				id : 'Cuscardcontinuecreatetime',
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
				id : 'Cuscardcontinuecreator',
				name : 'creator',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Cuscardcontinuebbar = pagesizebar(Cuscardcontinuestore);//定义分页
	var Cuscardcontinuegrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Cuscardcontinuetitle,
		store : Cuscardcontinuestore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Cuscardcontinuecm,
		sm : Cuscardcontinuesm,
		bbar : Cuscardcontinuebbar,
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					CuscardcontinuedataForm.form.reset();
					createWindow(basePath + Cuscardcontinueaction + "?method=insAll", "新增", CuscardcontinuedataForm, Cuscardcontinuestore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Cuscardcontinuegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Cuscardcontinueaction + "?method=updAll", "修改", CuscardcontinuedataForm, Cuscardcontinuestore);
					CuscardcontinuedataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Cuscardcontinuegrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Cuscardcontinueaction + "?method=delAll",selections,Cuscardcontinuestore,Cuscardcontinuekeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Cuscardcontinueaction + "?method=impAll","导入",Cuscardcontinuestore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Cuscardcontinueaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Cuscardcontinuegrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Cuscardcontinuegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条您要上传附件的数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Cuscardcontinuekeycolumn.length;i++){
						fid += selections[0].data[Cuscardcontinuekeycolumn[i]] + ","
					}
					commonAttach(fid, Cuscardcontinueclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'query'+Cuscardcontinueaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Cuscardcontinueaction).getValue()) {
								Cuscardcontinuestore.load();
							} else {
								Cuscardcontinuestore.load({
									params : {
										query : Ext.getCmp("query"+Cuscardcontinueaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Cuscardcontinuegrid.region = 'center';
	Cuscardcontinuestore.load();//加载数据
	Cuscardcontinuestore.on("beforeload",function(){ 
		Cuscardcontinuestore.baseParams = {
				query : Ext.getCmp("query"+Cuscardcontinueaction).getValue()
		}; 
	});
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Cuscardcontinuegrid ]
	});
})
