package com.PFA.main.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.PFA.main.Model.User;

import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.email = :email")
    public User findUserByEmail(@Param("email") String email);
    boolean existsByEmail(String email);
    public User findByEmail(String email);

}
