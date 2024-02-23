import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    try {
      const response = await axios.post(
        "https://localhost:5000/api/User/createUser",
        {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
          address: address,
          city: city,
          phone: phone,
          birthday: birthday,
        }
      );
      if (response.status === 200) {
        console.log("User Created", response.data);
        navigate("/login");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.errorMessage
      ) {
        setError(error.response.data.errorMessage);
      } else {
        setError("Registration failed. Please try again later.");
      }
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  let stepDescription = "";
  if (step === 1) {
    stepDescription = "Please enter your email and password!";
  } else if (step === 2) {
    stepDescription = "Now enter your personal information.";
  }

  return (
    <section className="vh-100 gradient-custom">
      <Container className="py-5 h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col xs={12} md={8} lg={6} xl={5}>
            <Card bg="dark" text="white" style={{ borderRadius: "1rem" }}>
              <Card.Body className="p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                  <p className="text-white-50 mb-5">{stepDescription}</p>
                  <Form onSubmit={handleSubmit}>
                    {step === 1 && (
                      <>
                        <Form.Group className="mb-3" controlId="formGridEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formGridPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </Form.Group>
                        <Button variant="primary" onClick={handleNext}>
                          Next
                        </Button>
                      </>
                    )}
                    {step === 2 && (
                      <>
                        <Row>
                          <Col xs={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="formGridFirstName"
                            >
                              <Form.Label>First Name</Form.Label>
                              <Form.Control
                                placeholder="Enter first name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                              />
                            </Form.Group>
                          </Col>
                          <Col xs={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="formGridLastName"
                            >
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control
                                placeholder="Enter last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId="formGridBirthday"
                            >
                              <Form.Label>Phone Number</Form.Label>
                              <Form.Control
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="formGridAddress"
                            >
                              <Form.Label>Address</Form.Label>
                              <Form.Control
                                placeholder="Enter address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="formGridBirthday"
                            >
                              <Form.Label>Birthday</Form.Label>
                              <Form.Control
                                type="date"
                                value={birthday}
                                onChange={(e) => setBirthday(e.target.value)}
                              />
                            </Form.Group>
                          </Col>
                          <Col xs={6}>
                            <Form.Group
                              className="mb-3"
                              controlId="formGridCity"
                            >
                              <Form.Label>City</Form.Label>
                              <Form.Control
                                placeholder="Enter city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                        <Button variant="link" onClick={handleBack}>
                          Back
                        </Button>
                      </>
                    )}
                  </Form>
                  {error && <p className="text-danger">{error}</p>}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
