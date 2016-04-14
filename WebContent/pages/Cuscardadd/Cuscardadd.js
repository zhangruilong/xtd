Ext.onReady(function() {
	var Ccourseclassify = "会员检票";
	var Ccoursetitle = "当前位置:业务管理》" + Ccourseclassify;
	var genderStore = new Ext.data.ArrayStore({//
		fields:["gender"],
		data:[["男"],["女"]]
	});
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
	var CcoursedataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CcoursedataForm',
		title:Ccoursetitle,
		bodyStyle:'padding:50px;',
        renderTo:'divFormPanel',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'customerid',
				name : 'customerid',
				hidden : true
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
				anchor : '100%'
			}
			,{
				xtype : 'textfield',
				fieldLabel : '卡号',
				id : 'Ccourseccoursecustomer',
				name : 'ccoursecustomer',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'datefield',
				fieldLabel : '有效期开始',
				id : 'cuscardbegin',
				name : 'cuscardbegin',
				maxLength : 100,
				anchor : '100%'
			}
			,{
				xtype : 'numberfield',
				fieldLabel : '卡余次',
				id : 'cuscardtimes',
				name : 'cuscardtimes',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '卡总次数',
				id : 'cuscardnums',
				name : 'cuscardnums',
				maxLength : 100,
				anchor : '100%'
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
				fieldLabel : '等级',
				id : 'customerlevel',
				name : 'customerlevel',
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
				fieldLabel : '会员姓名',
				id : 'customername',
				name : 'customername',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '分类',
				id : 'cuscardtype',
				name : 'cuscardtype',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'datefield',
				fieldLabel : '有效期结束',
				id : 'cuscardend',
				name : 'cuscardend',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '卡余额',
				id : 'cuscardmoney',
				name : 'cuscardmoney',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '卡积分',
				id : 'cuscardint',
				name : 'cuscardint',
				maxLength : 100,
				anchor : '100%'
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
	                tag : 'img',  
	                src : '../../upload/dongcheng/coach/chengchao.png',  
	                style : 'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale);',  
	                complete : 'off',  
	                id : 'imageBrowse'  
	            },
				anchor : '100%'
			}]
		}
		],
		tbar : [{
			text : "确认发卡",
			iconCls : 'add',
			handler : function() {
			}
		}
	]
	});
})
