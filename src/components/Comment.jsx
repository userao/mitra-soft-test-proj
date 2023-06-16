import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

const Comment = ({ comment }) => {
    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{comment.email}</div>
                {comment.body}
            </div>
        </ListGroup.Item>
    )
}

export default Comment;