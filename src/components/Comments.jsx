import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Comment from "./Comment";

const Comments = ({ comments }) => {
    return (
        <ListGroup as="ol">
            {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
        </ListGroup>
    )
};

export default Comments;