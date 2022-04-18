package com.PFA.main.Model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.beans.ConstructorProperties;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Firm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String town;
    private String firmName;
    private String address;
    private String cordinate;
    private String phoneNumber;

    @ConstructorProperties({"town", "firmName", "address", "cordinate", "phoneNumber"})
    public Firm(String town, String firmName, String address, String cordinate, String phoneNumber) {
        this.town = town;
        this.firmName = firmName;
        this.address = address;
        this.cordinate = cordinate;
        this.phoneNumber = phoneNumber;
    }


    @Transient
    public double DistanceFromUser(Float cordinateX, Float cordinateY) {
        Float cordinateXUser = Float.parseFloat(cordinate.split(",")[0]);
        Float cordinateYUser = Float.parseFloat(cordinate.split(",")[1]);
        return Math.pow(cordinateXUser - cordinateX, 2) + Math.pow(cordinateYUser - cordinateY, 2);
    }
}
