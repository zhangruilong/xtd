function selectPlace() {
	var Placeaction = "PlaceviewAction.do";
	var Placefields = ['placeid'
	        			    ,'placestadium' 
	        			    ,'placecode' 
	        			    ,'placename' 
	        			    ,'placepeople' 
	        			    ,'placedetail' 
	        			    ,'placestatue' 
	        			    ,'placebegin' 
	        			    ,'placeend' 
	        			    ,'placeproject' 
	        			      ];// 全部字段
	var Placekeycolumn = [ 'placeid' ];// 主键
	var Placestoredanche = dataStore(Placefields, basePath + Placeaction + "?method=selAlldanche");// 定义Placestore
	var Placesmdanche = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Placecmdanche = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Placesmdanche, {// 改
			header : 'ID',
			dataIndex : 'placeid',
			hidden : true
		}
		, {
			header : '编码',
			dataIndex : 'placecode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '名称',
			dataIndex : 'placename',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'placedetail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'placestatue',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '开始时间',
			dataIndex : 'placebegin',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '结束时间',
			dataIndex : 'placeend',
			align : 'center',
			width : 80,
			sortable : true
		}
		]
	});
	
	var Placegriddanche = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		store : Placestoredanche,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Placecmdanche,
		sm : Placesmdanche
	});
	Placegriddanche.region = 'center';

	var Placestoreyouyong = dataStore(Placefields, basePath + Placeaction + "?method=selAllyouyong");// 定义Placestore
	var Placesmyouyong = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Placecmyouyong = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Placesmyouyong, {// 改
			header : 'ID',
			dataIndex : 'placeid',
			hidden : true
		}
		, {
			header : '编码',
			dataIndex : 'placecode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '名称',
			dataIndex : 'placename',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'placedetail',
			align : 'center',
			width : 80,
			sortable : true
		}
		]
	});
	
	var Placegridyouyong = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		store : Placestoreyouyong,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Placecmyouyong,
		sm : Placesmyouyong
	});
	Placegridyouyong.region = 'center';
	
	var Placestoreyujia = dataStore(Placefields, basePath + Placeaction + "?method=selAllyujia");// 定义Placestore
	var Placesmyujia = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Placecmyujia = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Placesmyujia, {// 改
			header : 'ID',
			dataIndex : 'placeid',
			hidden : true
		}
		, {
			header : '编码',
			dataIndex : 'placecode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '名称',
			dataIndex : 'placename',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '人数',
			dataIndex : 'placepeople',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'placedetail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'placestatue',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '开始时间',
			dataIndex : 'placebegin',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '结束时间',
			dataIndex : 'placeend',
			align : 'center',
			width : 80,
			sortable : true
		}
		]
	});
	
	var Placegridyujia = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		store : Placestoreyujia,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Placecmyujia,
		sm : Placesmyujia
	});
	Placegridyujia.region = 'center';

	var Placestoreyumaoqiu = dataStore(Placefields, basePath + Placeaction + "?method=selAllyumaoqiu");// 定义Placestore
	var Placesmyumaoqiu = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Placecmyumaoqiu = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Placesmyumaoqiu, {// 改
			header : 'ID',
			dataIndex : 'placeid',
			hidden : true
		}
		, {
			header : '编码',
			dataIndex : 'placecode',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '名称',
			dataIndex : 'placename',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '备注',
			dataIndex : 'placedetail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'placestatue',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '开始时间',
			dataIndex : 'placebegin',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '结束时间',
			dataIndex : 'placeend',
			align : 'center',
			width : 80,
			sortable : true
		}
		]
	});
	
	var Placegridyumaoqiu = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		store : Placestoreyumaoqiu,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Placecmyumaoqiu,
		sm : Placesmyumaoqiu
	});
	Placegridyumaoqiu.region = 'center';
	var mTabPanel = new Ext.TabPanel({//只能有一个viewport
	    activeTab: 0,
		items : [ {
	        title: '单车',
	        items: Placegriddanche, // 嵌入的表单面板
			buttons : [
						{
							text : '确定',
							iconCls : 'ok',
							handler : function() {
								var selectRows = Placegriddanche.getSelectionModel()
										.getSelections();
								if (selectRows.length != 1) {
									Ext.Msg.alert('提示', '请选择一条！', function() {
									});
									return;
								}
								alert(selectRows[0].get("placename"));
//								Ext.getCmp('Empempstadiumname').setValue(selectRows[0].get("stadiumname"));
//								Ext.getCmp('Empempstadium').setValue(selectRows[0].get("stadiumid"));
								selectgridWindow.close();
							}
						}, '-', {
							text : '关闭',
							iconCls : 'close',
							handler : function() {
								mTabPanelWindow.close();
							}
						}]
	    },{
	        title: '游泳',
	        items: Placegridyouyong, // 嵌入的表单面板
			buttons : [
						{
							text : '确定',
							iconCls : 'ok',
							handler : function() {
								var selectRows = Placegridyouyong.getSelectionModel()
										.getSelections();
								if (selectRows.length != 1) {
									Ext.Msg.alert('提示', '请选择一条！', function() {
									});
									return;
								}
								alert(selectRows[0].get("placename"));
//								Ext.getCmp('Empempstadiumname').setValue(selectRows[0].get("stadiumname"));
//								Ext.getCmp('Empempstadium').setValue(selectRows[0].get("stadiumid"));
								selectgridWindow.close();
							}
						}, '-', {
							text : '关闭',
							iconCls : 'close',
							handler : function() {
								mTabPanelWindow.close();
							}
						}]
	    },{
	        title: '羽毛球',
	        items: Placegridyumaoqiu, // 嵌入的表单面板
			buttons : [
						{
							text : '确定',
							iconCls : 'ok',
							handler : function() {
								var selectRows = Placegridyumaoqiu.getSelectionModel()
										.getSelections();
								if (selectRows.length != 1) {
									Ext.Msg.alert('提示', '请选择一条！', function() {
									});
									return;
								}
								alert(selectRows[0].get("placename"));
//								Ext.getCmp('Empempstadiumname').setValue(selectRows[0].get("stadiumname"));
//								Ext.getCmp('Empempstadium').setValue(selectRows[0].get("stadiumid"));
								selectgridWindow.close();
							}
						}, '-', {
							text : '关闭',
							iconCls : 'close',
							handler : function() {
								mTabPanelWindow.close();
							}
						}]
	    },{
	        title: '瑜伽',
	        items: Placegridyujia, // 嵌入的表单面板
			buttons : [
						{
							text : '确定',
							iconCls : 'ok',
							handler : function() {
								var selectRows = Placegridyujia.getSelectionModel()
										.getSelections();
								if (selectRows.length != 1) {
									Ext.Msg.alert('提示', '请选择一条！', function() {
									});
									return;
								}
								alert(selectRows[0].get("placename"));
//								Ext.getCmp('Empempstadiumname').setValue(selectRows[0].get("stadiumname"));
//								Ext.getCmp('Empempstadium').setValue(selectRows[0].get("stadiumid"));
								selectgridWindow.close();
							}
						}, '-', {
							text : '关闭',
							iconCls : 'close',
							handler : function() {
								mTabPanelWindow.close();
							}
						}]
	    }]
	});
	mTabPanel.on("tabchange",function(a){
		var mtitle = a.getActiveTab().title;
		if(mtitle=="单车"){
			Placestoredanche.load();//加载数据
		}else if(mtitle=="游泳"){
			Placestoreyouyong.load();//加载数据
		}else if(mtitle=="瑜伽"){
			Placestoreyujia.load();//加载数据
		}else if(mtitle=="羽毛球"){
			Placestoreyumaoqiu.load();//加载数据
		}
	});
	var mTabPanelWindow = new Ext.Window({
		layout : 'fit', // 设置窗口布局模式
		width : 820, // 窗口宽度
		height : 580, // 窗口高度
		modal : true,
		closeAction: 'hide',
		closable : true, // 是否可关闭
		collapsible : true, // 是否可收缩
		maximizable : true, // 设置是否可以最大化
		border : false, // 边框线设置
		constrain : true, // 设置窗口是否可以溢出父容器
		animateTarget : Ext.getBody(),
		pageY : 50, // 页面定位Y坐标
		pageX : document.body.clientWidth / 2 - 820 / 2, // 页面定位X坐标
		items : mTabPanel
	});
	mTabPanelWindow.show();
}
function addAppoint(url, selections, store, keycolumn) {
	Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要预约当前选择的场地？', function(btn, text) {
		if (btn == 'yes') {
			var ids = '[';
//			selections[0].data["placeid"];
			for (var i = 0; i < selections.length; i++) {
				ids += "{";
				for (var j = 0; j < keycolumn.length; j++){
					ids += "'"+keycolumn[j]+"':'" + selections[i].data[keycolumn[j]] + "',"
				}
				ids = ids.substr(0, ids.length - 1) + "},";
			};
			Ext.Ajax.request({
				url : basePath + "AppiontAction.do" + "?method=insAll",
				method : 'POST',
				params : {
					json : ids.substr(0, ids.length - 1) + "]"
				},
				success : function(response) {
					var resp = Ext.decode(response.responseText); 
					Ext.Msg.alert('提示', resp.msg, function(){
						store.reload();
					});
				},
				failure : function(response) {
					Ext.Msg.alert('提示', '网络出现问题，请稍后再试');
				}
			});
		}
	});
}