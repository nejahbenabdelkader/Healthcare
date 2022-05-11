package com.PFA.main.Service;

import com.PFA.main.Model.*;
import com.PFA.main.Repository.AppoitmentRepository;
import org.apache.tomcat.jni.Local;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.datetime.DateFormatter;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
@Service
public class AppoitmentService {

    @Autowired
    AppoitmentRepository appoitmentRepository;

    public List<Appoitment> getAppoitmentWithId(String patientId) {
       return appoitmentRepository.findAll().stream().filter(appoitment -> false).collect(Collectors.toList());
    }

    public List<Date> getAppoitmentWithDate(LocalDate date) {
        return appoitmentRepository.findAll().stream().filter(appoitment -> {
            System.out.println("date From Front :"+date.toString());
            System.out.println("date From DB :"+appoitment.getAppoitmentDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate().toString());
            if(date.getDayOfYear()==appoitment.getAppoitmentDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate().getDayOfYear()) return true;
            else return false;
        }).map(Appoitment::getAppoitmentDate).collect(Collectors.toList());
    }

    public void addAppoitment(Appoitment appoitment) {
        appoitmentRepository.save(appoitment);

    }
}
