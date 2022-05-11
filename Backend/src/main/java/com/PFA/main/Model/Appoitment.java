package com.PFA.main.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Appoitment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private Date appoitmentDate ;
    @ManyToOne
    @JoinColumn(name = "patient_id")
    private User patient;

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private User doctor;


    private String remarques;


    public Appoitment( User patient, User doctor,Date appoitmentDate, String remarques) {
        this.patient = patient;
        this.doctor = doctor;
        this.remarques = remarques;
        this.appoitmentDate=appoitmentDate;
    }


}
