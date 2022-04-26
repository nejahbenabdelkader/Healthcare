package com.PFA.main.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.annotations.Fetch;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MedicationQuantity {

    @EmbeddedId
    MedicationQuantityKey id;

    @ManyToOne
    @JsonIgnoreProperties("medications")
    @MapsId("medicationId")
    Pharmacy pharmacy;

    @ManyToOne
    @JsonIgnoreProperties("pharmacies")
    @MapsId("pharmacyId")
    Medication medication;

    private  int quantity;
}
