package com.PFA.main.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

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
    private String phoneNumber;
    private Boolean activate;
    private Date dateInscrit;

    @Transient
    private MultipartFile profilePicture;

    @OneToOne
    private Pharmacy pharmacy;

    @OneToOne
    private Firm firm;

    @ManyToMany
   private List<Session> unavailabeSessions;

    public User(String password, char gender, String email, Role role, String fullName, String speciality, String description,String phoneNumber, Pharmacy pharmacy, Firm firm,MultipartFile photo,Boolean activate , Date dateInscrit) {
        this.password = password;
        this.gender = gender;
        this.email = email;
        this.role = role;
        this.fullName = fullName;
        this.speciality = speciality;
        this.description = description;
        this.phoneNumber=phoneNumber;
        this.pharmacy = pharmacy;
        this.firm = firm;
        this.profilePicture=photo;
        this.activate=activate;
        this.dateInscrit=dateInscrit;
    }


}
