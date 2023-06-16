import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/esm/Container';

const FetchingDataSpinner = () => {
    return (
        <Container fluid className='d-flex h-50 align-items-center justify-content-center'>
            <Spinner animation="border" role="status" />
        </Container>
    )
};

export default FetchingDataSpinner;