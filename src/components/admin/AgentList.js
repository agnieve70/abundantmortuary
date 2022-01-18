import React,{useEffect} from 'react'
import TableComponent from '../table/TableComponent';
import { Container, Row, Col, Button } from 'react-bootstrap';
import makeData from '../table/makeData'
import { useDispatch, useSelector } from 'react-redux';
import {agent_names_list} from '../../actions/agentActions';



function AgentList() {
   
    const dispatch = useDispatch();
    const agentNames = useSelector(state => state.agentNames);
    const {loading, error, agent_names} = agentNames;

  useEffect(() => {
        dispatch(agent_names_list());
    }, [])

    const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Email',
            accessor: 'email',
            filter: 'fuzzyText',
          },

        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Contact',
            accessor: 'contact',
            filter: 'fuzzyText',
          },
        ],
      },
    ],
  );

  const handleAddAgent = () => {
    
  }

    return (
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
            <TableComponent data={agent_names ? agent_names : []} columns={columns}  />
        </Col>
        <Col md={2}></Col>
      </Row>
    )
}

export default AgentList
