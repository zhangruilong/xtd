package com.server;

import com.jacob.com.*;

public class CallSSO {
	private static Dispatch dif;
	// 加载单点控件SSOCrypto.SSOCrypt.1
	static {
		dif = new Dispatch("SSOCrypto.SSOCrypt.1");
	}

	// 产生随机码，调用单点的接口SSORadomGen，传递参数是strPlainString
	public static int SSORadomGen(String strPlainString) {
		Variant radom = Dispatch.call(dif, "SSORadomGen", new Variant(
				strPlainString));
		return radom.getInt();
	}

	// 取的加密串，调用单点的接口SSOEncrypt，传递参数是strPlainString，lngRandomnum，strSvrCert
	public static String SSOEncrypt(String strPlainString, int lngRandomnum) {
		String strSvrCert = "1BQYR-YLGXV-QM439-CJSCS-TCN6V";
		Variant encrypt = Dispatch.call(dif, "SSOEncrypt", new Variant(
				strPlainString), new Variant(lngRandomnum), new Variant(
				strSvrCert));
		return encrypt.getString();
	}
	
	public static void main(String[] args) {
		int num = SSORadomGen("zrl");
		System.out.println(num);
	}
}