import React, {useState, useEffect} from 'react'
import { Col, Row, Form, Button, Alert, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {register} from '../actions/userActions';
import Header from '../components/admin/Header';
import { useNavigate } from "react-router-dom";

function RegisterScreen() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [role_id, setRoleId] = useState('');

    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userRegister);
    const {loading, error, userResult} = userRegister;
    const formSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, contact, gender, birthdate, password, password_confirmation, role_id));
    }
    useEffect(() => {
       if(!localStorage.getItem('amUserInfo')){
            navigate("/");
        }
    }, [])
    return (
        <>
        <Header />
        <Row>
            <Col md={4}></Col>
            <Col md={4} className="mt-5">
                {
                    loading ?
                    <>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </>
                    : error ?
                        <Alert variant={'danger'}>
                            Incorrect Credentials!
                        </Alert>
                    : userResult ?
                        userResult.success ?
                        <Alert variant={'success'}>
                            Successfully Registered
                        </Alert> : null: null
                }
                <Form onSubmit={(e)=>formSubmitHandler(e)}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} type="text" onChange={(e)=>setName(e.target.value)} />
                    </Form.Group>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="birthdate">
                                <Form.Label>Birthdate</Form.Label>
                                <Form.Control value={birthdate} type="date" onChange={(e)=>setBirthdate(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select value={gender} onChange={(e)=>setGender(e.target.value)}>
                                    <option selected hidden>Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="contact">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control value={contact} type="text" onChange={(e)=>setContact(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={email} type="text" onChange={(e)=>setEmail(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control value={password} type="password" onChange={(e)=>setPassword(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="password_confirmation">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control value={password_confirmation} type="password" onChange={(e)=>setPasswordConfirmation(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Form.Group controlId="role_id">
                        <Form.Label>User Role</Form.Label>
                        <Form.Select value={role_id} onChange={(e)=> setRoleId(e.target.value)}>
                            <option selected hidden>Select User Role</option>
                            <option value="1">Admin</option>
                            <option value="2">Agent</option>
                            <option value="3">Collector</option>
                        </Form.Select>
                    </Form.Group>
                    <div className="d-grid gap-2 mt-2">
                        <Button type="submit">Register</Button>
                    </div>
                </Form>
            </Col>
            <Col md={4}></Col>
        </Row>
        </>
    )
}


export default RegisterScreen
