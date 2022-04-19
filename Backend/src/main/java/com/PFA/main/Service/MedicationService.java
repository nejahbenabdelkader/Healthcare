package com.PFA.main.Service;


import com.PFA.main.Model.Medication;
import com.PFA.main.Repository.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class MedicationService {

    @Autowired
    MedicationRepository medicationRepository;



    public Set<Medication> getMedicationFromPharmacy(Long id) {

        return null;
    }

}
