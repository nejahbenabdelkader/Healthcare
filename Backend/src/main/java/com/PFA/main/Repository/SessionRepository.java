package com.PFA.main.Repository;

import com.PFA.main.Model.Session;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;

public interface SessionRepository extends JpaRepository<Session,Long> {

    public Boolean existsSessionByUnavailableDate(Date unavailableDate);
}
