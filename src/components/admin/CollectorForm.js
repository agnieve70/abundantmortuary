import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';

function CollectorForm() {
    return (
        <Row>
            <Col md={2}></Col>
            <Col md={8}>
                 <h4>Collector's Form</h4>
                 <Form>
                     <Row>
                     <Col md={5}>
                         <Form.Group controlId='firstname'>
                            <Form.Label>FIRST NAME</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                     </Col>
                     <Col md={4}>
                         <Form.Group controlId='lastname'>
                            <Form.Label>LAST NAME</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                     </Col>
                     <Col md={3}>
                         <Form.Group controlId='dob'>
                            <Form.Label>BIRTH DATE</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                     </Col>
                     </Row>
                     <Row>
                        <Col md={2}>
                            <Form.Group controlId='gender'>
                                <Form.Label>GENDER</Form.Label>
                                <Form.Select>
                                    <option>MALE</option>
                                    <option>FEMALE</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId='contact'>
                                <Form.Label>CONTACT NO.</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group controlId='email'>
                                <Form.Label>EMAIL</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId='password'>
                                <Form.Label>PASSWORD</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>
                        </Col>
                     </Row>
                     <Button>ADD COLLECTOR</Button>
                 </Form>
            </Col>
            <Col md={2}></Col>
        </Row>
    )
}

export default CollectorForm
