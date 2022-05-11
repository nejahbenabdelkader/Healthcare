package com.PFA.main.Controller;

import com.PFA.main.Model.Role;
import com.PFA.main.Model.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.PFA.main.Service.UserService;

import java.io.IOException;
import java.util.List;


@RestController
@RequestMapping("/user")
@CrossOrigin(allowCredentials = "true", origins = "http://localhost:3000")
@Slf4j
public class UserController {
	
	
	@Autowired
	private UserService userService;

	@GetMapping("/id/{id}")
	public ResponseEntity<?> getUserWithId(@PathVariable String id) {
		try {
			return new ResponseEntity<>(userService.getUserWithId(Long.valueOf(id)),HttpStatus.OK);
		} catch (IOException e) {
			e.printStackTrace();
			return new ResponseEntity<>(e.getMessage(),HttpStatus.OK);
		}
	}

    @GetMapping("/inactivated")
	public ResponseEntity<List<User>> getIncativatedUsers(){
		return  ResponseEntity.status(HttpStatus.ACCEPTED).body(userService.getInactivatedusers());
	}

	@PutMapping("/activation")
	public ResponseEntity<?> activationUser(@RequestParam Long[] user_id) {
		try {
			userService.userActivate(user_id);
			return  ResponseEntity.status(HttpStatus.OK).body("User Activated");
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(e.getMessage(),HttpStatus.OK);
		}
	}

    @GetMapping("/count")
	public Long getNumberOfUsers(@RequestParam Role typeUser) {
		return userService.getNumbersOfUsers(typeUser);
	}

	@GetMapping("/email/{id}")
	public ResponseEntity<?> getUserWithEmail(@PathVariable String id) {
		return new ResponseEntity<>(userService.getUserByEmail(id),HttpStatus.OK);
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



	@PostMapping(value = "/add" , consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public void addUser(@ModelAttribute  User user) throws IOException {
		log.info(user.toString());
		System.out.println(user.toString());
		userService.addUser(user);
	}
	@GetMapping("/firm/town")
	public ResponseEntity<List<String>> getTowns(){
		return new ResponseEntity<List<String>>(userService.getTownsOfFirm(),HttpStatus.ACCEPTED);
	}

	@GetMapping("/speciality/all")
	public ResponseEntity<List<String>> getSpeciality(){
		return new ResponseEntity<List<String>>(userService.getSpecialityOfFirm(),HttpStatus.ACCEPTED);
	}
}
