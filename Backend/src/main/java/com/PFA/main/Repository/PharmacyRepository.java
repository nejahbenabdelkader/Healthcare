package com.PFA.main.Repository;

import com.PFA.main.Model.Pharmacy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PharmacyRepository extends JpaRepository<Pharmacy,Long> {
    List<Pharmacy> findByType(String type);
}
