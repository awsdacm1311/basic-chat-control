
import '../../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import InputMessage from './InputMessage';

import MessagesList from './MessagesList';

import React from 'react';
import {useSelector} from 'react-redux';

function ChatControl({messages, setNewMessages, username}) {
   
    const chatname = useSelector((state) => state.chat_reducer.selectedChat)

  return (
    <div className="App">
      <div className='App-width'>
        <h5>{chatname}</h5>
        <MessagesList messageList={messages} user={username}/>
        <InputMessage data={messages} setData={setNewMessages} />
      </div>
    </div>
  );
}

export default ChatControl;