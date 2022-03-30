import React from "react";
import { Date, FlexWrapperOne, Frame1, Message } from "./MessagesElements";

const Messages = ({date,message}) => {
  return (
    <Frame1>
      <Date>{date}</Date>
      <FlexWrapperOne sender> 
        <Message>
         {message}
        </Message>
      </FlexWrapperOne>
    </Frame1>
  );
};

export default Messages;
