import React, {useEffect} from 'react'
import { Form, Col, Row, Button, Spinner } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import {add_data , update_data, get_single_data} from '../../../actions/planholderActions';
function Step2(props) {


    const dispatch = useDispatch();
    const dataSave = useSelector(state => state.dataSave);
    const {loading, error, data_res} = dataSave;

     const getSingleData = useSelector(state => state.getSingleData);
    const {loading:loadingSingleData, error:errorSingleData, single_data} = getSingleData;

    const handleFormSubmit = (e) =>
    {
        e.preventDefault();
        const data_info = {
                planholder_id : props.planholder_id,
                total_contract_price: props.totalContractPrice,
                installment_due: props.installmentDue,
                effective_date: props.effectiveDate,
                mode_of_premium: props.modeOfPremium,
                terms: props.terms,
                insurable: props.insurable,
                no_insurable: props.no_insurable,
            };

            if(typeof props.data_id === 'undefined')
            {
                if(props.planholder_id)
                {
                    dispatch(add_data(data_info, props.planholder_id)).then(()=>{
                        props.setStep(props.step+1)
                    });
                }
            }
            else {
                 if(props.planholder_id)
                {
                    console.log(props.data_id)
                    dispatch(update_data(data_info, props.data_id)).then(()=>{
                        props.setStep(props.step+1)
                    });
                }
            }
           
    }

    const handleSetDataId = (id) => {
         props.setDataId(id)
    }

     useEffect(() => {
        if(props.planholder_id)
        {
            dispatch(get_single_data(props.planholder_id));
        }
    }, [])

    return (
        <Form onSubmit={(e)=>handleFormSubmit(e)}>
            <h4>DATA {props.planholder_id}</h4>
            <Row>
                <Col md={4}>
                    <Form.Group controlId='total_contract_price'>
                        <Form.Label>Total Contract Price</Form.Label>
                        <Form.Control type="text"
                        placeholder={single_data  ? single_data.total_contract_price : null}
                        value={props.totalContractPrice}
                        onChange={(e)=>props.setTotalContractPrice(e.target.value) } />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId='installment_due'>
                        <Form.Label>Installment Due</Form.Label>
                        <Form.Control type="text"
                        placeholder={single_data  ? single_data.installment_due : null}
                        value={props.installmentDue}
                        onChange={(e)=>props.setInstallmentDue(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId='effective_date'>
                        <Form.Label>Effective Date <b>{single_data  ? single_data.effective_date : null}</b></Form.Label>
                        <Form.Control type="date"
                        value={props.effectiveDate}
                        onChange={(e)=>props.setEffectiveDate(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Form.Label>Mode of Premium <b>{ single_data  ? single_data.mode_of_premium : null }</b></Form.Label> <br />
                    <Form.Check inline ="true"
                    type='radio'
                    name="mode_of_premium"
                    label="Monthly"
                    value="Monthly"
                    checked={"Monthly" === props.modeOfPremium}
                    onChange={(e) => props.setModeOfPremium(e.target.value)}
                    /> 
                    <Form.Check inline ="true"
                    type='radio'
                    name="mode_of_premium"
                    label="Quarter"
                    value="Quarter"
                    checked={"Quarter" === props.modeOfPremium}
                    onChange={(e) => props.setModeOfPremium(e.target.value)}
                    /> 
                    <Form.Check inline ="true"
                    type='radio'
                    name="mode_of_premium"
                    label="Semi-Annual"
                    value="Semi-Annual"
                    checked={"Semi-Annual" === props.modeOfPremium}
                    onChange={(e) => props.setModeOfPremium(e.target.value)}
                    /> 
                    <Form.Check inline ="true"
                    type='radio'
                    name="mode_of_premium"
                    label="Spot-Cash"
                    value="Spot-Cash"
                    checked={"Spot-Cash" === props.modeOfPremium}
                    onChange={(e) => props.setModeOfPremium(e.target.value)}
                    /> 
                </Col>
                <Col md={2}>
                        <Form.Group controlId='terms'>
                        <Form.Label>Terms</Form.Label>
                        <Form.Control type="number" min="1"
                        placeholder={single_data  ? single_data.terms : null}
                        value={props.terms} onChange={(e)=>props.setTerms(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Label>Insurable/Non-Insurable <b>{ single_data  ? single_data.insurable == 1 ? "Insurable" : "Non Insurable" : null } </b></Form.Label> <br />
                    <Form.Check inline
                    type='radio'
                    name="insurable"
                    label="Insurable"
                    value="1"
                    checked={"1" === props.insurable}
                    onChange={(e) => props.setInsurable(e.target.value)}
                    /> 
                    <Form.Check inline
                    type='radio'
                    name="insurable"
                    label="Non Insurable" 
                    value="0"
                    checked={"0" === props.insurable}
                    onChange={(e) => props.setInsurable(e.target.value)}
                    /> 
                </Col>
                <Col md={2}>
                        <Form.Group controlId='no_insurable'>
                        <Form.Label>No. Insurable</Form.Label>
                        <Form.Control
                        type="number"
                        min="1"
                        placeholder={single_data  ? single_data.no_insurable : null}
                        value={props.no_insurable}
                        onChange={(e)=>props.setNoInsurable(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Button className="me-2" variant="secondary" onClick={()=>props.setStep(props.step - 1)}>Back</Button>
            <Button type="submit">SAVE DATA</Button>
            {
                loading ?
                    <>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </>
                    : 
                    data_res?
                    handleSetDataId(data_res.data_id): ""
            }
        </Form>
    )
}

export default Step2
