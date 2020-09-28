package com.demo.controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.demo.DaoUtil.DaoConnection;
import com.demo.bean.Addrecipe;

public class GetRecipeByEmailController {
	
	
	//Get recipe by email
	public static List<Addrecipe> getRecipeByEmail(String email){
		ArrayList<Addrecipe> ral=new ArrayList<>();
		PreparedStatement ps=null;
		Connection con=DaoConnection.getConnect();
		try {
			
		 ps=con.prepareStatement("select * from recipe where email=? ");
			ps.setString(1,email);
			ResultSet rs=ps.executeQuery();
			
			if(rs!=null) {
				while(rs.next()) {
					Addrecipe addrecipe=new Addrecipe();
					addrecipe.setRecipeId(rs.getInt(1));
					addrecipe.setRecipeName(rs.getString(2));
					addrecipe.setChef(rs.getString(3));
					addrecipe.setIngredients(rs.getString(4));
					addrecipe.setProcedure(rs.getString(5));
					//addrecipe.setEmail(rs.getString(6));
					addrecipe.setStatus(rs.getString(7));
					//addrecipe.setDate(rs.getString(8));
					
					ral.add(addrecipe);
					System.out.println(ral);
				}
				return ral;
			}
			else {
			   return null;	
			}
		}
		catch(SQLException se) {
			se.printStackTrace();
			return null;
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

	
	//get recipe by recipeId
	
	public static List<Addrecipe> getRecipeById(int recipeId) {
		ArrayList<Addrecipe> ral=new ArrayList<>();
		PreparedStatement ps=null;
		Connection con=DaoConnection.getConnect();
		try {
			
		 ps=con.prepareStatement("select * from recipe where recipeId=? ");
			ps.setInt(1, recipeId);
			ResultSet rs=ps.executeQuery();
			
			if(rs!=null) {
				while(rs.next()) {
					Addrecipe addrecipe=new Addrecipe();
					addrecipe.setRecipeId(rs.getInt(1));
					addrecipe.setRecipeName(rs.getString(2));
					addrecipe.setChef(rs.getString(3));
					addrecipe.setIngredients(rs.getString(4));
					addrecipe.setProcedure(rs.getString(5));
					//addrecipe.setEmail(rs.getString(6));
					addrecipe.setStatus(rs.getString(7));
					//addrecipe.setDate(rs.getString(8));
					
					ral.add(addrecipe);
					System.out.println(ral);
				}
				return ral;
			}
			else {
			   return null;	
			}
		}
		catch(SQLException se) {
			se.printStackTrace();
			return null;
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
