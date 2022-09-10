
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ChatControl from './components/chatcontrols/ChatControl';
import NewChat from './components/chats/NewChat';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import ListGroup from 'react-bootstrap/ListGroup';

import React, { useState} from 'react';

const user = "daniel"
const Chats = [
  {
    name: "Chat 1 con juan",
    messages: [
      {
        username:"juan",
        text: "hello hello"
      },
      {
        username:"daniel",
        text: "que chevere"
      }
    ]
  },
  {
    name: "Chat 2 con Carlos",
    messages: [
      {
        username:"carlos",
        text: "bien o no"
      },
      {
        username:"daniel",
        text: "super"
      }
    ]
  },
  {
    name: "Chat 3 con Felipe",
    messages: [
      {
        username:"felipe",
        text: "bogota es bacana"
      },
      {
        username:"daniel",
        text: "ahi se va"
      }
    ]
  }
];

function App() {

  const [chatName, setChatName] = useState("");
  const [messages, setMessages] = useState([]);
  const [showNewChat, setShowNewChat] = useState(false);

  const setChat = (chName) =>{
    let chat = Chats.filter(p=> p.name===chName);
    setMessages(chat[0].messages);
    setChatName(chName);
  }

  const addMessages = (newMessagesArr) =>{
    setMessages(newMessagesArr);

    let Index = Chats.findIndex(p=> p.name===chatName);
    Chats[Index].messages = newMessagesArr;
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

export default App;
