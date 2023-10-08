// MessageList.js
import React from 'react';

const MessageList = ({ messages }) => (
  <div>
    {messages.map((message, index) => (
      <div key={index} className='text-20xl font-bold underline'>
        <strong>{message.sender}:</strong> {message.text}
      </div>
    ))}
  </div>
);

export default MessageList;
