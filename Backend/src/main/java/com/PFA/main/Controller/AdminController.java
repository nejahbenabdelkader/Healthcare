package com.PFA.main.Controller;


import com.PFA.main.Model.User;
import com.PFA.main.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    AdminService adminService;

    @GetMapping("/numbers")
    public Map<String,Long> getNumbersOfUsers() {
        return adminService.getNumbersOfUsers();
    }

    @GetMapping("/doctors")
    public List<User> getAllDoctors(){
        return adminService.getAllDoctors();
    }

    @GetMapping("/patients")
    public List<User> getAllPatients(){
        return adminService.getAllPatients();
    }

    @GetMapping("/unactivated")
    public List<User> getUnactivatedUser(){
        return adminService.getUnactivatedDoctors();
    }

    @PostMapping("/activate")
    public void activateUsers(@RequestBody List<Long> usersId) {
        adminService.activateUsers(usersId);
    }

    @GetMapping("/pharmacy")
    public List<User> getAllPharmacy(){
        return adminService.getAllPharmacy();
    }
}
