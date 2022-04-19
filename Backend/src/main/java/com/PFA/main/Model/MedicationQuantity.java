package com.PFA.main.Model;

import org.hibernate.annotations.Fetch;

import javax.persistence.*;

@Entity
public class MedicationQuantity {

    @EmbeddedId
    MedicationQuantityKey id;

    @ManyToOne
    @MapsId("medicationId")
    Pharmacy pharmacy;

    @ManyToOne
    @MapsId("pharmacyId")
    Medication medication;

    int quantity;
}
