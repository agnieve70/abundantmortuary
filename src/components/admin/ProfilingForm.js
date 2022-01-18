import React, {useState, useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import Step1 from './ProfilingForms/Step1';
import Step2 from './ProfilingForms/Step2';
import Step3 from './ProfilingForms/Step3';
import { useDispatch, useSelector } from 'react-redux';
import {agent_names_list} from '../../actions/agentActions';

function ProfilingForm(props) {

    const dispatch = useDispatch();
    const agentNames = useSelector(state => state.agentNames);
    const {loading, error, agent_names} = agentNames;

    const [step, setStep] = useState(1);
    
    // step 1 data
    const [planholder_id, setPlanholderId] = useState("");
    const [pf_no, setPf_no] = useState();
    const [agent_id, setAgent_id] = useState();
    const [lastName, setLastName] = useState();
    const [firstName, setFirstName] = useState();
    const [middleName, setMiddleName] = useState();
    const [profile_name, setProfileName] = useState();
    const [region, setRegion] = useState();
    const [province, setProvince] = useState();
    const [city, setCity] = useState();
    const [barangay, setBarangay] = useState();
    const [lotBlock, setLotBlock] = useState();
    const [street, setStreet] = useState();
    const [dob, setDob] = useState();
    const [religion, setReligion] = useState();
    const [civilStatus, setCivilStatus] = useState();
    const [sex, setSex] = useState();
    const [contact, setContact] = useState();

    // step 2 data
    const [data_id, setDataId] = useState("");
    const [totalContractPrice, setTotalContractPrice] = useState();
    const [installmentDue, setInstallmentDue] = useState();
    const [effectiveDate, setEffectiveDate] = useState();
    const [modeOfPremium, setModeOfPremium] = useState();
    const [terms, setTerms] = useState();
    const [insurable, setInsurable] = useState();
    const [no_insurable, setNoInsurable] = useState();

    // step 3 data
    const [beneficiary_id, setBeneficiaryId] = useState();
    const [name, setName] = useState();
    const [beneficiary_dob, setBeneficiarydob] = useState();
    const [address, setAddress] = useState();
    const [relationship, setRelationship] = useState();

    useEffect(() => {
        
        if(props.profile){

            setPlanholderId(props.profile.id);
            setPf_no(props.profile.pf_no);
            setAgent_id(props.profile.agent_id);
            setBarangay(props.profile.barangay);
            setCivilStatus(props.profile.civil_status);
            setContact(props.profile.contact);
            setDob(props.profile.dob);
            setSex(props.profile.gender);
            setLotBlock(props.profile.lot_block);
            setCity(props.profile.municipality);
            setProfileName(props.profile.name);
            setProvince(props.profile.province);
            setRegion(props.profile.region);
            setReligion(props.profile.religion);
            setStreet(props.profile.street);
        }

        dispatch(agent_names_list());
    }, []);

    return (
        <Row>
            <Col md={2}></Col>
            <Col md={8}>
                {
                    step === 1 ?
                    <Step1
                        planholder_id = { props.profile ? props.profile.id : planholder_id }
                        setPlanholderId = {setPlanholderId}
                        agent_names={agent_names}
                        action={props.action} setAction={props.setAction}
                        step={ step } 
                        setStep = { setStep }
                        pf_no={pf_no} setPf_no={setPf_no}
                        agent_id={agent_id} setAgent_id={setAgent_id}
                        profile_name={profile_name} setProfileName={setProfileName}
                        lastName={lastName} setLastName={setLastName}
                        firstName={firstName} setFirstName={setFirstName}
                        middleName={middleName} setMiddleName={setMiddleName}
                        region={region} setRegion={setRegion}
                        province={province} setProvince={setProvince}
                        city={city} setCity={setCity}
                        barangay={barangay} setBarangay={setBarangay}
                        lotBlock={lotBlock} setLotBlock={setLotBlock}
                        street={street} setStreet={setStreet}
                        dob={dob} setDob={setDob}
                        religion={religion} setReligion={setReligion}
                        civilStatus={civilStatus} setCivilStatus={setCivilStatus}
                        sex={sex} setSex={setSex}
                        contact={contact}  setContact={setContact}
                    />
                    :
                    step === 2 ?
                   
                    <Step2 
                        step={ step } 
                        setStep = { setStep }
                        data_id ={data_id} setDataId={setDataId}
                        planholder_id = { props.profile ? props.profile.id : planholder_id }
                        totalContractPrice={totalContractPrice} setTotalContractPrice={setTotalContractPrice}
                        installmentDue={installmentDue} setInstallmentDue={setInstallmentDue}
                        effectiveDate={effectiveDate} setEffectiveDate={setEffectiveDate}
                        modeOfPremium={modeOfPremium} setModeOfPremium={setModeOfPremium}
                        terms={terms} setTerms={setTerms}
                        insurable={insurable} setInsurable={setInsurable}
                        no_insurable={no_insurable} setNoInsurable={setNoInsurable}
                    />
                    :
                    step === 3 ?
                    <Step3
                        beneficiary_id={beneficiary_id}
                        setBeneficiaryId={setBeneficiaryId}
                        step={ step } 
                        setStep = { setStep }
                        planholder_id = { props.profile ? props.profile.id : planholder_id }
                        name={name} setName={setName}
                        beneficiary_dob={beneficiary_dob} setBeneficiarydob={setBeneficiarydob}
                        address={address} setAddress={setAddress}
                        relationship={relationship} setRelationship={setRelationship}
                    />
                    : (props.setAction("list"))
                }
            </Col>
            <Col md={2}></Col>
        </Row>
    )
}

export default ProfilingForm
