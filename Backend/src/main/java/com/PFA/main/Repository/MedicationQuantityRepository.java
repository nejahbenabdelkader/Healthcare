package com.PFA.main.Repository;

import com.PFA.main.Model.MedicationQuantity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicationQuantityRepository extends JpaRepository<MedicationQuantity,Long> {
}
