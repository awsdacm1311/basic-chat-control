
import '../../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import InputMessage from './InputMessage';

import MessagesList from './MessagesList';

import React from 'react';


function ChatControl({messages, setNewMessages}) {


  return (
    <div className="App">
      <div className='App-width'>
        <MessagesList messageList={messages} user="daniel"/>
        <InputMessage data={messages} setData={setNewMessages} />
      </div>
    </div>
  );
}

export default ChatControl;