import React , {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import {  useDispatch } from 'react-redux'
import {  addNewChat } from '../../store/chatsreducer';

const NewChat = ({ show = false, setShow, chatFile, username }) => {

    const [chatName , setChatName] = useState("");
    const handleClose = () => setShow(false);

    //const chats = useSelector(state => state.chats);
    const dispatch = useDispatch();

    const addNewChat1 = () =>{
        //chatFile.push({name: chatName , messages:[]})

        dispatch(addNewChat({name:chatName, messages:[]}));

        handleClose();
        setChatName("");
    }

    return (
        <Modal show={show} onHide={handleClose}>
            
                <Modal.Header closeButton>
                    <Modal.Title>New Chat</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Label htmlFor="inputChatName">New Chat Name</Form.Label>
                    <Form.Control
                        type="text"
                        id="inputChatName"
                        value={chatName}
                        onChange={(e)=>setChatName(e.target.value)}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={addNewChat1}>Save changes</Button>
                </Modal.Footer>
         
        </Modal>

    );
}
export default NewChat;