package com.PFA.main.Model;


import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
public class Pharmacy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String town;
    private String firmName;
    private String address;
    private String cordinate;
    private String phoneNumber;

    @ManyToMany
    private Set<MedicationQuantity> medicationQuantitySet;

    @Transient
    public double DistanceFromUser(int cordinateX, int cordinateY) {
        int cordinateXUser = Integer.parseInt(cordinate.split(",")[0]);
        int cordinateYUser = Integer.parseInt(cordinate.split(",")[1]);
        return Math.pow(cordinateXUser - cordinateX, 2) + Math.pow(cordinateYUser - cordinateY, 2);
    }
}
