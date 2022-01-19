import React, {useState, useEffect} from 'react'
import TableComponent from '../table/TableComponent';
import NumberRangeColumnFilter from '../table/NumberRangeColumnFilter';
import { Row, Col, Button, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {planholder_list} from '../../actions/planholderActions';
import { LinkContainer } from 'react-router-bootstrap';

function ProfilingList(props) {
   
    const dispatch = useDispatch();
    const [rowData, setRowData] = useState();
    const planholderList = useSelector(state => state.planholderList);
    const {loading, error, planholders} = planholderList;


    useEffect(() => {
        dispatch(planholder_list());
    }, [])

    const columns = React.useMemo(
    () => [
      {
        Header: 'Personal',
        columns: [
          {
            Header: 'Pf No.',
            accessor: 'pf_no',
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Civil Status',
            accessor: 'civil_status',
            filter: 'fuzzyText',
          },

        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Gender',
            accessor: 'gender',
            filter: 'equals',
          },
          {
            Header: 'Birthdate',
            accessor: 'dob',
          },
          {
            // Make an expander cell
            Header: () => null, // No header
            id: 'expander', // It needs an ID
            Cell: ({ row }) => (
              
             props.useFor === "planholder"?
              <Button size={"sm"} onClick={()=>{
                handleAddPlanHolder(row) ;
              }}><i className="fa fa-edit"></i></Button>
             :
              <Button size={"sm"} onClick={()=>{
                handleAddCollection(row) ;
              }}><i className="fa fa-arrow-right"></i></Button>
            ),
          },
        ],
      },
    ],
  );

  const handleAddCollection = (profile) => {
    props.setProfile(profile ? profile.original : null);
    props.setAction('form');
  }
  const handleAddPlanHolder = (profile) => {
    props.setProfile(profile ? profile.original : null);
    props.setAction('form');
  }

    return (
        <Row>
            <Col md={2}></Col>
            <Col md={8}>
              {
                loading ?
                  <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                  </Spinner>
                :
                error ?
                  <Alert variant={'danger'}>
                        {error} back to <LinkContainer to='/'>Login</LinkContainer>
                    </Alert>
                :
                <>
                  {
                    props.useFor === "planholder" ?
                    <Button onClick={()=>handleAddPlanHolder()}>Add Planholder</Button>:null
                  }
                  <TableComponent data={planholders ? planholders : []} columns={columns}  />
                </>
              }
            </Col>
            <Col md={2}></Col>
        </Row>
    )
}

export default ProfilingList
