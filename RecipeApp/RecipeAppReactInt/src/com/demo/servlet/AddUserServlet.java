package com.demo.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.LocalDate;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.demo.DaoUtil.DaoConnection;
import com.demo.bean.User;
import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.mysql.jdbc.exceptions.MySQLIntegrityConstraintViolationException;

@WebServlet("/AddUserServlet")
public class AddUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public AddUserServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/json");
		ObjectMapper om=new ObjectMapper();
		User u=om.readValue(request.getInputStream(), User.class);
		PrintWriter out=response.getWriter();
		
		System.out.println(u);
		String name=u.getName();
		String email=u.getEmail();
		String password=u.getPassword();
		LocalDate dt=LocalDate.now();
		String ld=dt.toString();
		String status="active";
		PreparedStatement ps=null;
		Connection con= DaoConnection.getConnect();
		try {
			ps=con.prepareStatement("insert into user(name,email,password,status,activatedDate) values(?,?,?,?,?)");
			ps.setString(1, name);
			ps.setString(2, email);
			ps.setString(3, password);
			ps.setString(4, status);
			ps.setString(5, ld);
			
			int i=ps.executeUpdate();
			
			if(i>0) {
				dataInserted(i, request, response, out);
			}
				
			}
		catch(MySQLIntegrityConstraintViolationException e) {
			String result="PassWord or Email Already Exist Please Enter Unique One";
//			resp.setHeader("Access-Control-Allow-Origin", "*");
//			resp.addHeader("Access-Control-Allow-Origin", "*");

			out.write(om.writeValueAsString(result));
			System.out.println(result);
			e.printStackTrace();
		}

		catch(Exception e) {
			e.printStackTrace();
			String result="Not Inserted";
			out.write(om.writeValueAsString(result));
			System.out.println(result);
		}
		finally {
			try {
				if(ps!=null) {
					ps.close();
				}
				if(con!=null) {
					con.close();
				}
			}
			catch(SQLException se) {
				se.printStackTrace();
			}
		}
		
	}
	
	public void dataInserted(int i,HttpServletRequest req, HttpServletResponse resp,PrintWriter out) {
		if(i>0) {
			ObjectMapper om=new ObjectMapper();
			
			String result="Register successfully";
			
//			resp.setHeader("Access-Control-Allow-Origin", "*");
			resp.addHeader("Access-Control-Allow-Origin", "*");
			
			try {
				out.write(om.writeValueAsString(result));
				
			} catch (JsonGenerationException e) {
				
				e.printStackTrace();
			} catch (JsonMappingException e) {
				
				e.printStackTrace();
			} catch (IOException e) {
				
				e.printStackTrace();
			}
		}
	

	}
}
