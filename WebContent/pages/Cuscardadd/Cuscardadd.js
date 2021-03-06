Ext.onReady(function() {
	var Ccourseclassify = "发卡操作";
	var Ccoursetitle = "当前位置:业务管理》" + Ccourseclassify;
	var Cardtypeaction = "CardtypeAction.do";
	var Cardtypefields = ['cardtypeid'
	        			    ,'cardtypecode' 
	        			    ,'cardtypename' 
	        			    ,'cardtypeclass' 
	        			    ,'cardtypeday' 
	        			    ,'cardtypeprice' 
	        			    ,'cardtypemoney' 
	        			    ,'cardtypetimes' 
	        			    ,'cardtypedetail' 
	        			    ,'cardtypestatue' 
	        			      ];// 全部字段
	var Cardtypestore = dataStore(Cardtypefields, basePath + Cardtypeaction + "?method=selAll");// 定义Cardtypestore
	Cardtypestore.load();
	
	var CustomercuscardviewdataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CustomercuscardviewdataForm',
		title:Ccoursetitle,
		bodyStyle:'padding:20px;',
		labelAlign : 'right',
		renderTo:'divFormPanel',
		fileUpload : true,
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
			},{
				xtype : 'textfield',
				id : 'customercode',
				name : 'customercode',
				hidden : true
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [{
				xtype : 'textfield',
				fieldLabel : '卡号',
				id : 'cuscardno',
				name : 'cuscardno',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '卡种',
				id : 'cuscarddetail',
				name : 'cuscarddetail',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%',
				listeners : {
					focus : function(field, e) {
						selectCardtype();
					}
				}
			},{
				xtype : 'datefield',
				fieldLabel : '有效期开始',
				id : 'cuscardbegin',
				name : 'cuscardbegin',
				format : 'Y-m-d',
				allowBlank : false,
				maxLength : 100,
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
				xtype : 'numberfield',
				fieldLabel : '卡余次',
				id : 'cuscardtimes',
				readOnly:true,
				name : 'cuscardtimes',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '卡总次数',
				id : 'cuscardnums',
				readOnly:true,
				name : 'cuscardnums',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '卡积分',
				id : 'cuscardint',
				name : 'cuscardint',
				allowBlank : false,
				value : 0,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '证件号码',
				id : 'customercdcard',
				name : 'customercdcard',
				maxLength : 100,
				
				anchor : '100%'
			},{
				xtype : 'datefield',
				fieldLabel : '生日',
				id : 'customerbirthday',
				name : 'customerbirthday',
				maxLength : 100,
				format : 'Y-m-d',
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '入会途径',
				id : 'customerhow',
				name : 'customerhow',
				maxLength : 100,
				
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '会籍',
				id : 'customeremp',
				name : 'customeremp',
				maxLength : 100,
				anchor : '100%',
				listeners : {
					focus : function(field, e) {
						selectEmp();
					}
				}
			},{
				xtype : 'textfield',
				fieldLabel : '等级',
				id : 'customerlevel',
				name : 'customerlevel',
				maxLength : 100,
				
				anchor : '100%'
			} ]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '会员姓名',
				id : 'customername',
				name : 'customername',
				allowBlank : false,
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
				xtype : 'datefield',
				fieldLabel : '有效期结束',
				id : 'cuscardend',
				name : 'cuscardend',
				format : 'Y-m-d',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '原价',
				id : 'cuscardmoney',
				name : 'cuscardmoney',
				allowBlank : false,
				readOnly:true,
				maxLength : 100,
				anchor : '100%'
			}
			,{
				xtype : 'numberfield',
				fieldLabel : '折扣',
				id : 'updtime',
				name : 'updtime',
				allowBlank : false,
				value : 0,
				maxLength : 100,
				anchor : '100%',
				listeners : {
					blur : function(field, e) {
						Ext.getCmp("updor").setValue(Ext.getCmp("cuscardmoney").getValue()-Ext.getCmp("updtime").getValue());
					}
				}
			}
			,{
				xtype : 'numberfield',
				fieldLabel : '售价',
				id : 'updor',
				name : 'updor',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'combo',
				fieldLabel : '性别',
				id : 'customersex',
				name : 'customersex',
				emptyText : '请选择',
				store : sexStore,
				mode : 'local',
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'customersex',
				triggerAction : 'all',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '年龄',
				id : 'customerage',
				name : 'customerage',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '手机',
				id : 'customerphone',
				name : 'customerphone',
				maxLength : 100,
				allowBlank : false,
				anchor : '100%'
			},{
				xtype : 'datefield',
				fieldLabel : '纪念日',
				id : 'customergoodday',
				name : 'customergoodday',
				maxLength : 100,
				format : 'Y-m-d',
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '邮箱',
				id : 'customeremail',
				name : 'customeremail',
				maxLength : 100,
				
				anchor : '100%'
			},{
				xtype : 'datefield',
				fieldLabel : '入会时间',
				id : 'customertime',
				name : 'customertime',
				format : 'Y-m-d',
				maxLength : 100,
				
				anchor : '100%'
			} ]
		}
		, {
			columnWidth : .3,
			layout : 'form',
			items : [ {
				xtype : 'hidden',
				fieldLabel : '照片',
				id : 'customerimage',
				name : 'customerimage',
//				inputType : 'file',
				anchor : '95%'
			}
//			,{
//				xtype : 'box',
//				fieldLabel : '照片',
//				id : 'customerimage',
//				name : 'customerimage',
//				autoEl : {  
//	                tag : 'img'  
//	            },
//				anchor : '100%'
//			}
			]
		}
		],
		buttons : [{
			text : "确认发卡",
			iconCls : 'add',
			handler : function() {
//				if(!Ext.getCmp('cuscardid').getValue()){
//					Ext.Msg.confirm('请确认', '<b>提示:</b>该用户已有一张会员卡,确定还要发卡？', function(btn, text) {
//						if (btn == 'yes') {
//							
//						}else{
//							return;
//						}
//					})
//				}
				Ext.getCmp("customerimage").setValue(imageserverurl);
				var num = GetRandomNum(1,4294967294);//闸机的客户号4字节无符号整形
				Ext.getCmp("customercode").setValue(num);
				if (CustomercuscardviewdataForm.form.isValid()) {
					var json = "[" + Ext.encode(CustomercuscardviewdataForm.form.getValues(false)) + "]";
					CustomercuscardviewdataForm.form.submit({
						url : basePath + "CuscardAction.do?method=addCuscardcustomer",
						waitTitle : '提示',
						waitMsg : '正在处理数据,请稍候...',
						method : 'GET',
						params : {//改
							json : json
						},
						success : function(form, action) {
							Ext.Msg.alert('提示', action.result.msg,function(){
								imageserverurl = "";
//								var zhajicard;
//								zhajicard.UID = num;
//								zhajicard.CARD = Ext.getCmp("cuscardno").getValue();
//								zhajicard.CARD_XTD = Ext.getCmp("cuscardno").getValue();
//								zhajicard.EXPIRE_FROM = Ext.getCmp("cuscardbegin").getValue();
//								zhajicard.EXPIRE_TO = Ext.getCmp("cuscardend").getValue();
//								zhajiall(zhajicard);
							});
						},
						failure : function(form, action) {
							Ext.Msg.alert('提示', '网络出现问题，请稍后再试');
						},
						waitMsg : '正在处理数据,请稍候...'
					});
				} else {
			        Ext.Msg.alert('提示', '请正确填写表单!');
			    }
			}
		}
	]
	});
})
