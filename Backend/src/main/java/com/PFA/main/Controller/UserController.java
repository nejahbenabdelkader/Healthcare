package com.PFA.main.Controller;

import com.PFA.main.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.PFA.main.Service.UserService;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
	
	
	@Autowired
	private UserService userService;

	@GetMapping("/user/{id}")
	public ResponseEntity<User> getUserWithId(@PathVariable String id) {
		return new ResponseEntity<>(userService.getUserWithId(Long.valueOf(id)).get(),HttpStatus.OK);
	}

	@GetMapping("/users")
	public ResponseEntity<?> getAllUsers() {
		try {
			return new ResponseEntity<>(userService.getUsers(),HttpStatus.OK);
		}
		catch (Exception e) {
			return new ResponseEntity<>(e.toString(),HttpStatus.BAD_REQUEST);
		}

	}

}
