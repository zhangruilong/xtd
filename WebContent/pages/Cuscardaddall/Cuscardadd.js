Ext.onReady(function() {
	var Ccourseclassify = "批量发卡";
	var Ccoursetitle = "当前位置:业务管理》" + Ccourseclassify;
	
	var CustomercuscardviewdataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'CustomercuscardviewdataForm',
		title:Ccoursetitle,
		bodyStyle:'padding:50px;',
        renderTo:'divFormPanel',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [{
			columnWidth : .5,
			layout : 'form',
			items : [{
				xtype : 'textfield',
				fieldLabel : '起始卡号',
				id : 'cuscardno',
				name : 'cuscardno',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'textfield',
				fieldLabel : '有效期',
				id : 'cuscardpsw',
				name : 'cuscardpsw',
				maxLength : 100,
				allowBlank : false,
				anchor : '100%'
			},{
				xtype : 'datefield',
				fieldLabel : '有效期开始',
				id : 'cuscardbegin',
				name : 'cuscardbegin',
				allowBlank : false,
				format : 'Y-m-d',
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'datefield',
				fieldLabel : '有效期结束',
				id : 'cuscardend',
				name : 'cuscardend',
				allowBlank : false,
				format : 'Y-m-d',
				maxLength : 100,
				anchor : '100%'
			}
			,{
				xtype : 'numberfield',
				fieldLabel : '卡余次',
				id : 'cuscardtimes',
				name : 'cuscardtimes',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '卡总次数',
				id : 'cuscardnums',
				name : 'cuscardnums',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			}]
		}
		, {
			columnWidth : .5,
			layout : 'form',
			items : [ {
				xtype : 'numberfield',
				fieldLabel : '发卡数量',
				id : 'cuscardid',
				name : 'cuscardid',
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
					specialkey : function(field, e) {
						if (e.getKey() == Ext.EventObject.ENTER) {
							selectCardtype();
						}
					}
				}
			},{
				xtype : 'textfield',
				fieldLabel : '分类',
				id : 'cuscardtype',
				name : 'cuscardtype',
				maxLength : 100,
				allowBlank : false,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '卡余额',
				id : 'cuscardmoney',
				name : 'cuscardmoney',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			},{
				xtype : 'numberfield',
				fieldLabel : '卡积分',
				id : 'cuscardint',
				name : 'cuscardint',
				allowBlank : false,
				maxLength : 100,
				anchor : '100%'
			}]
		}
		],
		tbar : [{
			text : "确认发卡",
			iconCls : 'add',
			handler : function() {
				Ext.Msg.confirm('请确认', '<b>提示:</b>确定批量发卡？', function(btn, text) {
					if (btn == 'yes') {
						
					}else{
						return;
					}
				})
				if (CustomercuscardviewdataForm.form.isValid()) {
					var json = "[" + Ext.encode(CustomercuscardviewdataForm.form.getFieldValues(false)) + "]";
					CustomercuscardviewdataForm.form.submit({
						url : basePath + "CuscardAction.do?method=addAll",
						waitTitle : '提示',
						params : {//改
							json : json
						},
						success : function(form, action) {
							Ext.Msg.alert('提示', action.result.msg,function(){
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
	function formloadRecord() {
		Customercuscardviewstore.each(function(record) {
			CustomercuscardviewdataForm.form.loadRecord(record);
			Ext.getCmp("customerimage").getEl().dom.src = record.data["customerimage"];
		    return;
		});
	}
})
