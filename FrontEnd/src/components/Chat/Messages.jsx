import React from "react";
import { MessageBox } from "react-chat-elements";
const Messages = ({ date, message }) => {
  return (
    <MessageBox position={"right"} type={"text"} text={message} date={new Date()} />
  );
};

export default Messages;
