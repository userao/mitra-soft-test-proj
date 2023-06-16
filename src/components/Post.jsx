import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Accordion from 'react-bootstrap/Accordion';
import Spinner from 'react-bootstrap/Spinner';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import axios from 'axios';
import Comment from './Comment';
import FetchingDataSpinner from './FetchingDataSpinner';
import Comments from './Comments';

const Post = ({ post }) => {
    const toggleAccordion = useAccordionButton(post.id);
    const [postComments, setPostComments] = useState([]);
    const [state, setState] = useState('idling');

    function handleClick() {
        toggleAccordion();
        if (postComments.length === 0) {
            fetchComments()
                .then((response) => {
                    setPostComments(response.data.filter((comment) => comment.postId === post.id));
                    setState('idling');
                })
        }
    }

    function fetchComments() {
        setState('fetching');
        const url = 'https://jsonplaceholder.typicode.com/comments';
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 500);
        })
        return promise.then(() => axios(url));
    }

    return (
        <Card>
            <Card.Header className='w-100 d-flex align-items-center'>
                <Card.Img variant="left" src='avatar.jpg' className='post-avatar' />
                <Container>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                </Container>
                <Button onClick={handleClick}>Комментарии</Button>
            </Card.Header>
            <Accordion.Collapse eventKey={post.id}>
                <Card.Body>
                    {state === 'fetching'
                        ?
                        <FetchingDataSpinner />
                        :
                        <Comments comments={postComments} />
                    }
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

export default Post;