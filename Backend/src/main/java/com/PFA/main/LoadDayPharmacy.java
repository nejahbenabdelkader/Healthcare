package com.PFA.main;


import com.PFA.main.Model.Pharmacy;
import com.PFA.main.Repository.PharmacyRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.*;

@Component
@Slf4j
public class LoadDayPharmacy implements CommandLineRunner {

    @Autowired
    PharmacyRepository pharmacyRepository;

    @Override
    public void run(String... args) throws Exception {
        log.info("EXECUTING : command line runner");
        File resource = new ClassPathResource("/dayPharmacy.csv").getFile();
        try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(new FileInputStream(resource), "UTF-8"));
             CSVParser csvParser = new CSVParser(fileReader,
                     CSVFormat.DEFAULT
                             .withFirstRecordAsHeader());) {

            Iterable<CSVRecord> csvRecords = csvParser.getRecords();
            for (CSVRecord csvRecord : csvRecords) {


                Pharmacy pharmacy  = new Pharmacy(csvRecord.get(1),csvRecord.get(0),csvRecord.get(3),csvRecord.get(2),csvRecord.get(4),csvRecord.get(5),null);
                log.info(pharmacy.toString());
                pharmacyRepository.save(pharmacy);
            }
            log.info("Added pharmacy ");

        } catch (IOException e) {
            throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
        }
    }
}
