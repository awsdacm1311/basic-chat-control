import React from 'react'
import Card from 'react-bootstrap/Card';

const Message = ({username, text}) =>(

    <Card border="primary" bg="light">
        <Card.Subtitle className="mb-2 text-muted">{username}</Card.Subtitle>
        <Card.Body>{text}</Card.Body>
    </Card>
)

export default Message;