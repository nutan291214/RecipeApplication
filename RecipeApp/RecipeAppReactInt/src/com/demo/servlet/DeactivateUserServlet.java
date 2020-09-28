package com.demo.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.demo.DaoUtil.DaoConnection;
import com.demo.bean.Login;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/DeactivateUserServlet")
public class DeactivateUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public DeactivateUserServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ObjectMapper om=new ObjectMapper();
		Login log=om.readValue(request.getInputStream(), Login.class);
		PrintWriter out=response.getWriter();
		System.out.println(log);
		String email=log.getEmail();
		String password=log.getPassword();
		String status="deactivate";
		PreparedStatement ps=null;
		Connection con =DaoConnection.getConnect();
		try {
			ps=con.prepareStatement("update user set status=? where email=? and password=?");
			ps.setString(1, status);
			ps.setString(2, email);
			ps.setString(3, password);
			int i=ps.executeUpdate();
			if(i>0) {
    			String result="User Deactivation Successfull";
				System.out.println("user deactivated sucessfully");
		
				response.addHeader("Access-Control-Allow-Origin", "*");
				out.write(om.writeValueAsString(result));
		
    		}
    		else {
				String result="User Deactivation Failed";

				response.addHeader("Access-Control-Allow-Origin", "*");
				out.write(om.writeValueAsString(result));
			}

		}
		catch(SQLException se) {
			se.printStackTrace();
		}catch(Exception e) {
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
			}
			catch(SQLException se) {
				se.printStackTrace();
			}
		}

	}

}
