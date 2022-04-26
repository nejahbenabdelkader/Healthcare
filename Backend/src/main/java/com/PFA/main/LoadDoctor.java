package com.PFA.main;

import com.PFA.main.Model.Firm;
import com.PFA.main.Model.Role;
import com.PFA.main.Model.User;
import com.PFA.main.Repository.FirmRepository;
import com.PFA.main.Repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.io.*;

@Slf4j
public class LoadDoctor implements CommandLineRunner {
    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    FirmRepository firmRepository;

    public static String Reformulate(String s) {
        String[] sp = s.substring(4).split(" ");
        String result = sp[0].toLowerCase();
        for (String r : sp) {
            if (r.equals(sp[0])) continue;
            result += r.toUpperCase().charAt(0) + r.substring(1);
        }
        return result;
    }

    public void run(String... args) throws IOException {
        log.info("EXECUTING : command line runner");
        File resource = new ClassPathResource("/cleanDoctors.csv").getFile();
        try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(new FileInputStream(resource), "UTF-8"));
             CSVParser csvParser = new CSVParser(fileReader,
                     CSVFormat.DEFAULT
                             .withFirstRecordAsHeader());) {

            Iterable<CSVRecord> csvRecords = csvParser.getRecords();
            for (CSVRecord csvRecord : csvRecords) {


                Firm firm = new Firm(csvRecord.get(3), "", csvRecord.get(4), csvRecord.get(5), csvRecord.get(6));
                String description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book";
                User user = new User("doctor", 'm', Reformulate(csvRecord.get(1)) + "@gmail.com", Role.DOCTOR, Reformulate(csvRecord.get(1)), csvRecord.get(2), description, null, firm);

                user.setPassword(passwordEncoder.encode(user.getPassword()));
                log.info(firm.toString());
                log.info(user.toString());
                firmRepository.save(firm);
                userRepository.save(user);
            }
            log.info("Added doctors and their firms to ");
        } catch (IOException e) {
            throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
        }
    }
}