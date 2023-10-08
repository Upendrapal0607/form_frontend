// Chat.js
import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './Message.Input';


const Chat = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text, sender) => {
    const newMessage = { text, sender, timestamp: new Date() };
    setMessages([...messages, newMessage]);
  };

  return (
    <div>
      <MessageList messages={messages} />
      <MessageInput onSend={addMessage} />
    </div>
  );
};

export default Chat;
