package com.demo.controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.demo.DaoUtil.DaoConnection;
import com.demo.bean.User;

public class GetAllUser {
	
	public static List<User> getAllUser(){
		List<User> ual=new ArrayList<>();
		PreparedStatement ps=null;
		ResultSet rs=null;
		Connection con=DaoConnection.getConnect();
		try {
			
			ps=con.prepareStatement("select * from user");
			rs=ps.executeQuery();
			if(rs!=null) {
				while(rs.next()) {
					User u=new User();
					u.setUserId(rs.getInt(1));
					u.setName(rs.getString(2));
					u.setEmail(rs.getString(3));
					u.setPassword(rs.getString(4));
					u.setStatus(rs.getString(5));
					ual.add(u);
				}
			}
		}catch (SQLException e) {
			e.printStackTrace();
			
		}
		finally {
			try {
				if(ps!=null) {
					ps.close();
				}
				if(con!=null) {
					con.close();
				}
			}catch (SQLException e) {
				e.printStackTrace();
				// TODO: handle exception
			}
		}
		return ual;
	}

}
