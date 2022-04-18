package com.PFA.main.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.PFA.main.Model.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {

}
