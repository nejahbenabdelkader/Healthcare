import React from "react";
import Messages from "./Messages";
import styled from "styled-components";
import PersonChat from "./Chat";
import { Input, Button, MessageList } from "react-chat-elements";

const Main = styled.div`
  width: 100%;
  background-color: black;
  height: auto;
`;
const Wrapper = styled.div`
  width: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 10px;
`;
const MessagesWrapper = styled.div`
  background-color: #292f3f;
  width: 100%;
  padding: 0px 15px;
`;
const PersonWrapper = styled.div`
  background-color: #292f3f;
  height: auto;
`;
const contacts = [
  {
    id: "1",
    senderName: "Maciej Kowalski",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    date: "2022-04-06T01:44:23.854Z",
  },
  {
    id: "1",
    senderName: "Maciej Kowalski",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    date: "2022-04-06T01:44:23.854Z",
  },
  {
    id: "1",
    senderName: "Maciej Kowalski",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    date: "2022-04-06T01:44:23.854Z",
  },
  {
    id: "1",
    senderName: "Maciej Kowalski",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    date: "2022-04-06T01:44:23.854Z",
  },
];
const messages = [
  {
    id: "1",
    message:
      " I am almost finish. Please give me your email, I will ZIP them and send you as son as im finish",
    date: "2022-04-06T01:44:23.854Z",
  },
  {
    id: "1",
    message:
      " I am almost finish. Please give me your email, I will ZIP them and send you as son as im finish",
    date: "2022-04-06T01:44:23.854Z",
  },
  {
    id: "1",
    message:
      " I am almost finish. Please give me your email, I will ZIP them and send you as son as im finish",
    date: "2022-04-06T01:44:23.854Z",
  },
  {
    id: "1",
    message:
      " I am almost finish. Please give me your email, I will ZIP them and send you as son as im finish",
    date: "2022-04-06T01:44:23.854Z",
  },
];
const Chat = () => {
  return (
    <Main>
      <Wrapper>
        <PersonWrapper>
          {contacts.map((contact) => (
            <PersonChat {...contact} />
          ))}
        </PersonWrapper>
        <MessagesWrapper>
          <MessageList
            className="message-list"
            lockable={true}
            toBottomHeight={"100%"}
            dataSource={[
              {
                position: "right",
                type: "text",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                date: new Date(),
              },
              {
                position: "right",
                type: "text",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                date: new Date(),
              },
              {
                position: "left",
                type: "text",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                date: new Date(),
              },
              {
                position: "right",
                type: "text",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                date: new Date(),
              },
            ]}
          />
          <Input
            
            placeholder="Type here..."
            multiline={true}
            rightButtons={
              <Button color="white" backgroundColor="green" text="Send" />
            }
          />
        </MessagesWrapper>
      </Wrapper>
    </Main>
  );
};

export default Chat;
