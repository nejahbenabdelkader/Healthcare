package com.PFA.main.Service;


import com.PFA.main.Model.Role;
import com.PFA.main.Model.User;
import com.PFA.main.Repository.AppoitmentRepository;
import com.PFA.main.Repository.PharmacyRepository;
import com.PFA.main.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.time.ZoneId;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class AdminService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    AppoitmentRepository appoitmentRepository;
    @Autowired
    PharmacyRepository pharmacyRepository;

    public Map<String,Long> getNumbersOfUsers() {
        Map<String,Long> dataUsers=new HashMap<String, Long>();
        Long numberOfUsers=userRepository.count();
        Long numberOfDoctors= (long) userRepository.findByRole(Role.DOCTOR).size();
        Long numberOfPharmacy=pharmacyRepository.count();
        Long numberOfPatient= (long) userRepository.findByRole(Role.PATIENT).size();
        Month currentMonth=LocalDate.now().getMonth();
        Long usersLastMonth=userRepository.findAll().stream().filter(user -> {
            return LocalDate.ofInstant(user.getDateInscrit().toInstant(), ZoneId.systemDefault()).getMonth().equals(currentMonth);
        }).count();

        dataUsers.put("numberOfAllUsers",numberOfUsers);
        dataUsers.put("numberOfDoctors",numberOfDoctors);
        dataUsers.put("numberOfPharmacy",numberOfPharmacy);
        dataUsers.put("numberOfUsersLastMonth",usersLastMonth);
        dataUsers.put("numberOfPatient",numberOfPatient);

        return  dataUsers;

    }

    public List<User> getAllDoctors(){
        return userRepository.findByRole(Role.DOCTOR).stream().filter(User::getActivate).collect(Collectors.toList());
    }

    public List<User> getAllPatients(){
        return userRepository.findByRole(Role.PATIENT).stream().filter(User::getActivate).collect(Collectors.toList());
    }

    public List<User> getUnactivatedDoctors(){
        return userRepository.findByRole(Role.DOCTOR).stream().filter(user -> ! user.getActivate()).collect(Collectors.toList());
    }


    public void activateUsers(List<Long> usersId) {
        usersId.forEach(userId -> {
            User user=userRepository.findById(userId).get();
            user.setActivate(Boolean.TRUE);
            userRepository.save(user);
        });
    }

    public List<User> getAllPharmacy(){
        return userRepository.findByRole(Role.PHARACIEN);
    }
}
