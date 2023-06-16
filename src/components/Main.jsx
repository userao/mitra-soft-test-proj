import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Navbar bg="light" expand={false} className="mb-3">
                <Navbar.Toggle aria-controls={`offcanvasNavbar`} className='mx-3' />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar`}
                    aria-labelledby={`offcanvasNavbar`}
                >
                    <Offcanvas.Header className='position-absolute w-100 justify-content-end' closeButton />
                    <Container>
                        <Row>
                            <Col>
                                <Image src='avatar.jpg' roundedCircle fluid />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p>
                                    Имя
                                </p>
                                <p>
                                    Почта
                                </p>
                            </Col>
                        </Row>
                    </Container>
                    <Link to='/' className='mx-4 mb-2'>Список постов</Link>
                    <Link to='/about-me' className='mx-4 mb-2'>Обо мне</Link>
                </Navbar.Offcanvas>
            </Navbar>
            <Outlet />
        </>
    )
};

export default Main;