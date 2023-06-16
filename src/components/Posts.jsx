import React, { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from "react-bootstrap/esm/Container";
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    function fetchPosts() {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 500);
        })
        return promise.then(() => axios(url));
    }

    useEffect(() => {
        fetchPosts()
            .then((response) => {
                setPosts(response.data);
            })
    }, []);

    return (
        <>
            {!!posts.length
                ?
                <Accordion defaultActiveKey="0">
                    {posts.map((post) => <Post key={post.id} post={post} />)}
                </Accordion>
                :
                <Container fluid className='d-flex h-50 align-items-center justify-content-center'>
                    <Spinner animation="border" role="status" />
                </Container>
            }
        </>
    )
};

export default Posts;