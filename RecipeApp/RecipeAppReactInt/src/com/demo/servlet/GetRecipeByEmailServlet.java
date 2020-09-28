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
import com.demo.controller.GetRecipeByEmailController;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/GetRecipeByEmailControllerServlet")
public class GetRecipeByEmailServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public GetRecipeByEmailServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String email=request.getParameter("email");
		//int recipeid=Integer.parseInt(request.getParameter("recipeId"));
		System.out.println(email);
		//System.out.println(recipeid);
		ObjectMapper om=new ObjectMapper();
		List<Addrecipe> recipe=GetRecipeByEmailController.getRecipeByEmail(email);
		//List<Addrecipe> rid=GetRecipeByEmailController.getRecipeById(recipeid);
		PrintWriter out=response.getWriter();
		
		if(recipe!=null) {
			out.write(om.writeValueAsString(recipe));
			System.out.println("woww response sent to react");
			
		}
//		if(rid!=null) {
//			out.write(om.writeValueAsString(rid));
//			System.out.println("recipe by id response send to react");
//		}
		
	}

}
