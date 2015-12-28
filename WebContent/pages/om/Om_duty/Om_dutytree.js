var treepanel;
Ext.onReady(function() {
	var root = new Ext.tree.AsyncTreeNode({
		text : '应用菜单',
		expanded : true,
		icon : '../../../sysimages/home.gif',
		id : 'root'
	});
	treepanel = new Ext.tree.TreePanel({
		loader : new Ext.tree.TreeLoader({
			baseAttrs : {},
			dataUrl : basePath + Om_dutyaction + "?method=selTree"
		}),
		root : root,
		lines : true,
		title : '应用菜单',
		autoScroll : true,
		height : document.documentElement.clientHeight - 4,
		width : 180,
		containerScroll : true,
		animate : false,
		useArrows : false,
		enableDD : true, // 拖拽节点
	    listeners: {
            'click': function(node, checked){
            	node.getUI().getAnchor().href = "javascript:void(0);"
            	var queryValue = node.attributes['code'];
            	if(node.id=='root'){
        			queryValue = "";
        		}
            	Om_dutystore.load({
            		params : {
            			query : queryValue
            		}
            	});
            }
        }
	});
	// 在拖动的时候，主要通过发送ajax请求，到后台，进行数据的同步修改．
	treepanel.on('movenode',function(tree,node,oldParent,newParent,index){  
		var url = basePath + Om_dutyaction + "?method=updAll";
		var json = "[{" + "id:" + node.id + ",parentid:" + newParent.id + "}]";
		Ext.Ajax.request({  
			url : url,
			waitMsg : '正在处理数据,请稍候...',
			params:{ 
				json : json
			}  
		});  
	}); 
	// 点击右键出现tree菜单
	treepanel.on('contextmenu', function(node, event) { 
		node.select();// 点击右键同时选中该项
		event.preventDefault(); 
		// 定义右键菜单
		var contextMenu = new Ext.menu.Menu({  
			items : [{  
				text : '增加子节点',  
				handler : function() {
					Om_dutydataForm.form.reset();
					createWindow(basePath + Om_dutyaction + "?method=insAll", "新增", Om_dutydataForm, node);
					Om_dutydataForm.getForm().setValues({Om_dutyparentduty:node.id});
				}  
			}, {  
				text : '删除本节点',  
				handler : function() {
					Ext.Msg.confirm('请确认', '<b>提示:</b>请确认要删除当前选择的条目？', function(btn, text) {
						if (btn == 'yes') {
							Ext.Ajax.request({
								url : basePath + Om_dutyaction + "?method=delAll",
								method : 'POST',
								params : {
									json : '[{dutyid:' + node.id + '}]'
								},
								success : function(response) {
									var resp = Ext.decode(response.responseText); 
									Ext.Msg.alert('提示', resp.msg, function(){
										node.parentNode.reload(); 
									});
								},
								failure : function(response) {
									Ext.Msg.alert('提示', '网络出现问题，请稍后再试');
								}
							});
						}
					});
				}   
			}, {
				 text : "刷新",
				 handler : function()
				 { 
					node.reload();
				 }
			}]  
		});
		contextMenu.showAt(event.getPoint());  
	});
	var win = new Ext.Viewport({//只能有一个viewport
		resizable : true,
		layout : 'border',
		bodyStyle : 'padding:0px;',
		items : [ {
	        region: 'west',
	        floatable: false,
	        width: 180,
	        items: treepanel
	    }, Om_dutygrid]
	});
})
