import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {ConversationContext } from '../context/ConversationContext';


const InputMessage = () => {

  const {messages, addMessages } = useContext(ConversationContext)
    const [username, setUsername] = useState("");
    const [text, setText] = useState("");

  const addMessage = (e) =>{
    e.preventDefault();

    var currentToCompare = messages.slice();
    currentToCompare.push({username, text});
    addMessages(currentToCompare);

    setUsername("");
    setText("");
  }

  return (
    <Form onSubmit={addMessage}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>username</Form.Label>
      <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Text</Form.Label>
      <Form.Control type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Enter Message
    </Button>
  </Form>);
}

export default InputMessage;