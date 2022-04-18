package com.PFA.main.Repository;

import com.PFA.main.Model.Firm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FirmRepository extends JpaRepository<Firm,Long> {
}
