import React from 'react';

interface UserMessage {
  name: string;
  message: string;
}

const Message = (prop: UserMessage): any => (
  <p>
    {prop.name}, {prop.message}
  </p>
);

export default Message;
