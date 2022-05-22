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
import java.util.Date;

@Slf4j
@Component
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
            if( !userRepository.existsById(1L)) {
                for (CSVRecord csvRecord : csvRecords) {


                    Firm firm = new Firm(csvRecord.get(3), "", csvRecord.get(4),  csvRecord.get(5));
                    String description = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book";
                    User user = new User("doctor", 'm', Reformulate(csvRecord.get(1)) + "@gmail.com", Role.DOCTOR, Reformulate(csvRecord.get(1)), csvRecord.get(2), description,csvRecord.get(6), null, firm,Boolean.TRUE,new Date());

                    user.setPassword(passwordEncoder.encode(user.getPassword()));
                    log.info(firm.toString());
                    log.info(user.toString());
                    firmRepository.save(firm);
                    userRepository.save(user);
                }
                log.info("Added doctors and their firms to ");
            }
            User admin = new User("arige1999", 'f', "arige.sakka1999@gmail.com" , Role.ADMIN, "arigeSakka", "", "","", null, null,Boolean.TRUE,new Date());
            admin.setPassword(passwordEncoder.encode(admin.getPassword()));
            userRepository.save(admin);

        } catch (IOException e) {
            throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
        }
    }
}