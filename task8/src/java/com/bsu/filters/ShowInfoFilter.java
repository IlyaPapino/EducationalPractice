package com.bsu.filters;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

public class ShowInfoFilter implements Filter {
    private FilterConfig filterConfig;

    public ShowInfoFilter() {
    }

    public void init(FilterConfig filterConfig) throws ServletException {
        this.filterConfig = filterConfig;
    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        if (this.filterConfig.getInitParameter("active").equalsIgnoreCase("true")) {
            long start = System.currentTimeMillis();
            filterChain.doFilter(request, response);
            long end = System.currentTimeMillis();
            long time = end - start;
            HttpServletRequest httpRequest = (HttpServletRequest)request;
            String method = httpRequest.getMethod();
            String url = httpRequest.getRequestURL().toString();
            response.getOutputStream().println(String.format("%s %s - %dms", method, url, time));
        }

    }

    public void destroy() {
        this.filterConfig = null;
    }
}