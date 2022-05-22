package com.PFA.main.Service;

import com.PFA.main.Model.Firm;
import com.PFA.main.Model.Pharmacy;
import com.PFA.main.Model.Role;
import com.PFA.main.Model.User;
import com.PFA.main.Repository.FirmRepository;
import com.PFA.main.Repository.PharmacyRepository;
import com.PFA.main.Repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.*;
import java.util.stream.Collectors;

@Service
@Slf4j
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private FirmRepository firmRepository;
    @Autowired
    private PharmacyRepository pharmacyRepository;
    @Autowired
    PasswordEncoder passwordEncoder;
    public User loadProfilePicture(User user ) throws IOException {
        return user;
    }
    public User getUserWithId(Long id) throws IOException {
        User user =userRepository.findById(id).get();
        return loadProfilePicture(user);

    }

    public Long getNumbersOfUsers(Role userType) {
        return userRepository.findAll().stream().filter(user -> user.getRole().equals(userType)).count();
    }

    public void userActivate(Long[] usersId) {
        for (Long userId : usersId) {
            User user=userRepository.findById(userId).get();
            user.setActivate(Boolean.TRUE);
            userRepository.save(user);
        }

    }
    public List<User> getInactivatedusers(){
        return userRepository.findByActivate(Boolean.FALSE);
    }
    public void updateUser(User user) {
        userRepository.save(user);
    }

    public void addUser(User user) throws IOException {
        if (user.getRole() == Role.DOCTOR) {
            firmRepository.save(user.getFirm());
            user.setActivate(Boolean.FALSE);
        } else if (user.getRole() == Role.PHARACIEN) {
            pharmacyRepository.save(user.getPharmacy());
            user.setActivate(Boolean.FALSE);
        }
        else user.setActivate(Boolean.TRUE);
        user.setDateInscrit(new Date());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public List<User> FindByRole(String role) {
        return userRepository.findAll().stream().filter(user -> user.getRole().equals(role)).collect(Collectors.toList());
    }

    public List<User> FindNearbyDoctors(String nameDoctor, String typeDoctor, String town, String cordinate) {
        Float CordinateX = Float.parseFloat(cordinate.split(",")[0]);
        Float CordinateY = Float.parseFloat(cordinate.split(",")[1]);
        List<User> DoctorsList = userRepository.findByRole(Role.DOCTOR);
        log.info("Number Of Users : "+ DoctorsList.toArray().length);
        if (town.trim().length()!=0) {
            DoctorsList = DoctorsList.stream().filter(user -> user.getFirm().getTown().matches(".*"+town+".*")).collect(Collectors.toList());
            log.info("Number Of Users After Town: " + DoctorsList.toArray().length);
        }
        if (typeDoctor.trim().length()!=0) {
            DoctorsList = DoctorsList.stream().filter(user -> user.getSpeciality().equals(typeDoctor)).collect(Collectors.toList());
            log.info("Number Of Users After Type: " + DoctorsList.toArray().length);

        }
        if (nameDoctor.trim().length() != 0) {
            DoctorsList = DoctorsList.stream().filter(user -> user.getFullName().toLowerCase().matches(".*" + nameDoctor + ".*")).collect(Collectors.toList());
            log.info("Number Of Users After Name: " + DoctorsList.toArray().length);

        }
        log.info("Number Of Users : " + DoctorsList.toArray().length);

        return DoctorsList.stream().sorted(Comparator.comparingDouble(user -> user.getFirm().DistanceFromUser(CordinateX, CordinateY))).limit(5).collect(Collectors.toList());


    }

    public List<Pharmacy> FindNearbyPharmacy(Pharmacy ph) {
        Float CordinateX = Float.parseFloat(ph.getCordinate().split(",")[0]);
        Float CordinateY = Float.parseFloat(ph.getCordinate().split(",")[1]);
        List<Pharmacy> PharmacyList = pharmacyRepository.findAll();
        log.info("Number Of Pharmacy : "+ PharmacyList.toArray().length);
        if (ph.getTown().trim().length()!=0) {
            PharmacyList = PharmacyList.stream().filter(pharmacy -> pharmacy.getTown().matches(".*"+ph.getTown()+".*")).collect(Collectors.toList());
            log.info("Number Of Users After Town: " + PharmacyList.toArray().length);
        }
        if (ph.getType().trim().length()!=0) {
            PharmacyList = PharmacyList.stream().filter(pharmacy -> pharmacy.getType().equals(ph.getType())).collect(Collectors.toList());
            log.info("Number Of Users After Type: " + PharmacyList.toArray().length);

        }
        if (ph.getFirmName().trim().length() != 0) {
            PharmacyList = PharmacyList.stream().filter(pharmacy -> pharmacy.getFirmName().toLowerCase().matches(".*" + ph.getFirmName() + ".*")).collect(Collectors.toList());
            log.info("Number Of Users After Name: " + PharmacyList.toArray().length);

        }
        log.info("Number Of Users : " + PharmacyList.toArray().length);

        return PharmacyList.stream().sorted(Comparator.comparingDouble(pharmacy -> pharmacy.DistanceFromUser(CordinateX, CordinateY))).limit(5).collect(Collectors.toList());


    }

    ;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("Ce Email n'existe pas!");
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(user.getRole().name()));
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), authorities);
    }

    public List<String> getTownsOfFirm(){
        return firmRepository.findAll().stream().map(Firm::getTown).distinct().collect(Collectors.toList());
    }

    public List<String> getSpecialityOfFirm(){
        return userRepository.findByRole(Role.DOCTOR).stream().map(User::getSpeciality).distinct().collect(Collectors.toList());
    }

}
