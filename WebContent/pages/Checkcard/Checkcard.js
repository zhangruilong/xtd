Ext.onReady(function() {
	var Ccourseclassify = "会员检票";
	var Ccoursetitle = "当前位置:业务管理》" + Ccourseclassify;
	var genderStore = new Ext.data.ArrayStore({//
		fields:["gender"],
		data:[["男"],["女"]]
	});
	var Customercuscardviewaction = "CustomercuscardviewAction.do";
	var Customercuscardviewfields = ['cuscardid'
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
	     	        			    ,'customerstadium' 
	     	        			    ,'customercode' 
	     	        			    ,'customername' 
	     	        			    ,'customerphone' 
	     	        			    ,'openid' 
	     	        			    ,'customersex' 
	     	        			    ,'customerage' 
	     	        			    ,'customercdcard' 
	     	        			    ,'customerhome' 
	     	        			    ,'customercompany' 
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
	     	        			      ];// 全部字段
	var Customercuscardviewkeycolumn = [ 'cuscardid' ];// 主键
	var Customercuscardviewstore = dataStore(Customercuscardviewfields, basePath + Customercuscardviewaction + "?method=selAll");// 定义Customercuscardviewstore
	var CustomercuscardviewdataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CustomercuscardviewdataForm',
		title:Ccoursetitle,
		bodyStyle:'padding:50px;',
        renderTo:'divFormPanel',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'cuscardid',
				name : 'cuscardid',
				hidden : true
			},{
				xtype : 'textfield',
				id : 'cuscardcustomer',
				name : 'cuscardcustomer',
				hidden : true
			} ]
		}
		, {
			columnWidth : .3,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '卡号',
				id : 'cuscardno',
				name : 'cuscardno',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%',
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Customercuscardviewstore.load({
								params : {
									wheresql : "cuscardno like '%"+field.getValue()+"%'"
								},
								callback : formloadRecord
							});
						}
					}
				}
			},{
				xtype : 'textfield',
				fieldLabel : '会员姓名',
				id : 'customername',
				name : 'customername',
				maxLength : 100,
				anchor : '100%',
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Customercuscardviewstore.load({
								params : {
									wheresql : "customername like '%"+field.getValue()+"%'"
								},
								callback : formloadRecord
							});
						}
					}
				}
			},{
				xtype : 'textfield',
				fieldLabel : '证件号码',
				id : 'customercdcard',
				name : 'customercdcard',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '生日',
				id : 'customerbirthday',
				name : 'customerbirthday',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '入会途径',
				id : 'customerhow',
				name : 'customerhow',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '顾问',
				id : 'customeremp',
				name : 'customeremp',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '有效期',
				id : 'cuscardpsw',
				name : 'cuscardpsw',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '有效期开始',
				id : 'cuscardbegin',
				name : 'cuscardbegin',
				readOnly:true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '分类',
				id : 'cuscardtype',
				name : 'cuscardtype',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '卡余次',
				id : 'cuscardtimes',
				name : 'cuscardtimes',
				readOnly:true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '卡总次数',
				id : 'cuscardnums',
				name : 'cuscardnums',
				readOnly:true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '状态',
				id : 'customerstatue',
				name : 'customerstatue',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			} ]
		}
		, {
			columnWidth : .3,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员编号',
				id : 'customercode',
				name : 'customercode',
				maxLength : 100,
				anchor : '100%',
				enableKeyEvents : true,
				listeners : {
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							Customercuscardviewstore.load({
								params : {
									wheresql : "customercode like '%"+field.getValue()+"%'"
								},
								callback : formloadRecord
							});
						}
					}
				}
			},{
				xtype : 'combo',
				fieldLabel : '性别',
				id : 'customersex',
				name : 'customersex',
				emptyText : '请选择',
				store : genderStore,
				mode : 'local',
				displayField : 'gender',
				valueField : 'gender',
				hiddenName : 'gender',
				triggerAction : 'all',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'customerphone',
				name : 'customerphone',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '纪念日',
				id : 'customergoodday',
				name : 'customergoodday',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '邮箱',
				id : 'customeremail',
				name : 'customeremail',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '入会时间',
				id : 'customertime',
				name : 'customertime',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '等级',
				id : 'customerlevel',
				name : 'customerlevel',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '有效期结束',
				id : 'cuscardend',
				name : 'cuscardend',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '卡种',
				id : 'cuscarddetail',
				name : 'cuscarddetail',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '卡余额',
				id : 'cuscardmoney',
				name : 'cuscardmoney',
				maxLength : 100,
				readOnly:true,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '卡积分',
				id : 'cuscardint',
				name : 'cuscardint',
				readOnly:true,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '入场时间',
				id : 'rctime',
				name : 'rctime',
				readOnly:true,
				maxLength : 100,
				anchor : '100%'
			} ]
		}
		, {
			columnWidth : .3,
			layout : 'form',
			items : [ {
				xtype : 'box',
				fieldLabel : '照片',
				id : 'customerimage',
				name : 'customerimage',
				autoEl : {  
	                tag : 'img'
	            },
				anchor : '100%'
			}]
		}
		],
		tbar : [{
			text : "进场刷卡",
			iconCls : 'add',
			handler : function() {
			}
		}
	]
	});
	function formloadRecord() {
		Customercuscardviewstore.each(function(record) {
			CustomercuscardviewdataForm.form.loadRecord(record);
			Ext.getCmp("customerimage").getEl().dom.src = record.data["customerimage"];
		    return;
		});
	}
})
