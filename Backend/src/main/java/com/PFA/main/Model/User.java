package com.PFA.main.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class User {

    @Id
    @Column(name = "id")

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String password;
    private char gender;
    private String email;
    private Role role;
    private String fullName;
    private String speciality;
    private String description;
    @Transient
    private MultipartFile photo;

    @OneToOne
    private Pharmacy pharmacy;

    @OneToOne
    private Firm firm;

    public User(String password, char gender, String email, Role role, String fullName, String speciality, String description, Pharmacy pharmacy, Firm firm) {
        this.password = password;
        this.gender = gender;
        this.email = email;
        this.role = role;
        this.fullName = fullName;
        this.speciality = speciality;
        this.description = description;
        this.pharmacy = pharmacy;
        this.firm = firm;
    }


}
