package com.PFA.main.Controller;


import com.PFA.main.Model.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/autorisation")
public class AuthenticationController {

    @PostMapping("/signIn")
    public void authenticate(@RequestBody User user) {

    }

    @PostMapping("signUp")
    public void register(@RequestBody User user) {

    }
}
