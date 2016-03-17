function selectMycourse(customerid) {
	var Mycourseclassify = "我的私教课";
	var Mycoursetitle = "当前位置:业务管理》" + Mycourseclassify;
	var Mycourseaction = "MycourseAction.do";
	var Mycoursefields = ['mycourseid'
	        			    ,'mycoursecoach' 
	        			    ,'mycoursecustomer' 
	        			    ,'mycoursename' 
	        			    ,'mycourseproject' 
	        			    ,'mycoursenum' 
	        			    ,'mycoursemoney' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'updtime' 
	        			    ,'updor' 
	        			    ,'coachcode' 
	        			    ,'coachname' 
	        			    ,'coachphone' 
	        			      ];// 全部字段
	var Mycoursekeycolumn = [ 'mycourseid' ];// 主键
	var Mycoursestore = dataStore(Mycoursefields, basePath + "MycourseviewAction.do" + "?method=selAll");// 定义Mycoursestore
	var Mycoursesm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Mycoursecm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Mycoursesm, {// 改
			header : 'ID',
			dataIndex : 'mycourseid',
			hidden : true
		}
		, {
			header : '会员id',
			dataIndex : 'mycoursecustomer',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '教练',
			dataIndex : 'mycoursecoach',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '教练编码',
			dataIndex : 'coachcode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '教练姓名',
			dataIndex : 'coachname',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '教练手机',
			dataIndex : 'coachphone',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '课程',
			dataIndex : 'mycoursename',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '项目',
			dataIndex : 'mycourseproject',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '课时',
			dataIndex : 'mycoursenum',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '费用',
			dataIndex : 'mycoursemoney',
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
	var MycoursedataForm = new Ext.form.FormPanel({// 定义新增和修改的FormPanel
		id:'MycoursedataForm',
		labelAlign : 'right',
		frame : true,
		layout : 'column',
		items : [ {
			items : [ {
				xtype : 'textfield',
				id : 'Mycoursemycourseid',
				name : 'mycourseid',
				hidden : true
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '教练',
				id : 'Mycoursemycoursecoach',
				name : 'mycoursecoach',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '项目',
				id : 'Mycoursemycourseproject',
				name : 'mycourseproject',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '课时',
				id : 'Mycoursemycoursenum',
				name : 'mycoursenum',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		, {
			columnWidth : 1,
			layout : 'form',
			items : [ {
				xtype : 'textfield',
				fieldLabel : '费用',
				id : 'Mycoursemycoursemoney',
				name : 'mycoursemoney',
				maxLength : 100,
				anchor : '95%'
			} ]
		}
		]
	});
	
	var Mycoursegrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 30,
		width : '100%',
		store : Mycoursestore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Mycoursecm,
		sm : Mycoursesm,
		tbar : [{
				text : "预约课程",
				iconCls : 'add',
				handler : function() {
					var selections = Mycoursegrid.getSelectionModel().getSelections();
					if (selections.length != 1) {
						Ext.Msg.alert('提示', '请选择一条要修改的记录！', function() {
						});
						return;
					}
					selectCourse(customerid,selections[0].data['mycourseid'],selections[0].data['mycoursename']
					,selections[0].data['mycoursenum'],selections[0].data['mycoursecoach']
					,selections[0].data['coachname'],selections[0].data['mycourseproject']);
				}
			},'-',{
				text : "购买课程",
				iconCls : 'add',
				handler : function() {
					selectAllcourse(customerid);
				}
			}
		]
	});
	Mycoursegrid.region = 'center';
	Mycoursestore.on("beforeload",function(){ 
		Mycoursestore.baseParams = {
				wheresql : "mycoursecustomer='"+customerid+"'"
		}; 
	});
	Mycoursestore.load();//加载数据
	return Mycoursegrid;
}
