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
import com.demo.bean.Addrecipe;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/AddRecipeServlet")
public class AddRecipeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public AddRecipeServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/json");
		PrintWriter out=response.getWriter();
		ObjectMapper om=new ObjectMapper();
		Addrecipe recipe=om.readValue(request.getInputStream(), Addrecipe.class);
		System.out.println(recipe);
		String recipeName=recipe.getRecipeName();
		String chef=recipe.getChef();
		String ingredients=recipe.getIngredients();
		String procedure=recipe.getProcedure();
		String email=recipe.getEmail();
		String status="pending";
		
		LocalDate localdate=LocalDate.now();
		String localDate=localdate.toString();
		
		PreparedStatement ps=null;
		int i=0;
		Connection con=DaoConnection.getConnect();
		try {
			ps=con.prepareStatement("insert into recipe(recipeName,chef,ingredients,recipeProcedure,email,status,recipeAddedDate) values(?,?,?,?,?,?,?)");
			ps.setString(1, recipeName);
			ps.setString(2, chef);
			ps.setString(3, ingredients);
			ps.setString(4, procedure);
			ps.setString(5, email);
			ps.setString(6,status);
			ps.setString(7, localDate);
		     i=ps.executeUpdate();
			if(i>0) {
				out.write("Recipe added successfully");
				System.out.println("Recipe added successfully");
				response.addHeader("Access-Controll-Allow-Origin", "*");
			}
			else {
				out.write("Recipe not added");
				System.out.println("Recipe not added successfully");
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
			}catch(SQLException se) {
				se.printStackTrace();
			}
		}
		
	}

}
