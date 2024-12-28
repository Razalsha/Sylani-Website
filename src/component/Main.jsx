import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Group14 from './Group 14.jpg'; // Ensure the path matches the file location
import OnlineCourse from './Online Course.png';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Webdev from './web-dev.png';
import Message from './Message.png';
import Form from 'react-bootstrap/Form';
import Group17 from './Group 17.png';
import { useNavigate } from "react-router-dom";

function FullScreenNavbar() {
  const navigate = useNavigate();
  return (
    <>
      <Container fluid>
        
        <Container fluid style={{ background: 'linear-gradient(180deg, rgba(0, 48, 179, 0.2) 0%, rgba(153, 202, 60, 0.2) 100%)' }}>
          <Navbar expand="lg" style={{ backgroundColor: 'rgba(153, 202, 60, 1)' }} className="w-100">
            {/* Fluid container ensures it spans the full width */}
            <Container fluid className='px-5'>
              {/* Left - Title */}
              <Navbar.Brand href="#home" className="fw-bold">
                <img
                  src={Group14}
                  alt="Brand Logo"
                  style={{ width: '130px', height: 'auto', borderRadius: '10px' }}
                />
              </Navbar.Brand>

              {/* Center - Toggle for Offcanvas */}
              <Navbar.Toggle aria-controls="offcanvasNavbar" />

              {/* Offcanvas */}
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {/* Center - Links */}
                  <Nav className="justify-content-center flex-grow-1 gap-4">
                    <Nav.Link href="#home" style={{ color: 'white' }} >Courses</Nav.Link>
                    <Nav.Link href="#blogs" style={{ color: 'white' }} >Blogs</Nav.Link>
                    <Nav.Link href="#contact" style={{ color: 'white' }} >Contact</Nav.Link>
                  </Nav>

                  {/* Right - Buttons */}
                  <div className="d-flex gap-2 justify-content-start mt-3 mt-lg-0">
                    <Button variant="light" size="md" onClick={() => navigate("/Type")}>
                      Register
                    </Button>
                    <Button variant="light" size="md" onClick={() => navigate("/Login")}>
                      Login
                    </Button>
                  </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
          {/* Section-2 */}
          <Row className='mt-5 ms-5'>
            <Col lg={6} sm={12} >
              <h1
                style={{
                  background: 'linear-gradient(180deg, #0030B3 0%, #99CA3C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Learn without <br /> limits</h1>
              <h4 style={{ color: 'rgba(0, 48, 179, 1)' }}>Start, switch, or advance your career with more than 7,000 courses, Professional Certificates, and degrees from world-class universities and companies.</h4>
              <Button className='px-4 mt-2'
                style={{
                  background: 'linear-gradient(180deg, #0030B3 0%, #99CA3C 100%)',
                  borderRadius: '15px'
                }}>
                Get Started</Button>
            </Col>
            <Col lg={6} sm={12} className='ps-5'>
              <img
                src={OnlineCourse}
                alt="Brand Logo"
                style={{ width: '350px', height: 'auto', }}
                fluid
              />
            </Col>
          </Row>
        </Container>
        {/* section-3 */}
        <Row className='mt-5'>
          <h1 className='d-flex  justify-content-center mt-3'
            style={{
              background: 'linear-gradient(180deg, #0030B3 0%, #99CA3C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Start learning with <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;free courses
          </h1>
          <p className='d-flex  justify-content-center' style={{ color: 'rgba(0, 48, 179, 1)' }}>Explore free online courses.</p>

          <Col lg={4} sm={12} className='mt-5 d-flex  justify-content-center'>

            <Card style={{ width: '18rem', borderRadius: '30px' }}>
              <Card.Img variant="top" src={Webdev} />
              <Card.Body>
                <Card.Title style={{ color: 'rgba(153, 202, 60, 1)' }}>Web Development</Card.Title>
                <Card.Text>
                  Data Analysis, Data Management, Data Mining, Data Model,
                  Data Visualization, Extract, Transform, Load, Microsoft Excel, Power BI, SQL<br></br><br></br>
                  Beginner Professional Certificate 3-6 Months
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} sm={12} className='mt-5 d-flex  justify-content-center'>

            <Card style={{ width: '18rem', borderRadius: '30px' }}>
              <Card.Img variant="top" src={Webdev} />
              <Card.Body>
                <Card.Title style={{ color: 'rgba(153, 202, 60, 1)' }}>Web Development</Card.Title>
                <Card.Text>
                  Data Analysis, Data Management, Data Mining, Data Model,
                  Data Visualization, Extract, Transform, Load, Microsoft Excel, Power BI, SQL<br></br><br></br>
                  Beginner Professional Certificate 3-6 Months
                </Card.Text>
              </Card.Body>
            </Card>

          </Col>
          <Col lg={4} sm={12} className='mt-5 d-flex  justify-content-center'>

            <Card style={{ width: '18rem', borderRadius: '30px' }}>
              <Card.Img variant="top" src={Webdev} />
              <Card.Body>
                <Card.Title style={{ color: 'rgba(153, 202, 60, 1)' }}>Web Development</Card.Title>
                <Card.Text>
                  Data Analysis, Data Management, Data Mining, Data Model,
                  Data Visualization, Extract, Transform, Load, Microsoft Excel, Power BI, SQL<br></br><br></br>
                  Beginner Professional Certificate 3-6 Months
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Section-4 */}
        <Card className='mt-5 mb-3'
          style={{ background: 'linear-gradient(180deg, rgba(0, 48, 179, 0.2) 0%, rgba(153, 202, 60, 0.2) 100%)' }}>
          <Card.Body>
            {/* "Ready to join?" text */}
            <p style={{ fontSize: '18px', marginBottom: '8px', }}>
              Ready to join?
            </p>

            {/* Flexbox container for H1 and Button */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <h1
                style={{
                  background: 'linear-gradient(180deg, #0030B3 0%, #99CA3C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  margin: 0
                }}
              >
                Register For Free Courses
              </h1>
              <Button
                className='px-4'
                style={{
                  background: 'linear-gradient(180deg, #0030B3 0%, #99CA3C 100%)',
                  borderRadius: '15px',
                  border: 'none',
                }}
              >
                Regiester
              </Button>
            </div>
          </Card.Body>
        </Card>
        {/* section-4 */}
        <Row className='mt-4'>
          <Col lg={6} sm={12} >
            <img src={Message}></img>
          </Col>
          <Col lg={6} sm={12} className='mt-5'>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F8FFF4', // Light background matching your design
              }}
            >
              <Card className='py-4'
                style={{
                  width: '400px',
                  padding: '20px',
                  borderRadius: '15px',
                  backgroundColor: '#F6FFE8', // Light green card background
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >
                {/* Title */}
                <h1
                  style={{
                    textAlign: 'center',
                    background: 'linear-gradient(180deg, #0030B3 0%, #99CA3C 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '2px',
                  }}
                >
                  Contact Us
                </h1>

                {/* Form */}
                <Form>
                  {/* Email Input */}
                  <Form.Group controlId="formEmail" style={{ marginBottom: '15px' }}>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      style={{
                        backgroundColor: '#D6F5B0',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '10px',
                      }}
                    />
                  </Form.Group>

                  {/* Subject Input */}
                  <Form.Group controlId="formSubject" style={{ marginBottom: '20px' }}>
                    <Form.Control className='py-4'
                      type="text"
                      placeholder="Subject"
                      style={{
                        backgroundColor: '#D6F5B0',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '10px',
                      }}
                    />
                  </Form.Group>

                  {/* Submit Button */}
                  <div style={{ textAlign: 'center' }}>
                    <Button
                      type="submit"
                      style={{
                        background: 'linear-gradient(180deg, #0030B3 0%, #99CA3C 100%)',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '10px 20px',
                        color: 'white',
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </Card>
            </div>
          </Col>
        </Row>
        <Row className='mt-5 d-flex  justify-content-center' style={{ backgroundColor: 'rgba(153, 202, 60, 1)' }}>
          <img src={Group14} 
            style={{ width: '130px', height: 'auto', borderRadius: '10px', padding:'8px' }}
          />
          <p className='d-flex  justify-content-center' style={{color:'white'}}>© 2024 onlineSaylani.com All rights reserved.</p>
          <hr style={{color:'white'}}></hr>
          <img
          src={Group17}
          style={{ width: '130px', height: 'auto', borderRadius: '10px', }}
          />
        </Row>
      </Container >
    </>
  );
}

export default FullScreenNavbar;

