import React from "react";
import '../../App.css';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Message from "./Message";

const MessagesList = ({messageList, user}) =>{

    return (
        <div className="Conversation-frame">
            <div className="ConversationToBottom">
            <Container>
                {
                    messageList.map((u, i) =>
                        <Row key={i}>
                            {u.username === user? <><Col /><Col><Message username={u.username} text={u.text} /></Col></>:
                                        <><Col><Message username={u.username} text={u.text} /></Col><Col /></>}
                        </Row>

                    )
                }
            </Container>
            </div>
        </div>
    );
}

export default MessagesList;