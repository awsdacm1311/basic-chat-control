import React , {useState, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { ConversationContext } from '../context/ConversationContext';



const NewChat = ({ show = false, setShow }) => {

    const {  chats, setChats, setChatName } = useContext(ConversationContext);
    const [newChatName, setNewChatName] = useState("");

    const handleClose = () => setShow(false);

    const addNewChat = () =>{
        setChats([...chats, {name: newChatName , messages:[]}])
        setChatName(newChatName);
        handleClose();
        setNewChatName("");
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
                        value={newChatName}
                        onChange={(e)=>setNewChatName(e.target.value)}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={addNewChat}>Save changes</Button>
                </Modal.Footer>
         
        </Modal>

    );
}
export default NewChat;