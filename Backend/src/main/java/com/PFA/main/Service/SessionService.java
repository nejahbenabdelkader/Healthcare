package com.PFA.main.Service;

import com.PFA.main.Model.Session;
import com.PFA.main.Model.User;
import com.PFA.main.Repository.SessionRepository;
import com.PFA.main.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class SessionService {


    @Autowired
    UserRepository userRepository;
    @Autowired
    SessionRepository sessionRepository;

    public void addSessions(Long  doctorId, List<Date> sessions) {
        User doctor=userRepository.findById(doctorId).get();
        List<Session> unAvailableSessions=new ArrayList<>();
        sessions.forEach(date -> {
            Session session = new Session();
            session.setUnavailableDate(date);
            System.out.println(session);
            System.out.println(sessionRepository.existsSessionByUnavailableDate(date));
            if (!sessionRepository.existsSessionByUnavailableDate(date)) {
                sessionRepository.save(session);
            }
            unAvailableSessions.add(session);
        });
        System.out.println(unAvailableSessions.size());
        doctor.setUnavailabeSessions(unAvailableSessions);
        userRepository.save(doctor);


    }
}
