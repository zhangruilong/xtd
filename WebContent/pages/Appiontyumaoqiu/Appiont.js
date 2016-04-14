Ext.onReady(function() {
	var project = "羽毛球";
	var Placetimeaction = "PlacetimeAction.do";
	var Placetimefields = ['placetimeid'
	        			    ,'placetimecode' 
	        			    ,'placetimename' 
	        			    ,'placetimedetail' 
	        			    ,'placetimestatue' 
	        			    ,'placetimebegin' 
	        			    ,'placetimeend' 
	        			    ,'placetimeproject' 
	        			      ];// 全部字段
	var Placetimestore = dataStore(Placetimefields, basePath + Placetimeaction + "?method=selAll");// 定义Placetimestore
	Placetimestore.load({params:{
		wheresql : "placetimeproject='"+project+"'"
	}});
	var Appiontclassify = "羽毛球维护";
	var Appionttitle = "当前位置:业务管理》" + Appiontclassify;
	var Appiontaction = "AppiontAction.do";
	var Appiontfields = ['appointid'
	        			    ,'appointcustomer' 
	        			    ,'appointcard' 
	        			    ,'appointplace' 
	        			    ,'appointcourse' 
	        			    ,'appointplacename' 
	        			    ,'appointcoursename' 
	        			    ,'appointcoachname' 
	        			    ,'appointproject' 
	        			    ,'appointbegin' 
	        			    ,'appointend' 
	        			    ,'appointdetail' 
	        			    ,'appointstatue' 
	        			    ,'createtime' 
	        			    ,'creator' 
	        			    ,'customercode' 
	        			    ,'openid' 
	        			    ,'customername' 
	        			    ,'customerphone' 
	        			    ,'cuscardtype' 
	        			    ,'cuscardno' 
	        			    ,'cuscarddetail' 
	        			      ];// 全部字段
	var Appiontkeycolumn = [ 'appointid' ];// 主键
	var Appiontstore = dataStore(Appiontfields, basePath + "AppiontviewAction.do" + "?method=selAllplace");// 定义Appiontstore
	var Appiontsm = new Ext.grid.CheckboxSelectionModel();// grid复选框模式
	var Appiontcm = new Ext.grid.ColumnModel({// 定义columnModel
		columns : [ new Ext.grid.RowNumberer(), Appiontsm, {// 改
			header : 'ID',
			dataIndex : 'appointid',
			hidden : true
		}
		, {
			header : '位置',
			dataIndex : 'appointplace',
			align : 'center',
			width : 80,
			hidden : true
		}
		, {
			header : '位置',
			dataIndex : 'appointplacename',
			align : 'center',
			width : 80,
			sortable : true
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
			width : 100,
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
			header : '卡种',
			dataIndex : 'cuscarddetail',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '状态',
			dataIndex : 'appointstatue',
			align : 'center',
			width : 80,
			sortable : true
		}
		, {
			header : '预约时间',
			dataIndex : 'appointbegin',
			align : 'center',
			width : 160,
			sortable : true
		}
		, {
			header : '创建时间',
			dataIndex : 'createtime',
			align : 'center',
			width : 160,
			sortable : true
		}
		]
	});
	
	var Appiontgrid = new Ext.grid.GridPanel({
		height : document.documentElement.clientHeight - 4,
		width : '100%',
		title : Appionttitle,
		store : Appiontstore,
		stripeRows : true,
		frame : true,
		loadMask : {
			msg : '正在加载表格数据,请稍等...'
		},
		cm : Appiontcm,
		sm : Appiontsm,
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
			xtype : 'combo',
			emptyText : '请选择',
			store : Placetimestore,
			mode : 'local',
			triggerAction : 'all',
			editable : false,
			allowBlank : false,
			displayField : 'placetimedetail',
			valueField : 'placetimedetail',
			hiddenName : 'placetimedetail',
			id : 'placetimedetail',
			name : 'placetimedetail',
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
			text : "查询",
			iconCls : 'select',
			handler : function() {
				Appiontstore.load({params:{
					stadiumname:Ext.getCmp('stadiumname').value,
					projectname:project,
					placetimedetail:Ext.getCmp('placetimedetail').value,
					appiontdate:Ext.getCmp('appiontdate').value
				}});
			}
		},'->',{
			text : "预约公共课",
			iconCls : 'add',
			handler : function() {
				var selections = Appiontgrid.getSelectionModel().getSelections();
				if (selections.length != 1 || selections[0].get("appointid")) {
					Ext.Msg.alert('提示', '请选择一条未被预约的数据！', function() {
					});
					return;
				}
				//选择一张会员卡
				selectCuscard(selections[0].get("appointplace"),selections[0].get("appointplacename")
						,Ext.getCmp('stadiumname').value,project
						,Ext.getCmp('placetimedetail').value,Ext.getCmp('appiontdate').value);
			}
		}
		]
	});
	Appiontgrid.region = 'center';
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ Appiontgrid ]
	});
})
