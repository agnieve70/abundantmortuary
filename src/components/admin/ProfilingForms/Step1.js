import React, {useEffect} from 'react';
import { Form, Col, Row, Button, Spinner, Alert } from 'react-bootstrap';
import {regions} from '../region';
import {provinces} from '../province';
import {cities} from '../city';
import {barangays} from '../barangay';
import { useDispatch, useSelector } from 'react-redux';
import {add_personal_info, update_personal_info} from '../../../actions/planholderActions';


function Step1(props) {
    
    
    useEffect(() => {
        console.log(props.planholder_id);
    }, [])
    const dispatch = useDispatch();
    const personalInfoSave = useSelector(state => state.personalInfoSave);
    const {loading, error, personal_info_res} = personalInfoSave;

    // function for changing region . .. 
    const handleChangeRegion = (value) => {
        props.setRegion(value);
    }

    // function for changing province
    const handleChangeProvince = (value) => {
        props.setProvince(value);
    }

    // function for changing city
    const handleChangeCity = (value) => {
        props.setCity(value);
    }

    // function for changing barangay
    const handleChangeBarangay = (value) => {
        props.setBarangay(value);
    }

    // function for submit form
    const handleSubmitForm = (e) =>
    {
        e.preventDefault();
        const personal_info = {
            pf_no:props.pf_no,
            agent_id:props.agent_id,
            name: props.profile_name ? props.profile_name : props.lastName + ", "+ props.firstName + " " + props.middleName,
            barangay: props.barangay,
            lot_block: props.lotBlock,
            street: props.street,
            religion: props.religion,
            contact: props.contact,
            municipality: props.city,
            province: props.province,
            dob: props.dob,
            civil_status: props.civilStatus,
            gender: props.sex,
            region: props.region
        };
        // dispatch(add_personal_info(personal_info)).then(
        //      console.log(personal_info_res)
        // )
        // console.log(props.planholder_id);
        if(typeof props.planholder_id === 'undefined')
        {
            dispatch(add_personal_info(personal_info)).then(()=>{
                props.setStep(props.step+1)
            });
            
        }
        else{
            dispatch(update_personal_info(personal_info, props.planholder_id)).then(()=>{
                props.setStep(props.step+1)
            });
        }
    }

    const handleSetPlanholderId = (id) => {
        props.setPlanholderId(id)
    }

    return (
        <Form onSubmit={(e)=>handleSubmitForm(e)}>
            <h4>PERSONAL INFORMATION</h4>
            <Row>
                <Col md={2}>
                    <Form.Group controlId='pf_no'>
                        <Form.Label>PF NO.</Form.Label>
                        <Form.Control type="hidden" value={props.planholder_id} onChange={(e)=>props.setPlanholderId(e.target.value)} />
                        <Form.Control type="text" value={props.pf_no} onChange={(e)=>props.setPf_no(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId='agent_id'>
                        <Form.Label>SALES EXECUTIVE</Form.Label>
                        <Form.Select value={props.agent_id} onChange={(e)=>props.setAgent_id(e.target.value)}>
                            <option defaultValue hidden>SELECT SALES EXECUTIVE</option>
                            {
                                props.agent_names ?
                                props.agent_names.map((agent_name) => 
                                <option value={agent_name.id}>{agent_name.name}</option>): null
                            }
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            {/* TODO: NAME */}
            {
                props.profile_name ?
                <Row>
                    <Col md={12}>
                        <Form.Label>NAME</Form.Label>
                        <Form.Control type="text" value={props.profile_name} onChange={(e)=> props.setProfileName(e.target.value)} />
                    </Col>
                </Row>
                :
                <Row>
                    <Col md={4}>
                        <Form.Group controlId='lastName'>
                            <Form.Label>LAST NAME</Form.Label>
                            <Form.Control type="text" value={props.lastName} onChange={(e)=> props.setLastName(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col md={5}>
                        <Form.Group controlId='firstName'>
                            <Form.Label>FIRST NAME</Form.Label>
                            <Form.Control type="text" value={props.firstName} onChange={(e)=>props.setFirstName(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId='middleName'>
                            <Form.Label>MIDDLE NAME</Form.Label>
                            <Form.Control type="text" value={props.middleName} onChange={(e)=> props.setMiddleName(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
            }
            {/* TODO: ADDRESS */}
            <Row>
                <Col md={3}>
                    <Form.Group controlId='region'>
                        <Form.Label>REGION</Form.Label>
                        <Form.Select value={props.region} onChange={(e)=> handleChangeRegion(e.target.value)}>
                            <option defaultValue hidden>SELECT REGION</option>
                            {
                                regions ?
                                regions.map((reg, indx)=>
                                <option key={indx+1} value={reg.regCode}>{reg.regDesc}</option>):null
                            }
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId='province'>
                        <Form.Label>PROVINCE</Form.Label>
                        <Form.Select value={props.province} onChange={(e)=> handleChangeProvince(e.target.value)}>
                            <option defaultValue hidden>SELECT PROVINCE</option>
                            {
                                provinces.map((prov) =>
                                prov.regCode === props.region ?
                                <option value={prov.provCode}>{prov.provDesc}</option>:null)
                            }
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId='city'>
                        <Form.Label>CITY</Form.Label>
                        <Form.Select value={props.city} onChange={(e)=> handleChangeCity(e.target.value)}>
                            <option defaultValue hidden>SELECT CITY</option>
                            {
                                cities.map((cty) =>
                                cty.provCode === props.province ?
                                <option value={cty.citymunCode}>{cty.citymunDesc}</option>:null)
                            }
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId='barangay'>
                        <Form.Label>BARANGAY</Form.Label>
                        <Form.Select value={props.barangay} onChange={(e)=> handleChangeBarangay(e.target.value)}>
                            <option defaultValue hidden>SELECT BARANGAY</option>
                            {
                                barangays.map((brgy) =>
                                brgy.citymunCode === props.city ?
                                <option value={brgy.brgyCode}>{brgy.brgyDesc}</option>:null)
                            }
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            {/* TODO: LOT & STREETS */}
            <Row>
                <Col md={4}>
                    <Form.Group controlId='lot_block'>
                        <Form.Label>LOT/BLOCK</Form.Label>
                        <Form.Control type="text" value={props.lotBlock} onChange={(e)=>props.setLotBlock(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId='street'>
                        <Form.Label>STREET</Form.Label>
                        <Form.Control type="text" value={props.street} onChange={(e)=>props.setStreet(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            {/* TODO: PERSONAL INFO */}
            <Row>
                <Col md={2}>
                    <Form.Group controlId='dob'>
                        <Form.Label>BIRTHDATE</Form.Label>
                        <Form.Control type="date" value={props.dob} onChange={(e)=> props.setDob(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId='religion'>
                        <Form.Label>RELIGION</Form.Label>
                        <Form.Control type="text" value={props.religion} onChange={(e)=> props.setReligion(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group controlId='civil_status'>
                        <Form.Label>CIVIL STATUS</Form.Label>
                        <Form.Select value={props.civilStatus} onChange={(e)=> props.setCivilStatus(e.target.value)}>
                            <option defaultValue hidden>CIVIL STATUS</option>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Widowed</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group controlId='sex'>
                        <Form.Label>SEX</Form.Label>
                        <Form.Select value={props.sex} onChange={(e)=> props.setSex(e.target.value)}>
                            <option defaultValue hidden>SEX</option>
                            <option>MALE</option>
                            <option>FEMALE</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={3} className="mb-2">
                    <Form.Group controlId='contact'>
                        <Form.Label>CONTACT NUMBER</Form.Label>
                        <Form.Control type="text" value={props.contact} onChange={(e)=> props.setContact(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Button className="me-2" onClick={()=> props.setAction("list")} variant="secondary">BACK</Button>
            <Button type="submit">SAVE INFORMATION</Button>
            {
                loading ?
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    : 
                    personal_info_res?
                    handleSetPlanholderId(personal_info_res.planholder): ""
                    
                    
            }
        </Form>
    )
}

export default Step1
