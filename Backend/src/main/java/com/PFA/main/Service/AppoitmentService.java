package com.PFA.main.Service;

import com.PFA.main.Model.Appoitment;
import com.PFA.main.Repository.AppoitmentRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class AppoitmentService {

    @Autowired
    AppoitmentRepository appoitmentRepository;

    public List<Appoitment> getAppoitmentPatient(Long patientId) {
        //determiner les derniers rendez-vous du patient
        return null;
    }

    public void addAppoitment(Appoitment appoitment) {

    }
}
