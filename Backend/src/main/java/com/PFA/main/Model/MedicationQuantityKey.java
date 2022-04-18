package com.PFA.main.Model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class MedicationQuantityKey implements Serializable {
    @Column(name = "medication_id")
    private  Long medicationId;

    @Column(name = "pharmacy_id")
    private  Long pharmacyId;
}
