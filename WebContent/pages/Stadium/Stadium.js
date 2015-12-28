Ext.onReady(function() {
	var Stadiumclassify = "场馆";
	var Stadiumtitle = "当前位置:业务管理》" + Stadiumclassify;
	var Stadiumaction = "StadiumAction.do";
	var Stadiumfields = ['stadiumid'
	        			    ,'stadiumcode' 
	        			    ,'stadiumname' 
	        			    ,'stadiumaddress' 
	        			    ,'stadiumdetail' 
	        			    ,'stadiumstatue' 
	        			    ,'stadiumx' 
	        			    ,'stadiumy' 
	        			      ];// 全部字段
	var Stadiumkeycolumn = [ 'stadiumid' ];// 主键
	var Stadiumstore = dataStore(Stadiumfields, basePath + Stadiumaction + "?method=selQuery");// 定义Stadiumstore
	var Stadiumsm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Stadiumcm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Stadiumsm, {// 改
			header : 'ID',
			dataIndex : 'stadiumid',
			hidden : true
		}
		, {
			header : '编码',
			dataIndex : 'stadiumcode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '名称',
			dataIndex : 'stadiumname',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '地址',
			dataIndex : 'stadiumaddress',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'stadiumdetail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'stadiumstatue',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : 'X坐标',
			dataIndex : 'stadiumx',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : 'Y坐标',
			dataIndex : 'stadiumy',
			align : 'center',
			width : 80,
			sortable : true
		}
		]
	});
	var StadiumdataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'StadiumdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Stadiumstadiumid',
				name : 'stadiumid',
				hidden : true
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Stadiumstadiumcode',
				name : 'stadiumcode',
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
				id : 'Stadiumstadiumname',
				name : 'stadiumname',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '地址',
				id : 'Stadiumstadiumaddress',
				name : 'stadiumaddress',
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
				id : 'Stadiumstadiumdetail',
				name : 'stadiumdetail',
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
				id : 'Stadiumstadiumstatue',
				name : 'stadiumstatue',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'X坐标',
				id : 'Stadiumstadiumx',
				name : 'stadiumx',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'Y坐标',
				id : 'Stadiumstadiumy',
				name : 'stadiumy',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Stadiumbbar = pagesizebar(Stadiumstore);//定义分页
	var Stadiumgrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Stadiumtitle,
		store : Stadiumstore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Stadiumcm,
		sm : Stadiumsm,
		bbar : Stadiumbbar,
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					StadiumdataForm.form.reset();
					createWindow(basePath + Stadiumaction + "?method=insAll", "新增", StadiumdataForm, Stadiumstore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Stadiumgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Stadiumaction + "?method=updAll", "修改", StadiumdataForm, Stadiumstore);
					StadiumdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Stadiumgrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Stadiumaction + "?method=delAll",selections,Stadiumstore,Stadiumkeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Stadiumaction + "?method=impAll","导入",Stadiumstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Stadiumaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Stadiumgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Stadiumgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条您要上传附件的数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Stadiumkeycolumn.length;i++){
						fid += selections[0].data[Stadiumkeycolumn[i]] + ","
					}
					commonAttach(fid, Stadiumclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'query'+Stadiumaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Stadiumaction).getValue()) {
								Stadiumstore.load();
							} else {
								Stadiumstore.load({
									params : {
										query : Ext.getCmp("query"+Stadiumaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Stadiumgrid.region = 'center';
	Stadiumstore.load();//加载数据
	Stadiumstore.on("beforeload",function(){ 
		Stadiumstore.baseParams = {
				query : Ext.getCmp("query"+Stadiumaction).getValue()
		}; 
	});
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Stadiumgrid ]
	});
})
