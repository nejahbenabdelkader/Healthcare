package com.PFA.main.Service;

import com.PFA.main.Model.Appoitment;
import com.PFA.main.Repository.AppoitmentRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.stream.Collectors;

public class AppoitmentService {

    @Autowired
    AppoitmentRepository appoitmentRepository;

    public List<Appoitment> getAppoitmentWithId(Long patientId) {
       return appoitmentRepository.findAll().stream().filter(appoitment -> appoitment.getPatient().getId().equals(patientId)).collect(Collectors.toList());
    }

    public void addAppoitment(Appoitment appoitment) {
       appoitmentRepository.save(appoitment);
    }
}
