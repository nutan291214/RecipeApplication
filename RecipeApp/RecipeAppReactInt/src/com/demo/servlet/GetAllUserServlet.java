package com.demo.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.demo.bean.User;
import com.demo.controller.GetAllUser;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/GetAllUserServlet")
public class GetAllUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public GetAllUserServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out=response.getWriter();
		ObjectMapper om=new ObjectMapper();
		List<User> ulist= GetAllUser.getAllUser();
		System.out.println(ulist);
		out.write(om.writeValueAsString(ulist));
		response.addHeader("Access-Control-Allow-Origin", "*");
	}

}
