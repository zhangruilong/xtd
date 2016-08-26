package com.server;

public class ZhajiCard {
	int uid;
	String token;
	String card;
	String card_xtd;
	String expire_from;
	String expire_to;
	public ZhajiCard() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ZhajiCard(int uid, String token, String card, String card_xtd,
			String expire_from, String expire_to) {
		super();
		this.uid = uid;
		this.token = token;
		this.card = card;
		this.card_xtd = card_xtd;
		this.expire_from = expire_from;
		this.expire_to = expire_to;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getCard() {
		return card;
	}
	public void setCard(String card) {
		this.card = card;
	}
	public String getCard_xtd() {
		return card_xtd;
	}
	public void setCard_xtd(String card_xtd) {
		this.card_xtd = card_xtd;
	}
	public String getExpire_from() {
		return expire_from;
	}
	public void setExpire_from(String expire_from) {
		this.expire_from = expire_from;
	}
	public String getExpire_to() {
		return expire_to;
	}
	public void setExpire_to(String expire_to) {
		this.expire_to = expire_to;
	}
	
}
