package com.PFA.main.Service;

import com.PFA.main.Model.Message;
import com.PFA.main.Repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MessageService {

    @Autowired
    MessageRepository messageRepository;

    public List<Message> retreiveMessagesWithId(Long userId) {
       return  messageRepository.findAll().stream().filter(message -> message.getSender().getId().equals(userId) || message.getReciver().getId().equals(userId)).collect(Collectors.toList());

    }

    public void addMessage(Message message) {
        messageRepository.save(message);
    }
}
