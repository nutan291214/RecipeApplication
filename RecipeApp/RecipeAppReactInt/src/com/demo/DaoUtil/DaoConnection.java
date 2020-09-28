package com.demo.DaoUtil;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DaoConnection {
	private static String driver="com.mysql.cj.jdbc.Driver";
	private static String url="jdbc:mysql://localhost:3306/recipeschema?autoReconnect=true&useSSL=false";
	private static String user="root";
	private static String pass="root";
	 private static Connection con=null;
	 
	 public static Connection getConnect() {
		 
		 try {
			 Class.forName(driver);
			 con=DriverManager.getConnection(url, user, pass);
		 }catch (ClassNotFoundException e) {
			// TODO: handle exception
			 e.printStackTrace();
		}catch(SQLException se) {
			se.printStackTrace();
		}catch(Exception e) {
			e.printStackTrace();
		}
		 return con;
	 }
	 

}
