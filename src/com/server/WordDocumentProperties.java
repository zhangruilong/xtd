package com.server;

import com.jacob.activeX.ActiveXComponent;
import com.jacob.com.ComException;
import com.jacob.com.Dispatch;
import com.jacob.com.Variant;

public class WordDocumentProperties {
	// 声明一个word对象
	private ActiveXComponent objWord;

	// 声明四个word组件
	private Dispatch custDocprops;

	private Dispatch builtInDocProps;

	private Dispatch document;

	private Dispatch wordObject;

	public WordDocumentProperties() {
	}
//
//	/** */
//	/**
//	 * 打开word文挡
//	 */
//	public void open(String filename) {
//		// 创建一个word对象
//		objWord = new ActiveXComponent("Word.Application");
//
//		// 为wordobject组件附值
//		wordObject = (Dispatch) (objWord.getObject()); // 改了这里
//
//		// 生成一个只读方式的word文挡组件
//		Dispatch.put(wordObject, "Visible", new Variant(false));
//
//		// 获取文挡属性
//		Dispatch documents = objWord.getProperty("Documents").toDispatch();
//
//		// 打开激活文挡
//		document = Dispatch.call(documents, "Open", filename).toDispatch();
//	}
//
//	public void selectCustomDocumentProperitiesMode() {
//
//		custDocprops = Dispatch.get(document, "CustomDocumentProperties")
//				.toDispatch();
//	}
//
//	public void selectBuiltinPropertiesMode() {
//
//		builtInDocProps = Dispatch.get(document, "BuiltInDocumentProperties")
//				.toDispatch();
//	}
//
//	/** */
//	/**
//	 * 关闭文挡
//	 */
//	public void close() {
//
//		Dispatch.call(document, "Close");
//	}
//
//	public String getCustomProperty(String cusPropName) {
//		try {
//			cusPropName = Dispatch.call((Dispatch) custDocprops, "Item",
//					cusPropName).toString();
//		} catch (ComException e) {
//
//			cusPropName = null;
//		}
//
//		return cusPropName;
//	}
//
//	public String getBuiltInProperty(String builtInPropName) {
//		try {
//			builtInPropName = Dispatch.call((Dispatch) builtInDocProps, "Item",
//					builtInPropName).toString();
//		} catch (ComException e) {
//
//			builtInPropName = null;
//		}
//
//		return builtInPropName;
//	}

	public static void main(String[] args) {

//			WordDocumentProperties jacTest = new WordDocumentProperties();
//
//			jacTest.open("D:\\s.doc");
//
//			jacTest.selectCustomDocumentProperitiesMode();
//
//			jacTest.selectBuiltinPropertiesMode();
//
//			String custValue = jacTest.getCustomProperty("Information Source");
//
//			String builtInValue = jacTest.getBuiltInProperty("Author");
//
//			jacTest.close();
//
//			System.out.println("Document Val One: " + custValue);
//			System.out.println("Document Author: " + builtInValue);
			
//			 ActiveXComponent mActiveXComponent = new ActiveXComponent("mwrf32"); 
//			 Dispatch.call(mActiveXComponent, "rf_card"); 

//			 ActiveXComponent comp=new ActiveXComponent("Com.Calculation");           
//             System.out.println("The Library been loaded, and an activeX component been created");
	//		 创建一个word对象
		ActiveXComponent objWord = new ActiveXComponent("mwrf32");
	
			// 为wordobject组件附值
		Dispatch	wordObject = (Dispatch) (objWord.getObject()); // 改了这里
	}
}
