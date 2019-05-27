package com.bsu.controllers;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CheckAppServlet extends HttpServlet {
    public CheckAppServlet() {
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String path = "/WEB-INF/index.jsp";
        this.getServletContext().getRequestDispatcher(path).forward(request, response);
    }
}
