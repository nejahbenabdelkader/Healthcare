package com.PFA.main.Model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Message {
	@Id
	@GeneratedValue
	private Long Id;
	
	private String textMessage;
	private Date dateMessage;
	
	@ManyToOne
	private User sender;
	
	@ManyToOne
	private User reciver;

}
