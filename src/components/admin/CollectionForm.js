import React, {useState, useEffect} from 'react';
import { Row, Col, Form, Button ,Spinner} from 'react-bootstrap';
import CollectionList from './CollectionList';
import { useDispatch, useSelector } from 'react-redux';
import {save_collection, get_collection_by_planholder} from '../../actions/collectionActions';
import {get_collectors_list} from '../../actions/collectorActions';



function CollectionForm(props) {

    const dispatch = useDispatch();
    const collectionSave = useSelector(state => state.collectionSave);
    const {loading, error, collection_save} = collectionSave;

    const collectionsList = useSelector(state => state.collectionsList);
    const {loading:tableLoading, error: tableError, collections_list} = collectionsList;

    const collectorsList = useSelector(state => state.collectorsList);
    const {loading: loadingCollectors, error: errorCollectors, collectors_list} = collectorsList;
    
     const [collector_id, setCollectorId] = useState();
     const [amount, setAmount] = useState();
     const [or_number, setOrNumber] = useState();
     const [date_collect, setDateCollect] = useState();
     const [number_of_months_collected, setNumberOfMonthsCollected] = useState();

     const handleAddCollection = (e) => {
         e.preventDefault();
        
         const collection_info = {
            planholder_id:props.profile.id,
            collector_id:collector_id,
            amount:amount,
            or_number:or_number,
            date_collect:date_collect,
            number_of_months_collected:number_of_months_collected
         }

         dispatch(save_collection(collection_info));
     }

     useEffect(() => {
        dispatch(get_collectors_list());
     },[])

     useEffect(() => {
        dispatch(get_collection_by_planholder(props.profile.id));
     }, [collection_save])

    return (
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <Form onSubmit={(e) => handleAddCollection(e)}>
            <Row>
              <Col md={12}>
               <div className='my-3'>
               <Button size="sm" onClick={() => props.setAction('list')}>
                  <i className="fa fa-arrow-left"></i> Back to Planholders
                  List
                </Button>
               </div>
                <p>
                  Name : <b>{props.profile.name}</b>
                </p>
                <p>
                  Contact #: <b>{props.profile.contact}</b>
                </p>
                {console.log(props.profile)}
                <hr />
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Collectors</Form.Label>
                  <Form.Select
                    value={collector_id}
                    onChange={(e) => setCollectorId(e.target.value)}
                  >
                    <option>Select Collector</option>
                    {collectors_list
                      ? collectors_list.map((coll) => (
                          <option value={coll.id}>{coll.name}</option>
                        ))
                      : null}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={8}></Col>
              <Col md={2}>
                <Form.Group controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="or_number">
                  <Form.Label>OR Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={or_number}
                    onChange={(e) => setOrNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="date_collect">
                  <Form.Label>Date Collected</Form.Label>
                  <Form.Control
                    type="date"
                    value={date_collect}
                    onChange={(e) => setDateCollect(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group controlId="number_of_months_collected">
                  <Form.Label>No. of months</Form.Label>
                  <Form.Control
                    type="number"
                    value={number_of_months_collected}
                    onChange={(e) => setNumberOfMonthsCollected(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Label></Form.Label>
                <br />
                <Button type="submit" className="mt-1">
                  Submit
                </Button>
                {loading ? (
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : null}
              </Col>
            </Row>

            <CollectionList
              data={collections_list ? collections_list : []}
              planholder_id={props.profile.id}
            />
          </Form>
        </Col>
        <Col md={2}></Col>
      </Row>
    );
}

export default CollectionForm
