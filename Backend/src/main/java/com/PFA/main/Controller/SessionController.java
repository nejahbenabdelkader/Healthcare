package com.PFA.main.Controller;


import com.PFA.main.Service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/session")
public class SessionController {

    @Autowired
    SessionService sessionService;

    @PostMapping("/add/{doctor_id}")
    public void addSessions(@PathVariable Long doctor_id , @RequestBody List<Date> sessions ) {
        sessions.forEach(System.out::println);
        sessionService.addSessions(doctor_id,sessions);
    }
}
