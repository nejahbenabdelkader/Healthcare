package com.PFA.main.Controller;


import com.PFA.main.Model.Medication;
import com.PFA.main.Model.Pharmacy;
import com.PFA.main.Service.PharmacyService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("pharmacy")
public class PharmacyController {

    @Autowired
    PharmacyService pharmacyService;

    @GetMapping("/retreive/{pharmacy_id}")
    public ResponseEntity<Pharmacy> getPharmacyWithId(@PathVariable Long pharmacy_id) {
        Pharmacy ph=pharmacyService.getPharmacy(pharmacy_id);
        return new ResponseEntity<>(ph, HttpStatus.ACCEPTED);
    }

    @PostMapping("/addMedication")
    public ResponseEntity<?> addMedicationToPharmacy(@RequestParam Long pharmacy_id,@RequestParam Long medication_id) {
        try {
            pharmacyService.addMedicationToPharmacy(medication_id,pharmacy_id,3);
        }catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.toString(),HttpStatus.BAD_REQUEST);
        }
        return null;
    }

}
