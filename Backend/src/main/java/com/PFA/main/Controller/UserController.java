package com.PFA.main.Controller;

import com.PFA.main.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.PFA.main.Service.UserService;


@RestController
@RequestMapping("/user")
@CrossOrigin(allowCredentials = "true", origins = "http://localhost:3000")

public class UserController {
	
	
	@Autowired
	private UserService userService;

	@GetMapping("/{id}")
	public ResponseEntity<?> getUserWithId(@PathVariable String id) {
		return new ResponseEntity<>(userService.getUserWithId(Long.valueOf(id)).get(),HttpStatus.OK);
	}

	@GetMapping("/all")
	public ResponseEntity<?> getAllUsers() {
		try {
			return new ResponseEntity<>(userService.getUsers(),HttpStatus.OK);
		}
		catch (Exception e) {
			return new ResponseEntity<>(e.toString(),HttpStatus.BAD_REQUEST);
		}

	}

	@PostMapping("/add")
	public void addUser(@RequestBody  User user) {
		userService.addUser(user);
	}

}
