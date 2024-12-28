import React, { useState } from "react";
import { Button, Modal, Table, Form, ListGroup, Col } from "react-bootstrap";
import Group14 from './Group 14.jpg'
import Webdev from './web-dev.png'

const AllStudents = () => {
    
    const [showModal, setShowModal] = useState(false);
    const [currentAction, setCurrentAction] = useState("");

    const handleShowModal = (action) => {
        setCurrentAction(action);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div style={{ display: "flex", background: "#F8FFF4", height: "100vh" }}>
            {/* Sidebar */}
            <Col md={2} className="vh-100  text-white d-flex flex-column p-3" style={{backgroundColor: 'rgba(153, 202, 60, 1)'}}>
                <div className="text-center mb-4 me-4">
                    <img
                        src={Group14} // Replace with actual logo path
                        alt="Logo"
                        style={{ width: "100px", borderRadius: "50px" }}
                    />
                </div>
                <h4 className="text-center mb-3 me-5">Fatima</h4>
                <ListGroup variant="flush" className="mb-auto">
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
                        Logout
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            {/* Main Content */}
            <div style={{ flex: 1, padding: "20px" }}>
                <h3 style={{ color: "#99CA3C" }}>All Students</h3>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course</th>
                            <th>Students</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <img
                                        src={Webdev} // Replace with your course image source
                                        alt="Course"
                                        style={{ width: "50px", height: "auto", marginRight: "10px" }}
                                    />
                                    Web Development
                                </td>
                                <td>
                                    <Button variant="primary" size="sm" className="px-5">
                                        All Students
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleShowModal("Delete")}
                                        className="me-3 "
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        variant="success"
                                        size="sm"
                                        onClick={() => handleShowModal("Update")}
                                    >
                                        Update
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* Modal for Update/Delete */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{currentAction} Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {currentAction === "Update" ? (
                        <Form>
                            <Form.Group controlId="courseName" className="mb-3">
                                <Form.Label>Course Name</Form.Label>
                                <Form.Control type="text" placeholder="Web Development" />
                            </Form.Group>
                            <Form.Group controlId="searchField" className="mb-3">
                                <Form.Label>Search</Form.Label>
                                <Form.Control type="text" placeholder="Search..." />
                            </Form.Group>
                            <Form.Group controlId="detailsField" className="mb-3">
                                <Form.Label>Details</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Details..." />
                            </Form.Group>
                        </Form>
                    ) : (
                        <p>Are you sure you want to delete this course?</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button variant={currentAction === "Update" ? "success" : "danger"}>
                        {currentAction}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AllStudents;
