import React from "react";
import { getAuth, signOut } from 'firebase/auth';
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import create from './create.png';
import Group14 from './Group 14.jpg';

const Setting = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                alert('Logged out successfully!');
                navigate('/'); // Redirect to main page
            })
            .catch((error) => {
                console.error('Error logging out: ', error);
                alert('Failed to log out!');
            });
    };

    return (
        <Container fluid>
            <Row>
                {/* Sidebar */}
                <Col lg={2} className="d-none d-lg-block vh-100  text-white p-3" style={{ backgroundColor: 'rgba(153, 202, 60, 1)' }}>
                    <div className="text-center mb-4">
                        <img
                            src={Group14} // Replace with actual logo path
                            alt="Logo"
                            style={{ width: "100px", borderRadius: "50px" }}
                        />
                    </div>
                    <h5 className="text-center mb-3 me-5">Fatima</h5>
                    <ListGroup variant="flush">
                        <ListGroup.Item action href="#courses" className="text-white bg-transparent border-0">
                            Courses
                        </ListGroup.Item>
                        <ListGroup.Item action href="#students" className="text-white bg-transparent border-0">
                            Students
                        </ListGroup.Item>
                        <ListGroup.Item action href="#settings" className="text-white bg-transparent border-0">
                            Settings
                        </ListGroup.Item>
                        <ListGroup.Item action href="#logout" className="text-white bg-transparent border-0">
                            <button onClick={handleLogout}>Logout</button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                {/* Main Content */}
                <Col lg={10} xs={12} className="p-4">
                    <div
                        style={{
                            background: ' #CDEB93',
                            borderRadius: "20px",
                            padding: "30px",
                        }}
                    >
                        <h2 className="text-center mb-4 mt-4" style={{ color: ' #0030B3' }}>
                            Create Courses
                        </h2>
                        <Row >
                            {/* Form Section */}
                            <Col className="mb-4  d-flex justify-content-center" >
                                <Form>
                                    <Form.Group controlId="formName" className="mb-2 ">
                                        <Form.Label></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Name"
                                            className="rounded-pill"
                                            style={{ width: "310px", height: "40px" }}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail" className="mb-2 ">
                                        <Form.Label></Form.Label>
                                        <Form.Control
                                            type="Email"
                                            placeholder="Enter email"
                                            className="rounded-pill"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formDescription" className="mb-2">
                                        <Form.Label></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Student"
                                            className="rounded-pill"
                                            style={{ width: "310px", height: "40px" }}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formDescription" className="mb-4">
                                        <Form.Label></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Password"
                                            className="rounded-pill"
                                            style={{ width: "310px", height: "40px" }}
                                        />
                                    </Form.Group>
                                    <Button
                                        variant="success"
                                        type="submit"
                                        className="rounded-pill px-5 me-5"
                                        style={{ marginLeft: "80px" }}

                                    >
                                        Submit
                                    </Button>
                                </Form>
                            </Col>

                            {/* Illustration Section */}
                            {/* <Col md={6} className="d-flex justify-content-center align-items-center">
                <img
                  src={create} // Replace with actual illustration path
                  alt="Illustration"
                  style={{ width: "90%", borderRadius: "20px" }}
                />
              </Col> */}
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Setting;
