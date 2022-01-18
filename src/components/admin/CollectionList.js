import React,{useEffect} from 'react'
import TableComponent from '../table/TableComponent';
import { Container, Row, Col } from 'react-bootstrap';

function CollectionList(props) {
   
    const columns = React.useMemo(
    () => [
      {
        Header: 'Collection Info',
        columns: [
          {
            Header: 'OR Number',
            accessor: 'or_number',
            canFilter: false,
          },
          {
            Header: 'Ammount',
            accessor: 'amount',
          },
          {
            Header: 'Date Collected',
            accessor: 'date_collect',
          },
          {
            Header: 'No. of Months Collected',
            accessor: 'number_of_months_collected',
          },
          {
            Header: 'Collector',
            accessor: 'collector',
          },
        ],
      },
      
    ],
  );

    return (
        <Row>
          <Col md={12}>
            <TableComponent data={props.data} columns={columns}  />
          </Col>
        </Row>
    )
}

export default CollectionList
