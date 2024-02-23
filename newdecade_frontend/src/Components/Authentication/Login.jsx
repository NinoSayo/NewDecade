import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useNavigate , Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://localhost:5000/api/User/login', {
                email: email,
                password: password
            });

            const { token, expires } = response.data;

            localStorage.setItem('token', token);
            localStorage.setItem('expires', expires);

            navigate('/');
        } catch (error) {
            setError(error.response.data);
        }
    };
    
    return (
      <section className="vh-100 gradient-custom">
      <Container className="py-5 h-100">
          <Row className="d-flex justify-content-center align-items-center h-100">
              <Col xs={12} md={8} lg={6} xl={5}>
                  <Card bg="dark" text="white" style={{ borderRadius: '1rem' }}>
                      <Card.Body className="p-5 text-center">
                          <div className="mb-md-5 mt-md-4 pb-5">
                              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                              <p className="text-white-50 mb-5">Please enter your email and password!</p>
                              <Form onSubmit={handleSubmit}>
                                  <Form.Group className="mb-4">
                                      <Form.Control type="email" placeholder="Email" size="lg" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                  </Form.Group>
                                  <Form.Group className="mb-4">
                                      <Form.Control type="password" placeholder="Password" size="lg" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                  </Form.Group>
                                  {error && <p className="text-danger">{error}</p>}
                                  <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                                  <Button variant="outline-light" size="lg" className="px-5" type="submit">Login</Button>
                              </Form>
                              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                  <a href="#!" className="text-white"><FaFacebookF className="fa-lg" /></a>
                                  <a href="#!" className="text-white"><FaTwitter className="fa-lg mx-4 " /></a>
                                  <a href="#!" className="text-white"><FaGoogle className="fa-lg" /></a>
                              </div>
                          </div>
                          <div>
                              <p className="mb-0">Don't have an account? <Link to='/register' className="text-white-50 fw-bold">Sign Up</Link></p>
                          </div>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
      </Container>
  </section>
    );
}

export default Login;
