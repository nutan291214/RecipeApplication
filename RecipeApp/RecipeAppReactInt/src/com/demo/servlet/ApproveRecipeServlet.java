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
import com.demo.bean.Addrecipe;
import com.demo.bean.Login;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/ApproveRecipeServlet")
public class ApproveRecipeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ApproveRecipeServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		PrintWriter out=response.getWriter();
		int recipeid=Integer.parseInt(request.getParameter("recipeId"));
		String status="Approve";
		PreparedStatement ps=null;
		Connection con =DaoConnection.getConnect();
		try {
			ps=con.prepareStatement("update recipe set status=? where recipeId=?");
			ps.setString(1, status);
			ps.setInt(2, recipeid);
			int i=ps.executeUpdate();
			if(i>0) {
				String result="Recipe approved successfully";
				System.out.println(result);
				response.addHeader("Access-Control-Allow-Origin", "*");
				out.write("Recipe approved successfully");
		
			}
			else {
				
				String result="recipe approval Failed";

				response.addHeader("Access-Control-Allow-Origin", "*");
				out.write("recipe approval Failed");

			}
		}
		 catch(SQLException se) {
			 se.printStackTrace();
		 }
		catch(Exception e) {
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
			}catch(SQLException se) {
				se.printStackTrace();
			}
		}
	}

}
