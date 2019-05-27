package com.bsu.controllers;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.simple.JSONObject;

public class CheckSessionServlet extends HttpServlet {
    public CheckSessionServlet() {
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        JSONObject session = new JSONObject();
        session.put("session", true);
        response.getOutputStream().println(session.toString());
    }
}