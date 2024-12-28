import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import classroomImage from "./classroom.png";
import Group14 from './Group 14.jpg';
import { useNavigate } from "react-router-dom";

const BackgroundImageExample = () => {
    const backgroundStyle = {
        backgroundImage: `url(${classroomImage})`,
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents tiling
        height: "100vh", // Full viewport height
        color: "white", // Text color for readability
    };
    const navigate = useNavigate();
    return (
        <div style={backgroundStyle}>
            <Container>
                <Row className="align-items-center justify-content-center text-center" style={{ height: "100%" }}>
                    <Col className="mt-5">
                        <img src={Group14}
                            style={{ borderRadius: '20px', marginTop:'100px', width:'250px' }}
                        /><br></br>
                        <Button className='mt-5'
                            style={{
                                background: 'linear-gradient(180deg, #0030B3 0%, #99CA3C 100%)',
                                borderRadius: '15px',
                                padding: '40px',
                                marginTop:'70px',

                            }}>
                            Student</Button>
                        <Button className='mt-5'
                         onClick={() => navigate("/Regiester")}
                            style={{
                                background: 'linear-gradient(180deg, #0030B3 0%, #99CA3C 100%)',
                                borderRadius: '15px',
                                padding: '40px',
                                marginLeft: '60px',
                                marginTop:'70px',
                            }}>
                            Teacher</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BackgroundImageExample;
