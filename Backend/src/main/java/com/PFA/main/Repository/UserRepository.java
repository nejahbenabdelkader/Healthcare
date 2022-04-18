package com.PFA.main.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.PFA.main.Model.User;

import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {



}
