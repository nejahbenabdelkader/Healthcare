package com.PFA.main.Controller;


import com.PFA.main.Model.Appoitment;
import com.PFA.main.Service.AppoitmentService;
import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.DateFormatter;
import java.text.DateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@RestController
@Slf4j
@RequestMapping("/appoitment")
public class AppoitmentController {

    @Autowired
    AppoitmentService appoitmentService;

    @GetMapping("/get/patient")
    public ResponseEntity<List<Appoitment>> getAppoitmentOfPatientId(@RequestParam Long patientId) {

        return new ResponseEntity<List<Appoitment>>(appoitmentService.getAppoitmentWithId(patientId), HttpStatus.ACCEPTED);
    }

    @GetMapping("/get/doctor")
    public ResponseEntity<List<Appoitment>> getAppoitmentOfDoctorId(@RequestParam Long doctorId) {

        return new ResponseEntity<List<Appoitment>>(appoitmentService.getAppoitmentWithDoctorId(doctorId), HttpStatus.ACCEPTED);
    }

    @GetMapping("/get/date")
    public ResponseEntity<List<Date>> getAppoitmentsWithDate(@RequestParam String dateAppoitment) {
        System.out.println(dateAppoitment);
        DateTimeFormatter format = DateTimeFormatter.ofPattern("d-MMM-yyyy hh:mm:ss");
        System.out.println(LocalDate.parse(dateAppoitment,format));
        return new ResponseEntity<List<Date>>(appoitmentService.getAppoitmentWithDate(LocalDate.parse(dateAppoitment,format)), HttpStatus.ACCEPTED);
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public  void addAppoitment(@RequestBody Appoitment appoitment) {
        log.info(appoitment.toString());
        appoitmentService.addAppoitment(appoitment);
    }

    @PutMapping("/activate")
    public void activateAppoitment(@RequestBody Appoitment appoitment) {
        appoitmentService.activateAppoitment(appoitment);
    }

}
