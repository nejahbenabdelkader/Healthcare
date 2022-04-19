package com.PFA.main.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Locale;
import java.util.Optional;
import java.util.stream.Collectors;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PFA.main.Model.User;
import com.PFA.main.Repository.UserRepository;

import javax.print.Doc;

@Service
@Slf4j
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	public Optional<User> getUserWithId(Long id){
		return  userRepository.findById(id);
	}

	public List<User> getUsers() {
		return userRepository.findAll();
	}
	public List<User> FindByRole(String role) {
		return userRepository.findAll().stream().filter(user->user.getRole().equals(role)).collect(Collectors.toList());
	}

	public List<User> FindNearbyDoctors(String nameDoctor,String typeDoctor,String town ,String cordinate) {
		Float CordinateX=Float.parseFloat(cordinate.split(",")[0]);
		Float CordinateY=Float.parseFloat(cordinate.split(",")[1]);
		List<User> DoctorsList=userRepository.findAll();
		if (town!= " ") {
			DoctorsList=DoctorsList.stream().filter(user -> user.getFirm().getTown().equals(town)).collect(Collectors.toList());
		}
		if (typeDoctor != " ") {
			DoctorsList=DoctorsList.stream().filter(user -> user.getSpeciality().equals(typeDoctor)).collect(Collectors.toList());
		}
		if (nameDoctor!="") {
			DoctorsList=DoctorsList.stream().filter(user -> user.getFullName().toLowerCase().matches(".*"+nameDoctor+".*")).collect(Collectors.toList());
		}
		log.info("Number Of Users : "+DoctorsList.toArray().length);

	 	return DoctorsList.stream().sorted(Comparator.comparingDouble(user->user.getFirm().DistanceFromUser(CordinateX,CordinateY))).limit(5).collect(Collectors.toList());



	};

}