package com.PFA.main.Model;

import javax.persistence.*;

@Entity
public class MedicationQuantity {

    @EmbeddedId
    MedicationQuantityKey id;

    @ManyToOne
    @MapsId("medicationId")
    @JoinColumn(name = "medication_id")
    Pharmacy pharmacy;

    @ManyToOne
    @MapsId("pharmacyId")
    @JoinColumn(name = "pharmacy_id")
    Medication medication;

    int quantity;
}
