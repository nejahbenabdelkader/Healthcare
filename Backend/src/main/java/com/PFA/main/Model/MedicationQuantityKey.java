package com.PFA.main.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@AllArgsConstructor
@Embeddable
@NoArgsConstructor
@Setter
public class MedicationQuantityKey implements Serializable {
    @Column(name = "medication_id")
    private  Long medicationId;

    @Column(name = "pharmacy_id")
    private  Long pharmacyId;
}
