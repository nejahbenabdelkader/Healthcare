package com.PFA.main.Service;

import com.PFA.main.Model.*;
import com.PFA.main.Repository.AppoitmentRepository;
import org.apache.tomcat.jni.Local;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.datetime.DateFormatter;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
@Service
public class AppoitmentService {

    @Autowired
    AppoitmentRepository appoitmentRepository;

    public List<Appoitment> getAppoitmentWithId(Long patientId) {
       return appoitmentRepository.findAll().stream().filter(appoitment -> {
           return appoitment.getPatient().getId().equals(patientId);
       }).collect(Collectors.toList());
    }

    public List<Appoitment> getAppoitmentWithDoctorId(Long doctorId) {
        return appoitmentRepository.findAll().stream().filter(appoitment -> appoitment.getDoctor().getId().equals(doctorId)).collect(Collectors.toList());
    }

    public List<Date> getAppoitmentWithDate(LocalDate date) {
        return appoitmentRepository.findAll().stream().filter(appoitment -> {
            if(date.getDayOfYear()==appoitment.getAppoitmentDate().toInstant().atZone(ZoneId.of("UTC+01:00")).toLocalDate().getDayOfYear()) return true;
            else return false;
        }).map(Appoitment::getAppoitmentDate).collect(Collectors.toList());
    }

    public void addAppoitment(Appoitment appoitment) {
        appoitmentRepository.save(appoitment);
    }

    public void activateAppoitment(Appoitment modifiedAppoitment) {
        List<Appoitment> appoitments=appoitmentRepository.findAll().stream().filter(appoitment -> appoitment.getDoctor().getId().equals(modifiedAppoitment.getDoctor().getId())).collect(Collectors.toList());
        appoitments=appoitments.stream().filter(appoitment -> {
            SimpleDateFormat DateFor = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.s");
            String stringDate= DateFor.format(modifiedAppoitment.getAppoitmentDate());
            System.out.println(appoitment.getAppoitmentDate());
            System.out.println(appoitment.getAppoitmentDate().toString().equals(stringDate));
            return appoitment.getAppoitmentDate().toString().equals(stringDate);
        }).collect(Collectors.toList());
        Appoitment appoitment=appoitments.get(0);
        appoitment.setAppoitmentStatus(AppoitmentStatus.CONFIRMED);
        System.out.println(appoitment);
        appoitmentRepository.save(appoitment);
    }
}
