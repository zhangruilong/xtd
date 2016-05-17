Ext.onReady(function() {
	var Empclassify = "员工";
	var Emptitle = "当前位置:业务管理》" + Empclassify;
	var Empaction = "EmpAction.do";
	var Empfields = ['empid'
     			    ,'empstadium' 
    			    ,'empcode' 
    			    ,'empname' 
    			    ,'empage' 
    			    ,'empsex' 
    			    ,'empphone' 
    			    ,'empemail' 
    			    ,'empimage' 
    			    ,'empaddress' 
    			    ,'empdetail' 
    			    ,'empstatue' 
    			    ,'createtime' 
    			    ,'creator' 
    			    ,'updtime' 
    			    ,'updor' 
    			    ,'stadiumid' 
    			    ,'stadiumcode' 
    			    ,'stadiumname' 
    			    ,'stadiumaddress' 
    			    ,'stadiumdetail' 
    			    ,'stadiumstatue' 
    			    ,'stadiumx' 
    			    ,'stadiumy' 
    			      ];// 全部字段
	var Empkeycolumn = [ 'empid' ];// 主键
	var Empstore = dataStore(Empfields, basePath + "EmpviewAction.do?method=selQuery");// 定义Empstore
	var Empsm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Empcm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Empsm, {// 改
			header : 'ID',
			dataIndex : 'empid',
			hidden : true
		}
		, {
			header : '场馆ID',
			dataIndex : 'empstadium',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '场馆',
			dataIndex : 'stadiumname',
			align : 'center',
			width : 100,
			sortable : true
		}
		, {
			header : '登录名',
			dataIndex : 'empcode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '姓名',
			dataIndex : 'empname',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '年龄',
			dataIndex : 'empage',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '性别',
			dataIndex : 'empsex',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '手机',
			dataIndex : 'empphone',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '邮箱',
			dataIndex : 'empemail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '照片',
			dataIndex : 'empimage',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '地址',
			dataIndex : 'empaddress',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'empdetail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'empstatue',
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
	var EmpdataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'EmpdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Empempid',
				name : 'empid',
				hidden : true
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '场馆ID',
				id : 'Empempstadium',
				name : 'empstadium',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : .9,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '场馆',
				id : 'Empempstadiumname',
				name : 'stadiumname',
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
				handler : selectStadium.createCallback(),
				scope : this,
				anchor : '25%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '登录名',
				id : 'Empempcode',
				name : 'empcode',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '姓名',
				id : 'Empempname',
				name : 'empname',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'numberfield',
				fieldLabel : '年龄',
				id : 'Empempage',
				name : 'empage',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '性别',
				id : 'Empempsex',
				name : 'empsex',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'Empempphone',
				name : 'empphone',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '邮箱',
				id : 'Empempemail',
				name : 'empemail',
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
				id : 'Empempimage',
				name : 'empimage',
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
				id : 'Empempaddress',
				name : 'empaddress',
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
				id : 'Empempdetail',
				name : 'empdetail',
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
				id : 'Empempstatue',
				name : 'empstatue',
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
				id : 'Empcreatetime',
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
				id : 'Empcreator',
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
				id : 'Empupdtime',
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
				id : 'Empupdor',
				name : 'updor',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Empbbar = pagesizebar(Empstore);//定义分页
	var Empgrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Emptitle,
		store : Empstore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Empcm,
		sm : Empsm,
		bbar : Empbbar,
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					EmpdataForm.form.reset();
					createWindow(basePath + Empaction + "?method=insAll", "新增", EmpdataForm, Empstore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Empgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Empaction + "?method=updAll", "修改", EmpdataForm, Empstore);
					EmpdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Empgrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Empaction + "?method=delAll",selections,Empstore,Empkeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Empaction + "?method=impAll","导入",Empstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Empaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Empgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Empgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条您要上传附件的数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Empkeycolumn.length;i++){
						fid += selections[0].data[Empkeycolumn[i]] + ","
					}
					commonAttach(fid, Empclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'query'+Empaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Empaction).getValue()) {
								Empstore.load();
							} else {
								Empstore.load({
									params : {
										query : Ext.getCmp("query"+Empaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Empgrid.region = 'center';
	Empstore.load();//加载数据
	Empstore.on("beforeload",function(){ 
		Empstore.baseParams = {
				query : Ext.getCmp("query"+Empaction).getValue()
		}; 
	});
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Empgrid ]
	});
})
