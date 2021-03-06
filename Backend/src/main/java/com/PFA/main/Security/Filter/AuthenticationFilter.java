package com.PFA.main.Security.Filter;


import com.PFA.main.Repository.UserRepository;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
@Slf4j
public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    @Autowired
    private  AuthenticationManager authenticationManager;
    @Autowired
    UserRepository userRepository;

    public AuthenticationFilter(AuthenticationManager authenticationManager){
        this.authenticationManager=authenticationManager;
    }
    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        request.getHeaderNames().asIterator().forEachRemaining(s -> System.out.println(s+"    "+request.getHeader(s)));
        log.info(request.getContentType());
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        Map<String, String[]> modelMap =  request.getParameterMap();
        log.info(String.valueOf(modelMap.keySet().size()));
        log.info(email+"       "+password);
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email,password);
        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication) throws IOException {
        User user = (User) authentication.getPrincipal();
        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
        String access_token = JWT.create().withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis()+120*60*1000))
                .withIssuer(request.getRequestURL().toString())
                .withClaim("roles",user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                .sign(algorithm);
        String refresh_token = JWT.create().withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis()+ 30L *24*60*60*1000))
                .withIssuer(request.getRequestURL().toString())
                .sign(algorithm);
        Map<String,String> tokens = new HashMap<>();
        tokens.put("access_token",access_token);
        tokens.put("refresh_token",refresh_token);
        tokens.put("user",((User) authentication.getPrincipal()).getUsername());
        tokens.put("role",authentication.getAuthorities().toString());
         response.setHeader("Access-Control-Allow-Origin","*");
        response.setContentType(APPLICATION_JSON_VALUE);
        new ObjectMapper().writeValue(response.getOutputStream(),tokens);
    }
}