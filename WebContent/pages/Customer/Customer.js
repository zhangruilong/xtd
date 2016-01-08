Ext.onReady(function() {
	var Customerclassify = "会员";
	var Customertitle = "当前位置:业务管理》" + Customerclassify;
	var Customeraction = "CustomerAction.do";
	var Customerfields = ['customerid'
	        			    ,'customerstadium' 
	        			    ,'customercode' 
	        			    ,'openid' 
	        			    ,'customername' 
	        			    ,'customersex' 
	        			    ,'customerage' 
	        			    ,'customercdcard' 
	        			    ,'customerhome' 
	        			    ,'customercompany' 
	        			    ,'customerphone' 
	        			    ,'customerbirthday' 
	        			    ,'customergoodday' 
	        			    ,'customeremail' 
	        			    ,'customerhow' 
	        			    ,'customertime' 
	        			    ,'customerimage' 
	        			    ,'customeremp' 
	        			    ,'customerlevel' 
	        			    ,'customerdetail' 
	        			    ,'customerstatue' 
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
	var Customerkeycolumn = [ 'customerid' ];// 主键
	var Customerstore = dataStore(Customerfields, basePath + "CustomerviewAction.do?method=selQuery");// 定义Customerstore
	var Customersm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Customercm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Customersm, {// 改
			header : 'ID',
			dataIndex : 'customerid',
			hidden : true
		}
		, {
			header : '场馆ID',
			dataIndex : 'customerstadium',
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
			dataIndex : 'customercode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : 'OPENID',
			dataIndex : 'openid',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '姓名',
			dataIndex : 'customername',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '性别',
			dataIndex : 'customersex',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '年龄',
			dataIndex : 'customerage',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '身份证',
			dataIndex : 'customercdcard',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '家庭住址',
			dataIndex : 'customerhome',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '单位地址',
			dataIndex : 'customercompany',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '手机',
			dataIndex : 'customerphone',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '生日',
			dataIndex : 'customerbirthday',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '纪念日',
			dataIndex : 'customergoodday',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '邮箱',
			dataIndex : 'customeremail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '入会途径',
			dataIndex : 'customerhow',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '入会时间',
			dataIndex : 'customertime',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '照片',
			dataIndex : 'customerimage',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '顾问',
			dataIndex : 'customeremp',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '等级',
			dataIndex : 'customerlevel',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'customerdetail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'customerstatue',
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
	var CustomerdataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CustomerdataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Customercustomerid',
				name : 'customerid',
				hidden : true
			} ]
		}
//		, {
//			columnWidth : 1,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : '场馆ID',
//				id : 'Customercustomerstadium',
//				name : 'customerstadium',
//				maxLength : 100,
//				anchor : '95%'
//			} ]
//		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '编码',
				id : 'Customercustomercode',
				name : 'customercode',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
//		, {
//			columnWidth : 1,
//			layout : 'form',
//			items : [ {
//				xtype : 'textfield',
//				fieldLabel : 'OPENID',
//				id : 'Customeropenid',
//				name : 'openid',
//				maxLength : 100,
//				anchor : '95%'
//			} ]
//		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '姓名',
				id : 'Customercustomername',
				name : 'customername',
				allowBlank : false,
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
				store : sexStore,
				mode : 'local',
				triggerAction : 'all',
				editable : false,
				allowBlank : false,
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'customersex',
				fieldLabel : '性别',
				id : 'Customercustomersex',
				name : 'customersex',
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
				id : 'Customercustomerage',
				name : 'customerage',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '身份证',
				id : 'Customercustomercdcard',
				name : 'customercdcard',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '家庭住址',
				id : 'Customercustomerhome',
				name : 'customerhome',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '单位地址',
				id : 'Customercustomercompany',
				name : 'customercompany',
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
				id : 'Customercustomerphone',
				name : 'customerphone',
				allowBlank : false,
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '生日',
				id : 'Customercustomerbirthday',
				name : 'customerbirthday',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '纪念日',
				id : 'Customercustomergoodday',
				name : 'customergoodday',
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
				id : 'Customercustomeremail',
				name : 'customeremail',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '入会途径',
				id : 'Customercustomerhow',
				name : 'customerhow',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '入会时间',
				id : 'Customercustomertime',
				name : 'customertime',
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
				id : 'Customercustomerimage',
				name : 'customerimage',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '顾问',
				id : 'Customercustomeremp',
				name : 'customeremp',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '等级',
				id : 'Customercustomerlevel',
				name : 'customerlevel',
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
				id : 'Customercustomerdetail',
				name : 'customerdetail',
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
				hiddenName : 'customerstatue',
				fieldLabel : '状态',
				id : 'Customercustomerstatue',
				name : 'customerstatue',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Customerbbar = pagesizebar(Customerstore);//定义分页
	var Customergrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Customertitle,
		store : Customerstore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Customercm,
		sm : Customersm,
		bbar : Customerbbar,
		tbar : [{
				text : "新增",
				iconCls : 'add',
				handler : function() {
					CustomerdataForm.form.reset();
					createWindow(basePath + Customeraction + "?method=insAll", "新增", CustomerdataForm, Customerstore);
				}
			},'-',{
				text : "修改",
				iconCls : 'edit',
				handler : function() {
					var selections = Customergrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + Customeraction + "?method=updAll", "修改", CustomerdataForm, Customerstore);
					CustomerdataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "删除",
				iconCls : 'delete',
				handler : function() {
					var selections = Customergrid.getSelectionModel().getSelections();
					if (Ext.isEmpty(selections)) {
						Ext.Msg.alert('提示', '请选择您要删除的数据！');
						return;
					}
					commonDelete(basePath + Customeraction + "?method=delAll",selections,Customerstore,Customerkeycolumn);
				}
			},'-',{
//				text : "导入",
//				iconCls : 'imp',
//				handler : function() {
//					commonImp(basePath + Customeraction + "?method=impAll","导入",Customerstore);
//				}
//			},'-',{
//				text : "后台导出",
//				iconCls : 'exp',
//				handler : function() {
//					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要导出当前数据？', function(btn, text) {
//						if (btn == 'yes') {
//							window.location.href = basePath + Customeraction + "?method=expAll"; 
//						}
//					});
//				}
//			},'-',{
//				text : "前台导出",
//				iconCls : 'exp',
//				handler : function() {
//					commonExp(Customergrid);
//				}
//			},'-',{
				text : "附件",
				iconCls : 'attach',
				handler : function() {
					var selections = Customergrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条您要上传附件的数据！', function() {
						});
						return;
					}
					var fid = '';
					for (var i=0;i<Customerkeycolumn.length;i++){
						fid += selections[0].data[Customerkeycolumn[i]] + ","
					}
					commonAttach(fid, Customerclassify);
				}
			},'->',{
				xtype : 'textfield',
				id : 'query'+Customeraction,
				name : 'query',
				emptyText : '模糊匹配',
				width : 100,
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							if ("" == Ext.getCmp("query"+Customeraction).getValue()) {
								Customerstore.load();
							} else {
								Customerstore.load({
									params : {
										query : Ext.getCmp("query"+Customeraction).getValue()
									}
								});
							}
						}
					}
				}
			}
		]
	});
	Customergrid.addListener('rowclick',function(rid, rowIndex, columnIndex, e){  
		var record = Customergrid.getStore().getAt(rowIndex);
    	 editeInfo(record.get('customerid'));
	});
	Customergrid.region = 'center';
	Customerstore.load();//加载数据
	Customerstore.on("beforeload",function(){ 
		Customerstore.baseParams = {
				query : Ext.getCmp("query"+Customeraction).getValue()
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
		items : [ Customergrid ,editPanel ]
	});
})

function editeInfo(customerid){
	var editPanel = Ext.getCmp("editPanel");
	if(Ext.getCmp("tabs")){
		editPanel.remove(Ext.getCmp("tabs"),true);
	}
	editPanel.add(getTabPanel(customerid));
	editPanel.doLayout();
}

function getTabPanel(customerid){
	var tabs = new Ext.TabPanel({
	    margins:'3 3 3 0', 
	    activeTab: 0,
	    id:"tabs",
	    frame : true,
	    defaults:{autoScroll:true},
	    items:[{
	        title: '会员卡',
	        items: selectCuscard(customerid)
	    },{
	        title: '课程'
	    },{
	        title: '预约记录',
	        items: selectAppoint(customerid)
	    },{
	        title: '消费记录'
	    }]
	});
	return tabs;
}