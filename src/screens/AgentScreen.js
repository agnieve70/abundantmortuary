import React from 'react'
import AgentList from '../components/admin/AgentList'
import { Container, Row, Col } from 'react-bootstrap';
import AgentForm from '../components/admin/AgentForm';
import Header from '../components/admin/Header';

function AgentScreen() {
    return (
        <>
            <Header />
            <Row>
                <Col md={12}>
                     {/* <AgentForm /> */}
K                    <AgentList />
                </Col>
            </Row>
        </>
    )
}

export default AgentScreen
