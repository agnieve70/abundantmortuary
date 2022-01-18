import React, {useState} from 'react'
import { Row, Col } from 'react-bootstrap';
import CollectionForm from '../components/admin/CollectionForm';
import ProfilingList from '../components/admin/ProfilingList';
import Header from '../components/admin/Header';

function CollectionScreen() {

    const [action, setAction] = useState();
    const [profile, setProfile] = useState();

    return (
        <>
        <Header />
        <Row>
            <Col md={12}>
                {
                    action  === "form"
                    ?
                        <CollectionForm
                            profile={profile}
                            setProfile={setProfile}
                        />
                    :
                        <ProfilingList
                            profile={profile}
                            setProfile={setProfile}
                            useFor={"collection"}
                            action={action}
                            setAction={setAction}
                        />
                }
            </Col>
        </Row>
        </>
    )
}

export default CollectionScreen
