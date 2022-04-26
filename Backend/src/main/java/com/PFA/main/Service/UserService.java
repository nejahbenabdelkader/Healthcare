package com.PFA.main.Service;

import com.PFA.main.Model.Role;
import com.PFA.main.Model.User;
import com.PFA.main.Repository.FirmRepository;
import com.PFA.main.Repository.PharmacyRepository;
import com.PFA.main.Repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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

    public Optional<User> getUserWithId(Long id) {
        return userRepository.findById(id);
    }

    public void updateUser(User user) {
        userRepository.save(user);
    }

    public void addUser(User user) {
        if (user.getRole() == Role.DOCTOR) {
            firmRepository.save(user.getFirm());
        } else if (user.getRole() == Role.PHARACIEN) {
            pharmacyRepository.save(user.getPharmacy());
        }
        log.info(user.toString());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
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
        List<User> DoctorsList = userRepository.findAll();
        if (town != " ") {
            DoctorsList = DoctorsList.stream().filter(user -> user.getFirm().getTown().equals(town)).collect(Collectors.toList());
        }
        if (typeDoctor != " ") {
            DoctorsList = DoctorsList.stream().filter(user -> user.getSpeciality().equals(typeDoctor)).collect(Collectors.toList());
        }
        if (nameDoctor != "") {
            DoctorsList = DoctorsList.stream().filter(user -> user.getFullName().toLowerCase().matches(".*" + nameDoctor + ".*")).collect(Collectors.toList());
        }
        log.info("Number Of Users : " + DoctorsList.toArray().length);

        return DoctorsList.stream().sorted(Comparator.comparingDouble(user -> user.getFirm().DistanceFromUser(CordinateX, CordinateY))).limit(5).collect(Collectors.toList());


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

}
