package com.PFA.main.Repository;

import com.PFA.main.Model.Appoitment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppoitmentRepository extends JpaRepository<Appoitment, Long> {
}
