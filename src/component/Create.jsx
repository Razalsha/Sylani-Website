
import { useState } from 'react';
import { db } from '../config/Firebase'; // Your Firebase setup
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import create from './create.png';
import Group14 from './Group 14.jpg';

const CreateCourse = () => {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!courseName || !description) {
      alert('Please fill in all fields!');
      return;
    }
    try {
      const courseCollection = collection(db, 'courses');
      await addDoc(courseCollection, {
        courseName,
        description,
        createdAt: new Date(),
      });
      alert('Course created successfully!');
      navigate('/Dashboard'); // Redirect to Dashboard
    } catch (error) {
      console.error('Error creating course: ', error);
      alert('Failed to create course!');
    }
  };

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col lg={2} className="d-none d-lg-block vh-100  text-white p-3" style={{backgroundColor: 'rgba(153, 202, 60, 1)'}}>
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
              Logout
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Main Content */}
        <Col lg={10} xs={12} className="p-4">
          <div
            style={{
                background:' #CDEB93',
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h2 className="text-center mb-4 mt-4" style={{ color:' #0030B3' }}>
              Create Courses
            </h2>
            <Row >
              {/* Form Section */}
              <Col md={6} className="mb-4 mt-5" >
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter course name"
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                      className="rounded-pill"
                    />
                  </Form.Group>
                  {/* <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label></Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="rounded-pill"
                    />
                  </Form.Group> */}
                  <Form.Group controlId="formDescription" className="mb-4">
                    <Form.Label></Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter course description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="rounded"
                    />
                  </Form.Group>
                  <Button
                    variant="success"
                    type="submit"
                    className="rounded-pill px-4"
                  >
                    Create Course
                  </Button>
                </Form>
              </Col>

              {/* Illustration Section */}
              <Col md={6} className="d-flex justify-content-center align-items-center">
                <img
                  src={create} // Replace with actual illustration path
                  alt="Illustration"
                  style={{ width: "90%", borderRadius: "20px" }}
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateCourse;
