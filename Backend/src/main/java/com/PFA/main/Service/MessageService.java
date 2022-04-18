package com.PFA.main.Service;

import com.PFA.main.Model.Message;
import com.PFA.main.Repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    @Autowired
    MessageRepository messageRepository;

    public List<Message> getMessages(Long id,String type) {

        return null;
    }
}
