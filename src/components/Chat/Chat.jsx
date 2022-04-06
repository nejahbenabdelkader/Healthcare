import React from "react";
import { ChatItem } from "react-chat-elements";

import {
  Person,
} from "./ChatElements";

const PersonChat = ({ senderName, message, time }) => {
  const date = new Date();
  return (
      <ChatItem
        avatar={"../../images/logo.jpg"}
        alt={"Photo"}
        title={senderName}
        subtitle={message}
        date={date}
        unread={0}
      />
  );
};

export default PersonChat;
