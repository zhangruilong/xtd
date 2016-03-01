Ext.onReady(function() {
	var Coachclassify = "教练";
	var Coachtitle = "当前位置:业务管理》" + Coachclassify;
	var Coachaction = "CoachAction.do";
	var Coachfields = ['coachid'
       			    ,'coachstadium' 
    			    ,'coachcode' 
    			    ,'coachname' 
    			    ,'coachphone' 
    			    ,'coachaddress' 
    			    ,'coachsex' 
    			    ,'coachage' 
    			    ,'coachimage' 
    			    ,'coachdetail' 
    			    ,'coachstatue' 
    			    ,'createtime' 
    			    ,'creator' 
    			    ,'stadiumid' 
    			    ,'stadiumcode' 
    			    ,'stadiumname' 
    			    ,'stadiumaddress' 
    			    ,'stadiumdetail' 
    			    ,'stadiumstatue' 
    			    ,'stadiumx' 
    			    ,'stadiumy' 
    			      ];// 全部字段
	var Coachkeycolumn = [ 'coachid' ];// 主键
	var Coachstore = dataStore(Coachfields, basePath + "CoachviewAction.do?method=selQuery");// 定义Coachstore
	var Coachsm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Coachcm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Coachsm, {// 改
			header : 'ID',
			dataIndex : 'coachid',
			hidden : true
		}
		, {
			header : '场馆ID',
			dataIndex : 'coachstadium',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '场馆',
			dataIndex : 'stadiumname',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '编码',
			dataIndex : 'coachcode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '姓名',
			dataIndex : 'coachname',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '手机',
			dataIndex : 'coachphone',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '其他信息',
			dataIndex : 'coachaddress',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '性别',
			dataIndex : 'coachsex',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '年龄',
			dataIndex : 'coachage',
			align : 'center',
			width : 80,
			sortable : true
		}
//		, {
//			header : '照片',
//			dataIndex : 'coachimage',
//			align : 'center',
//			width : 80,
//			sortable : true
//		}
		, {
			header : '备注',
			dataIndex : 'coachdetail',
			align : 'center',
			width : 180,
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'coachstatue',
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
	var CoachdataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CoachdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Coachcoachid',
				name : 'coachid',
				hidden : true
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '场馆ID',
				id : 'Coachcoachstadium',
				name : 'coachstadium',
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
				id : 'Coachcoachstadiumname',
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
				fieldLabel : '编码',
				id : 'Coachcoachcode',
				name : 'coachcode',
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
				id : 'Coachcoachname',
				name : 'coachname',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'numberfield',
				fieldLabel : '手机',
				id : 'Coachcoachphone',
				name : 'coachphone',
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
				id : 'Coachcoachaddress',
				name : 'coachaddress',
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
				id : 'Coachcoachsex',
				name : 'coachsex',
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
				id : 'Coachcoachage',
				name : 'coachage',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
//		, {
//			columnWidth : 1,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '照片',
//				id : 'Coachcoachimage',
//				name : 'coachimage',
//				maxLength : 100,
//				anchor : '95%'
//			} ]
//		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textarea',
				fieldLabel : '备注',
				id : 'Coachcoachdetail',
				name : 'coachdetail',
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
				hiddenName : 'coachstatue',
				fieldLabel : '状态',
				id : 'Coachcoachstatue',
				name : 'coachstatue',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Coachbbar = pagesizebar(Coachstore);//定义分页
	var Coachgrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Coachtitle,
		store : Coachstore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Coachcm,
		sm : Coachsm,
		bbar : Coachbbar,
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					CoachdataForm.form.reset();
					createWindow(basePath + Coachaction + "?method=insAll", "新增", CoachdataForm, Coachstore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Coachgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Coachaction + "?method=updAll", "修改", CoachdataForm, Coachstore);
					CoachdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Coachgrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Coachaction + "?method=delAll",selections,Coachstore,Coachkeycolumn);
				}
			},'-',{
				text : "导入",
				iconCls : 'imp',
				handler : function() {
					commonImp(basePath + Coachaction + "?method=impAll","导入",Coachstore);
				}
			},'-',{
				text : "后台导出",
				iconCls : 'exp',
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
						if (btn == 'yes') {
							window.location.href = basePath + Coachaction + "?method=expAll"; 
						}
					});
				}
			},'-',{
				text : "前台导出",
				iconCls : 'exp',
				handler : function() {
					commonExp(Coachgrid);
				}
			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Coachgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条您要上传附件的数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Coachkeycolumn.length;i++){
						fid += selections[0].data[Coachkeycolumn[i]] + ","
					}
					commonAttach(fid, Coachclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'query'+Coachaction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Coachaction).getValue()) {
								Coachstore.load();
							} else {
								Coachstore.load({
									params : {
										query : Ext.getCmp("query"+Coachaction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Coachgrid.addListener('rowclick',function(rid, rowIndex, columnIndex, e){  
		var record = Coachgrid.getStore().getAt(rowIndex);
    	 editeInfo(record.get('coachid'));
	});
	Coachgrid.region = 'center';
	Coachstore.load();//加载数据
	Coachstore.on("beforeload",function(){ 
		Coachstore.baseParams = {
				query : Ext.getCmp("query"+Coachaction).getValue()
		}; 
	});
	var editPanel = new Ext.Panel({
        id:"editPanel",
        bodyStyle : 'padding:0px;',
        width: 555
    });
	editPanel.region = 'east';
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Coachgrid,editPanel ]
	});
})
function editeInfo(params){
	var editPanel = Ext.getCmp("editPanel");
	if(Ext.getCmp("tabs")){
		editPanel.remove(Ext.getCmp("tabs"),true);
	}
	editPanel.add(selectCourse(params));
	editPanel.doLayout();
}