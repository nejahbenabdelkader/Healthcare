package com.PFA.main.Controller;

import com.PFA.main.Model.Firm;
import com.PFA.main.Model.User;
import com.PFA.main.Service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("search")
@CrossOrigin(allowCredentials = "true", origins = "http://localhost:3000")
public class SearchController {

     @Autowired
     private UserService userService;

    @GetMapping(value = "/search/doctor/{nameDoctor}/{typeDoctor}",consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> GetNearbyDoctors(@PathVariable String nameDoctor , @PathVariable String typeDoctor , @RequestBody Firm f) {
        log.info(f.toString());
        try {
            List<User> users=userService.FindNearbyDoctors(nameDoctor,typeDoctor,f.getTown(),f.getCordinate());
            return new ResponseEntity<>(users, HttpStatus.OK);
        }
        catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.toString(), HttpStatus.BAD_REQUEST);
        }

    }

}

