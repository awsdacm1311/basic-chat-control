import ChatControl from './chatcontrols/ChatControl';
import NewChat from './chats/NewChat';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import ListGroup from 'react-bootstrap/ListGroup';

import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {selectChat} from '../store/chatsreducer.js'

function ChatMain({ user }) {

    const [chatName, setChatName] = useState("");
    const [messages, setMessages] = useState([]);
    const [showNewChat, setShowNewChat] = useState(false);

    const Chats = useSelector((state) => state.chat_reducer.chats);
    const dispatch = useDispatch();
    const setChat = (chName) =>{

      dispatch(selectChat(chName))

      let chat = Chats.filter(p=> p.name===chName);
      setMessages(chat[0].messages);
      setChatName(chName);
    }
  
    const addMessages = (newMessagesArr) =>{
      setMessages(newMessagesArr);
    } 
  
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Button variant="primary" onClick={() => setShowNewChat(true)}>New Chat</Button>    
              <ListGroup>
                {Chats.map((chat, i) => 
                    <ListGroup.Item action key={i} onClick={()=>setChat(chat.name)}>{chat.name}</ListGroup.Item>
                )}
              </ListGroup>
            </Col>
            <Col>
                  <ChatControl messages={messages} setNewMessages={addMessages} username={user} chatname={chatName} />
            </Col>
          </Row>
        </Container>
        <NewChat show={showNewChat} setShow={setShowNewChat} chatFile={Chats} username={user}/>
               
      </>
    );
  }
  
  export default ChatMain;