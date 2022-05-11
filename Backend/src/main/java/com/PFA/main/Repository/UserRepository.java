package com.PFA.main.Repository;

import com.PFA.main.Model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import com.PFA.main.Model.User;

import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.email = :email")
    User findUserByEmail(@Param("email") String email);
    boolean existsByEmail(String email);
    User findByEmail(String email);
    List<User> findByRole(Role role);
    List<User> findByActivate(Boolean activate);

}
