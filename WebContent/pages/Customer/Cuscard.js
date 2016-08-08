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
	var Cuscardstore = dataStore(Cuscardfields, basePath + "CuscardviewAction.do" + "?method=selAll");// 定义Cuscardstore
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
			header : '原价',
			dataIndex : 'cuscardmoney',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '折扣',
			dataIndex : 'updtime',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '售价',
			dataIndex : 'updor',
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
				allowBlank : false,
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
				allowBlank : false,
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
				allowBlank : false,
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
				allowBlank : false,
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
				allowBlank : false,
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
	var CuscardchangedataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CuscardchangedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [{
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '新卡号',
				id : 'Cuscardchangenonew',
				name : 'cuscardnonew',
				maxLength : 100,
				allowBlank : false,
				anchor : '95%'
			} ]
		}
		,{
			items : [ { 
				xtype : 'textfield',
				id : 'Cuscardchangeid',
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
				id : 'Cuscardchangecustomer',
				name : 'cuscardcustomer',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : .9,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '分类',
				id : 'Cuscardchangetype',
				name : 'cuscardtype',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '卡号',
				id : 'Cuscardchangeno',
				name : 'cuscardno',
				maxLength : 100,
				allowBlank : false,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '有效期',
				id : 'Cuscardchangepsw',
				name : 'cuscardpsw',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '有效期开始',
				id : 'Cuscardchangebegin',
				name : 'cuscardbegin',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '有效期结束',
				id : 'Cuscardchangeend',
				name : 'cuscardend',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '卡余额',
				id : 'Cuscardchangemoney',
				name : 'cuscardmoney',
				maxLength : 100,
				allowBlank : false,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '卡总次数',
				id : 'Cuscardchangenums',
				name : 'cuscardnums',
				maxLength : 100,
				allowBlank : false,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '卡余次',
				id : 'Cuscardchangetimes',
				name : 'cuscardtimes',
				maxLength : 100,
				allowBlank : false,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '卡积分',
				id : 'Cuscardchangeint',
				name : 'cuscardint',
				maxLength : 100,
				allowBlank : false,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '备注',
				id : 'Cuscardchangedetail',
				name : 'cuscarddetail',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '状态',
				id : 'Cuscardchangestatue',
				name : 'cuscardstatue',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	var CuscardcontinuedataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CuscardcontinuedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [{
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡新余额',
				id : 'Cuscardcontinuemoneynew',
				name : 'cuscardmoneynew',
				maxLength : 100,
				allowBlank : false,
				anchor : '95%'
			} ]
		}
		,{
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡新总次数',
				id : 'Cuscardcontinuenumsnew',
				name : 'cuscardnumsnew',
				maxLength : 100,
				allowBlank : false,
				anchor : '95%'
			} ]
		}
		,{
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡新余次',
				id : 'Cuscardcontinuetimesnew',
				name : 'cuscardtimesnew',
				maxLength : 100,
				allowBlank : false,
				anchor : '95%'
			} ]
		}
		,{
			items : [ { 
				xtype : 'textfield',
				id : 'Cuscardcontinueid',
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
				id : 'Cuscardcontinuecustomer',
				name : 'cuscardcustomer',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : .9,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '分类',
				id : 'Cuscardcontinuetype',
				name : 'cuscardtype',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '卡号',
				id : 'Cuscardcontinueno',
				name : 'cuscardno',
				maxLength : 100,
				allowBlank : false,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '有效期',
				id : 'Cuscardcontinuepsw',
				name : 'cuscardpsw',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '有效期开始',
				id : 'Cuscardcontinuebegin',
				name : 'cuscardbegin',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '有效期结束',
				id : 'Cuscardcontinueend',
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
				id : 'Cuscardcontinuemoney',
				name : 'cuscardmoney',
				maxLength : 100,
				editable : false,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'numberfield',
				fieldLabel : '卡总次数',
				id : 'Cuscardcontinuenums',
				name : 'cuscardnums',
				maxLength : 100,
				editable : false,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'numberfield',
				fieldLabel : '卡余次',
				id : 'Cuscardcontinuetimes',
				name : 'cuscardtimes',
				maxLength : 100,
				editable : false,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '卡积分',
				id : 'Cuscardcontinueint',
				name : 'cuscardint',
				maxLength : 100,
				allowBlank : false,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '备注',
				id : 'Cuscardcontinuedetail',
				name : 'cuscarddetail',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '状态',
				id : 'Cuscardcontinuestatue',
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
				text : "发卡",
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
				text : "过户",
				iconCls : 'edit',
				handler : function() {
					var selections = Cuscardgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要过户的记录！', function() {
						});
						return;
					}
					selectCustomer(selections[0]);
				}
			},'-',{
				text : "换卡",
				iconCls : 'edit',
				handler : function() {
					var selections = Cuscardgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要换卡的记录！', function() {
						});
						return;
					}
					createWindow(basePath + "CuscardchangeAction.do" + "?method=change", "换卡", CuscardchangedataForm, Cuscardstore);
					CuscardchangedataForm.form.loadRecord(selections[0]);
				}
			},'-',{
				text : "续卡",
				iconCls : 'edit',
				handler : function() {
					var selections = Cuscardgrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					createWindow(basePath + "CuscardcontinueAction.do" + "?method=ccontinue", "修改", CuscardcontinuedataForm, Cuscardstore, zhaji);
					CuscardcontinuedataForm.form.loadRecord(selections[0]);
				}
			}
		]
	});
	Cuscardgrid.region = 'center';
	Cuscardstore.on("beforeload",function(){ 
		Cuscardstore.baseParams = {
				wheresql : "cuscardcustomer='"+customerid+"'"
		}; 
	});
	Cuscardstore.load();//加载数据
	
	return Cuscardgrid;
}
