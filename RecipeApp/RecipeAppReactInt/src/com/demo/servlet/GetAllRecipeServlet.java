package com.demo.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.demo.bean.Addrecipe;
import com.demo.controller.GetRecipecontroller;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/GetAllRecipeServlet")
public class GetAllRecipeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public GetAllRecipeServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String email=request.getParameter("email");
		System.out.println(email);
		ObjectMapper om=new ObjectMapper();
		
		List<Addrecipe> ral=GetRecipecontroller.getRecipe();
		System.out.println("List ...."+ral);
		PrintWriter out=response.getWriter();
		if(ral!=null) {
			out.write(om.writeValueAsString(ral));
			System.out.println("Wow list printed...............");
		}
		
	}

}
