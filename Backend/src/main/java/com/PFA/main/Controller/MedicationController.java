package com.PFA.main.Controller;


import com.PFA.main.Model.Medication;
import com.PFA.main.Repository.MedicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/medication")
public class MedicationController {
    @Autowired
    MedicationRepository medicationRepository;

    @PostMapping("/add")
    public ResponseEntity<?>addMedication(@RequestBody Medication medication) {
        try {
           medicationRepository.save(medication);
           return new ResponseEntity<>("Added succesfully", HttpStatus.ACCEPTED);
        }catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @GetMapping("/retrieve")
    public ResponseEntity<List<Medication>>retreiveAllMedication() {
        try {
            List<Medication> m=medicationRepository.findAll();
            return new ResponseEntity<>(m, HttpStatus.ACCEPTED);
        }catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    @GetMapping("/retreive/{medication_id}")
    public ResponseEntity<?>getMedicationById(@PathVariable Long medication_id) {
        try {
            Medication medication=medicationRepository.findById(medication_id).get();
            return new ResponseEntity<>(medication, HttpStatus.ACCEPTED);
        }catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
