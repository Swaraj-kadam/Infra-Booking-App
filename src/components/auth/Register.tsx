import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import useAuth from "../../context/authContext";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const navigate = useNavigate();
    const { register } = useAuth();

    const isValid =
        username.length >= 5 && password.length >= 5;

    const handleRegister = async (e) => {
        e.preventDefault();
 
        try {
            const response = await register(username, password);
            if (response) {
                navigate('/login?message=Register Successfully');
                setUsername('');
                setPassword('');
            }
        } catch (error) {
            console.error(error);
            setError("Something went wrong");
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <h1>Register</h1>
                        </Card.Header>
                        <Card.Body>
                            {error}
                            <Form onSubmit={handleRegister}>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                {!isValid && (
                                    <p style={{ color: 'red' }}>
                                        Username and password must be at least 5 characters
                                    </p>
                                )}

                                <Button type="submit" disabled={!isValid}>
                                    Register
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;