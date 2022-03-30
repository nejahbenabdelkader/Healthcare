import React from "react";
import Messages from "./Messages";
import styled from "styled-components";
import PersonChat from "./Chat";
import Publicity from "../Elements/Publicity";
const Main = styled.div`
  margin: 10px 250px;
  width: 800px;
  max-height: 350px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 10px;`;
const MessagesWrapper= styled.div`
background-color: #292F3F;
`
const PersonWrapper=styled.div`
background-color: #292F3F;
`
const contacts=[{
    id:'1',
    senderName:'Maciej Kowalski',
    message:'maciefffffffffffffj.kowalski&#64;email.com...',
    date:'08:12'
},
{
    id:'1',
    senderName:'Maciej Kowalski',
    message:'maciefffffffffffffj.kowalski&#64;email.com...',
    date:'08:12'
},{
    id:'1',
    senderName:'Maciej Kowalski',
    message:'maciefffffffffffffj.kowalski&#64;email.com...',
    date:'08:12'
},{
    id:'1',
    senderName:'Maciej Kowalski',
    message:'maciefffffffffffffj.kowalski&#64;email.com...',
    date:'08:12'
}]
const messages = [
  {
    id: "1",
    message:
      " I am almost finish. Please give me your email, I will ZIP them and send you as son as im finish",
    date: "08:12",
  },
  {
    id: "1",
    message:
      " I am almost finish. Please give me your email, I will ZIP them and send you as son as im finish",
    date: "08:12",
  },{
    id: "1",
    message:
      " I am almost finish. Please give me your email, I will ZIP them and send you as son as im finish",
    date: "08:12",
  },{
    id: "1",
    message:
      " I am almost finish. Please give me your email, I will ZIP them and send you as son as im finish",
    date: "08:12",
  },
];
const Chat = () => {
  return (
    <Main>
      <PersonWrapper>
       {contacts.map(contact=><PersonChat {...contact}/>)}
      </PersonWrapper>
      <MessagesWrapper>
        {messages.map((message) => (
          <Messages {...message} />
        ))}
      </MessagesWrapper>
      <Publicity srcImage="../../images/SVR-Pub.jpeg"/>
    </Main>
  );
};

export default Chat;
