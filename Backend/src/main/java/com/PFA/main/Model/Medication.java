package com.PFA.main.Model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "medication", uniqueConstraints = {@UniqueConstraint(columnNames = "reference")})
public class Medication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String reference;

    private String description;

    private String donnees;

    @OneToMany(mappedBy = "pharmacy" ,fetch = FetchType.LAZY)
    private List<MedicationQuantity> pharmacies;
}
