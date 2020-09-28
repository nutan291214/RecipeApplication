package com.demo.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.demo.DaoUtil.DaoConnection;
import com.demo.bean.Login;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public LoginServlet() {
        super();
        
    }

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
			ObjectMapper om = new ObjectMapper();
		
		    System.out.println("React Data= "+request.getInputStream());
		    
		    Login login=om.readValue(request.getInputStream(), Login.class);
		    System.out.println(login);
		    
		   String result="Invalid";
		   PreparedStatement ps=null;
		   Connection con=DaoConnection.getConnect();
		   try {
			   ps=con.prepareStatement("select * from user");
			    ResultSet rs=ps.executeQuery();
			    
			    while(rs.next()) {
			    	System.out.println(rs.getString(3)+" "+rs.getString(4));
			    	
			    	if(login.getEmail().equals(rs.getString(3)) && login.getPassword().equals(rs.getString(4)) && rs.getString(5).equalsIgnoreCase("active") ) {
			    		result = "user";
						System.out.println(result);
						break;

			    	}
			    	else if(login.getEmail().equals("admin@gmail.com") && login.getPassword().equals("admin123")) {
			    		result="admin";
			    		System.out.println(result);
			    		break;
			    		
			    	}
			    	else {
			    		System.out.println(result+" "+login.getEmail());
			    	}
			    }
			    System.out.println("wowowowoww its me= "+result);
				PrintWriter out=response.getWriter();
				out.write(result);

			    
		   }catch (Exception e) {
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
