import React,{useEffect} from 'react'
import TableComponent from '../table/TableComponent';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {get_collectors_list} from '../../actions/collectorActions';

function CollectorList(props) {
   
    const dispatch = useDispatch();
    const collectorsList = useSelector(state => state.collectorsList);
    const {loading, error, collectors_list} = collectorsList;

    useEffect(() => {
        dispatch(get_collectors_list());
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

    return (
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
            <TableComponent data={collectors_list ? collectors_list : []} columns={columns}  />
        </Col>
        <Col md={2}></Col>
      </Row>
    )
}

export default CollectorList
