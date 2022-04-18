package com.PFA.main.Model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Appoitment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date dateAppoitment;


    @ManyToOne
    @JoinColumn(name = "patient_id")
    private User patient;

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private User doctor;


    private String remarques;

}
