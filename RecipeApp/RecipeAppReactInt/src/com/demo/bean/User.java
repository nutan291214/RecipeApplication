package com.demo.bean;

public class User {
	private int userId;
	private String name;
	private String email;
	private String password;
	private String status;
	public User() {
		super();
	}
	public User(int userId, String name, String email, String password,String status) {
		super();
		this.userId = userId;
		this.name = name;
		this.email = email;
		this.password = password;
		this.status=status;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", name=" + name + ", email=" + email + ", password=" + password + ", status="
				+ status + "]";
	}
	
	

}
