package com.PFA.main.Model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Pharmacy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String town;
    private String firmName;
    private String address;
    private String cordinate;
    private String type;

    @OneToMany(mappedBy = "medication",cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<MedicationQuantity> medications;

    public Pharmacy(String town, String firmName, String address, String cordinate,  String type, List<MedicationQuantity> medications) {
        this.town = town;
        this.firmName = firmName;
        this.address = address;
        this.cordinate = cordinate;
        this.type = type;
        this.medications = medications;
    }


    @Transient
    public double DistanceFromUser(float cordinateX, float cordinateY) {
        float cordinateXUser = Float.parseFloat(cordinate.split(",")[0]);
        float cordinateYUser = Float.parseFloat(cordinate.split(",")[1]);
        return Math.pow(cordinateXUser - cordinateX, 2) + Math.pow(cordinateYUser - cordinateY, 2);
    }
}
