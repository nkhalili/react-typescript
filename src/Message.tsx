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

// using Interface for functions
interface SearchFunc {
  (source: string, subString: string): boolean;
}

export let mySearch: SearchFunc;

mySearch = (source: string, subString: string) => {
  return source.search(subString) > -1;
};

export default Message;
