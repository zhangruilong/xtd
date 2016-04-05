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
				xtype : 'combo',
				emptyText : '请选择',
				store : stadiumStore,
				mode : 'local',
				triggerAction : 'all',
				editable : false,
				allowBlank : false,
				displayField : 'name',
				valueField : 'name',
				hiddenName : 'stadiumname',
				id : 'stadiumname',
				name : 'stadiumname',
				maxLength : 50,
				anchor : '95%'
			},'-',{
				xtype : 'datefield',
				emptyText : '日期',
				id : 'appiontdate',
				name : 'appiontdate',
				maxLength : 100,
				format : 'Y-m-d',
				allowBlank : false,
				anchor : '95%'
			},'-',{
				xtype : 'timefield',
				emptyText : '开始时间',
				id : 'appointbegin',
				name : 'appointbegin',
				width : 100,
				allowBlank : false,
				anchor : '95%'
			},'-',{
				xtype : 'timefield',
				emptyText : '结束时间',
				id : 'appointend',
				name : 'appointend',
				width : 100,
				allowBlank : false,
				anchor : '95%'
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
	var selectgridWindow = new Ext.Window({
		layout : 'fit', // 设置窗口布局模式
		width : 820, // 窗口宽度
		height : 580, // 窗口高度
		modal : true,
		title : Mycoursetitle,
		closeAction: 'hide',
		closable : true, // 是否可关闭
		collapsible : true, // 是否可收缩
		maximizable : true, // 设置是否可以最大化
		border : false, // 边框线设置
		constrain : true, // 设置窗口是否可以溢出父容器
		animateTarget : Ext.getBody(),
		pageY : 50, // 页面定位Y坐标
		pageX : document.body.clientWidth / 2 - 820 / 2, // 页面定位X坐标
		items : Mycoursegrid, // 嵌入的表单面板
		buttons : [
					{
						text : '预约',
						iconCls : 'ok',
						handler : function() {
							var selectRows = Mycoursegrid.getSelectionModel()
									.getSelections();
							if (selectRows.length != 1) {
								Ext.Msg.alert('提示', '请选择一条！', function() {
								});
								return;
							}
							var json = "[{'appointcustomer':'"+customerid
//		        			    +"','appointplace':'"+selectRows[0].data['placeid']
		        			    +"','appointcourse':'"+selectRows[0].data['mycourseid']
		        			    +"','appointplacename':'"+selectRows[0].data['mycoursename']+"-"+selectRows[0].data['coachname']
	//	        			    +"','appointcoursename':'"+mycoursename
	//	        			    +"','appointcoachname':'"+coachname
								+"','appointproject':'"+selectRows[0].data['mycourseproject']
								+"','appointcoursename':'"+Ext.getCmp('stadiumname').value
								+"','appointbegin':'"+Ext.getCmp('appiontdate').value
								+"','appointdetail':'"+Ext.getCmp('appointbegin').value+"~"+Ext.getCmp('appointend').value
		        			    +"'}]";
							Ext.Ajax.request({
								url : basePath + "AppiontAction.do?method=insAll",
								method : 'POST',
								params : {
									json : json
								},
								success : function(response) {
									var resp = Ext.decode(response.responseText); 
									Ext.Msg.alert('提示', resp.msg, function(){
										selectgridWindow.close();
									});
								},
								failure : function(response) {
									Ext.Msg.alert('提示', '网络出现问题，请稍后再试');
								}
							});
						}
					}, '-', {
						text : '关闭',
						iconCls : 'close',
						handler : function() {
							selectgridWindow.close();
						}
					}]
	});
	selectgridWindow.show();
}
