import React from "react";
import {
  Person,
  Image,
  FlexWrapperOne,
  Date,
  Message,
  SenderName,
} from "./ChatElements";

const PersonChat = ({ senderName, message, time }) => {
  return (
    <Person>
      <FlexWrapperOne>
        <SenderName>Maciej Kowalski</SenderName>
        <Message>maciefffffffffffffj.kowalski&#64;email.com...</Message>
      </FlexWrapperOne>
      <Date>08:43</Date>
    </Person>
  );
};

export default PersonChat;
