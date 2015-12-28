function selectCoach() {
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
			header : '地址',
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
			width : 80,
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
	
	var Coachbbar = pagesizebar(Coachstore);//定义分页
	var Coachgrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
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
	Coachgrid.region = 'center';
	Coachstore.load();//加载数据
	Coachstore.on("beforeload",function(){ 
		Coachstore.baseParams = {
				query : Ext.getCmp("query"+Coachaction).getValue()
		}; 
	});
	var selectgridWindow = new Ext.Window({
		layout : 'fit', // 设置窗口布局模式
		width : 620, // 窗口宽度
		height : document.body.clientHeight -4, // 窗口高度
		modal : true,
		//closeAction: 'hide',
		closable : true, // 是否可关闭
		collapsible : true, // 是否可收缩
		maximizable : true, // 设置是否可以最大化
		border : false, // 边框线设置
		constrain : true, // 设置窗口是否可以溢出父容器
		animateTarget : Ext.getBody(),
		pageY : 50, // 页面定位Y坐标
		pageX : document.body.clientWidth / 2 - 620 / 2, // 页面定位X坐标
		items : Coachgrid, // 嵌入的表单面板
		buttons : [
					{
						text : '确定',
						iconCls : 'ok',
						handler : function() {
							var selectRows = Coachgrid.getSelectionModel()
									.getSelections();
							if (selectRows.length != 1) {
								Ext.Msg.alert('提示', '请选择一条！', function() {
								});
								return;
							}
							Ext.getCmp('Allcourseallcoursecoachname').setValue(selectRows[0].get("coachname"));
							Ext.getCmp('Allcourseallcoursecoach').setValue(selectRows[0].get("coachid"));
							selectgridWindow.close();
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
