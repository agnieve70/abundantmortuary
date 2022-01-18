import React, { useEffect, useState } from 'react';
import { Form, Col, Row, Button, Spinner, Alert } from 'react-bootstrap';
import TableComponent from '../../table/TableComponent';

import { useDispatch, useSelector } from 'react-redux';
import {add_beneficiary, beneficiary_list, update_beneficiary} from '../../../actions/planholderActions';

function Step3(props) {

    const dispatch = useDispatch();
    const [rowData, setRowData] = useState();

    const beneficiaryList = useSelector(state => state.beneficiaryList);
    const {loading, error, beneficiaries} = beneficiaryList;

    const beneficiarySave = useSelector(state => state.beneficiarySave);
    const {loading: beneficiaryLoading, error: beneficiaryError, beneficiary_res} = beneficiarySave;

    const beneficiaryUpdate = useSelector(state => state.beneficiaryUpdate);
    const {loading: updateLoading, error: updateError, beneficiary_update} = beneficiaryUpdate;

    useEffect(() => {
        dispatch(beneficiary_list(props.planholder_id));
    }, [beneficiary_res, beneficiary_update])
    
    const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: '#',
            accessor: 'id',
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Birthdate',
            accessor: 'dob',
            filter: 'fuzzyText',
          },

        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Address',
            accessor: 'address',
            filter: 'fuzzyText',
          },
          {
            Header: 'Relationship',
            accessor: 'relationship',
          },
          {
            // Make an expander cell
            Header: () => null, // No header
            id: 'expander', // It needs an ID
            Cell: ({ row }) => (
              
              <Button size={"sm"} onClick={()=>{
                  handleSelectRow(row.values)
              } }><i className="fa fa-edit"></i></Button>
            ),
          },
        ],
      },
    ],
  );

    const handleFinishProfile = () =>
    {
        props.setStep(props.step + 1)
    }

    const handleAddBeneficiary = (e) =>
    {
        e.preventDefault();
        const beneficiary_info = {
            planholder_id : props.planholder_id,
            name: props.name,
            dob: props.beneficiary_dob ? props.beneficiary_dob : "05/13/1997" ,
            address: props.address,
            relationship: props.relationship,
        };

        console.log(typeof props.beneficiary_id);
      
        if(typeof props.beneficiary_id === 'undefined')
        {
            if(props.planholder_id)
            {
                dispatch(add_beneficiary(beneficiary_info)).then(()=>{
                });
            }
        }
        else {
                if(props.planholder_id)
            {
                dispatch(update_beneficiary(beneficiary_info, props.beneficiary_id)).then(()=>{
                    // props.setStep(props.step+1)
                });
            }
        }
    }

    const handleSelectRow = (row) => {
        console.log(row);
        props.setBeneficiaryId(row.id)
        props.setName(row.name);
        props.setBeneficiarydob(row.dob);
        props.setAddress(row.address);
        props.setRelationship(row.relationship);
    }
    

    return (
        <Form onSubmit={(e)=> handleAddBeneficiary(e)}>
            <h4>BENEFICIARIES {props.planholder_id} {props.data_id}</h4>
            <Row>
                <Col md={8}>
                    <Form.Group controlId='name'>
                        <Form.Label>NAME</Form.Label>
                        <Form.Control type="text" value={props.name} onChange={(e)=> props.setName(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId='beneficiary_dob'>
                        <Form.Label>BIRTHDATE</Form.Label>
                        <Form.Control type="date" value={props.beneficiary_dob} onChange={(e)=> props.setBeneficiarydob(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={8}>
                    <Form.Group controlId='address'>
                        <Form.Label>ADDRESS</Form.Label>
                        <Form.Control type="text" value={props.address} onChange={(e)=> props.setAddress(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId='relationship'>
                        <Form.Label>RELATIONSHIP</Form.Label>
                        <Form.Control type="text" value={props.relationship} onChange={(e)=> props.setRelationship(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Button className="mt-2" type="submit">Add Beneficiary</Button>
                    {
                        beneficiaryLoading ?
                            <>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </>
                            : beneficiaryError ?
                                <Alert key={"alert_error_msg"} variant={'danger'}>
                                There was an error: {error}
                                </Alert>
                            : 
                            <b> </b>
                    }
                </Col>

            </Row>
            <Row>
                <Col md={12}>
                    <TableComponent data={beneficiaries ? beneficiaries : []} columns={columns}  />
                </Col>
            </Row>
            <Button type="button" variant="secondary" className="me-2" onClick={()=> props.setStep(props.step - 1)}>Back</Button>
            <Button type="button" variant="success" onClick={()=>handleFinishProfile()}>Finish Profile</Button>
        </Form>
    )
}

export default Step3
