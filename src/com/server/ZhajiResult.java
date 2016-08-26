package com.server;

public class ZhajiResult {
	int code;
	String message;
	String token;
	String result;
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public ZhajiResult(int code, String message, String token, String result) {
		super();
		this.code = code;
		this.message = message;
		this.token = token;
		this.result = result;
	}
	public ZhajiResult() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
