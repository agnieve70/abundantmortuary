import React, {useState, useEffect} from 'react'
import ProfilingList from '../components/admin/ProfilingList'
import ProfilingForm from '../components/admin/ProfilingForm'
import { Row, Col } from 'react-bootstrap'
import Header from '../components/admin/Header';
import { useNavigate } from "react-router-dom";


function ProfilingScreen() {

    const navigate = useNavigate();

    // decides whether to show form or list . . 
    const [action, setAction] = useState();
    const [profile, setProfile] = useState();
    const [useFor, setUseFor] = useState();
    
    useEffect(() => {
        if(!localStorage.getItem('amUserInfo')){
            navigate("/");
        }
    }, []);

    return (
        <>
            <Header />
            <Row className='mt-5'>
                <Col md={12}>
                    {
                        action === 'form'
                        ? <ProfilingForm
                        action={action}
                        setAction={setAction}
                        profile={profile}
                        setProfile={setProfile}
                        />
                        : <ProfilingList
                        action={action}
                        setAction={setAction}
                        profile={profile}
                        setProfile={setProfile}
                        useFor={"planholder"}
                        />
                    }
                </Col>
            </Row>
        </>
    )
}

export default ProfilingScreen
