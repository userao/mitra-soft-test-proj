import React, { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from "react-bootstrap/esm/Container";
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import Post from "./Post";
import FetchingDataSpinner from "./FetchingDataSpinner";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [state, setState] = useState('idling');

    function fetchPosts() {
        setState('fetching');
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
                setState('idling');
            })
    }, []);

    return (
        <>
            {state === 'fetching'
                ?
                <FetchingDataSpinner />
                :
                <Container>
                    <Accordion defaultActiveKey="0">
                        {posts.map((post) => <Post key={post.id} post={post} />)}
                    </Accordion>
                </Container>
            }
        </>
    )
};

export default Posts;