
import '../../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import InputMessage from './InputMessage';

import MessagesList from './MessagesList';

import React, {useContext} from 'react';
import {ConversationContext } from '../context/ConversationContext';


function ChatControl() {

  const { chatName } = useContext(ConversationContext);

  return (
    <div className="App">
      <div className='App-width'>
        <h5>{chatName}</h5>
        <MessagesList />
        <InputMessage  />
      </div>
    </div>
  );
}

export default ChatControl;