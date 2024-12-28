
import { useEffect, useState } from 'react';
import { db } from '../config/Firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { doc, updateDoc , deleteDoc} from 'firebase/firestore';
import { getAuth, signOut } from 'firebase/auth';
import { Modal, Button, Form, Card, Row, Col, Container, ListGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Group14 from './Group 14.jpg';
import Webdev from './web-dev.png'

const Dashboard = () => {
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
    
    useEffect(() => {
        const courseCollection = collection(db, 'courses');
        const unsubscribe = onSnapshot(courseCollection, (snapshot) => {
          const coursesData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setCourses(coursesData);
        });
        return () => unsubscribe();
      }, []);
    

    const [courses, setCourses] = useState([    ]);
    const navigate = useNavigate();
    const handleCreateCourse = () => {
        navigate('/Create');
      };
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const handleUpdateClick = (course) => {
        setSelectedCourse(course);
        setShowUpdateModal(true);
    };

    const handleDeleteClick = (course) => {
        setSelectedCourse(course);
        setShowDeleteConfirm(true);
    };

    const handleDeleteConfirm = () => {
        setCourses(courses.filter((course) => course.id !== selectedCourse.id));
        setShowDeleteConfirm(false);
        setSelectedCourse(null);
    };

    const handleUpdateSave = () => {
        // Update course logic (replace with your API logic if needed)
        setCourses(
            courses.map((course) =>
                course.id === selectedCourse.id ? { ...selectedCourse } : course
            )
        );
        setShowUpdateModal(false);
    };

    return (
        <Container fluid>
            <Row>
                <Col md={2} className="vh-100  text-white d-flex flex-column p-3" style={{ backgroundColor: 'rgba(153, 202, 60, 1)' }}>

                    <Container fluid className="container-fluid">
                        <div className="text-center mb-4 me-4">
                            <img
                                src={Group14} // Replace with actual logo path
                                alt="Logo"
                                style={{ width: "100px", borderRadius: "50px" }}
                            />
                        </div>
                        <h4 className="text-center mb-3 me-5">Fatima</h4>
                        <ListGroup >
                            <ListGroup.Item action href="#courses" className="text-white bg-transparent border-0">
                            <button onClick={() => navigate("/Create")}
                              style={{border:"none"}}
                                >Create</button>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#students" className="text-white bg-transparent border-0">
                            <button onClick={() => navigate("/AllStudent")}
                             style={{border:"none"}}
                                >All Student</button>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#settings" className="text-white bg-transparent border-0">
                                <button onClick={() => navigate("/Setting")}
                                  style={{border:"none"}}
                                    >Settings</button>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#logout" className="text-white bg-transparent border-0">
                            <button onClick={handleLogout}
                            style={{border:"none"}}
                            >Logout</button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Container>


                </Col>
                <Col md={10} className="p-4">
                    <Row className="align-items-center mb-4">
                        <Col>
                            <h2
                                style={{
                                    background: 'linear-gradient(180deg, #0030B3 0%, #99CA3C 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                My Courses</h2>
                        </Col>
                        <Col md={6}>
                            <Form.Control type="text" placeholder="Search" className="rounded-pill" />
                        </Col>
                        <Col md="auto">
                            <Button
                                variant="success"
                                onClick={handleCreateCourse}
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    fontSize: "20px",
                                    padding: 0,
                                }}
                            >
                                +
                            </Button>
                        </Col>
                    </Row>
                    {/* Courses Grid */}
                    <Row>
                        {courses.map((course) => (
                            <Col md={4} className="mb-4" key={course.id}>
                                <Card style={{ borderRadius: '7%', backgroundColor: 'rgb(218, 253, 157)' }}>
                                    <Card.Img variant="top" src={Webdev} />
                                    <Card.Body >
                                        <Card.Title>{course.courseName}</Card.Title>
                                        <Card.Text>{course.description}</Card.Text>
                                        <div className="d-flex justify-content-between">
                                            <Button
                                                style={{ backgroundColor: 'rgba(153, 202, 60, 1)' }}
                                                onClick={() => handleUpdateClick(course)}
                                            >
                                                Update
                                            </Button>
                                            <Button
                                                variant="danger"
                                                onClick={() => handleDeleteClick(course)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

            {/* Update Modal */}
            <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formCourseTitle">
                            <Form.Label>Course Title</Form.Label>
                            <Form.Control
                                type="text"
                                value={selectedCourse?.courseName || ""}
                                onChange={(e) =>
                                    setSelectedCourse({ ...selectedCourse, courseName: e.target.value })
                                }
                            />
                        </Form.Group>
                        <Form.Group controlId="formCourseDescription" className="mt-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={selectedCourse?.description || ""}
                                onChange={(e) =>
                                    setSelectedCourse({
                                        ...selectedCourse,
                                        description: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowUpdateModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleUpdateSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Delete Confirmation */}
            <Modal show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete the course{" "}
                    <strong>{selectedCourse?.title}</strong>?
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setShowDeleteConfirm(false)}
                    >
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeleteConfirm}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Dashboard;
