import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Post = ({ post }) => {
    return (
        <Card className='flex-row align-items-center'>
            <Card.Img variant="left" src='avatar.jpg' roundedCircle className='post-avatar' />
            <Card.Header>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
            </Card.Header>
        </Card>
    );
};

export default Post;