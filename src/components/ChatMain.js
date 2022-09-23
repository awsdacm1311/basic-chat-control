import ChatControl from './chatcontrols/ChatControl';
import NewChat from './chats/NewChat';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import ListGroup from 'react-bootstrap/ListGroup';

import React, { useState, useContext} from 'react';
import {ConversationContext} from '../components/context/ConversationContext'


function ChatMain() {

    const {chats, setChat } = useContext(ConversationContext);
    const [showNewChat, setShowNewChat] = useState(false);

  
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Button variant="primary" onClick={() => setShowNewChat(true)}>New Chat</Button>    
              <ListGroup>
                {chats.map((chat, i) => 
                    <ListGroup.Item action key={i} onClick={()=>setChat(chat.name)}>{chat.name}</ListGroup.Item>
                )}
              </ListGroup>
            </Col>
            <Col>
                  <ChatControl  />
            </Col>
          </Row>
        </Container>
        <NewChat show={showNewChat} setShow={setShowNewChat} />
               
      </>
    );
  }
  
  export default ChatMain;