import React, {useState} from 'react';

import {  useSelector,useDispatch } from 'react-redux'
import {  addNewMessage } from '../../store/chatsreducer';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const InputMessage = ({data,setData}) => {

    const [username, setUsername] = useState("");
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const activeChat = useSelector((state)=> state.chat_reducer.selectedChat);

  const addMessage = (e) =>{
    e.preventDefault();

    var currentToCompare = data.slice();
    currentToCompare.push({username, text});
    setData(currentToCompare);

    dispatch(addNewMessage({chatname:activeChat,message:{username,text}}));

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