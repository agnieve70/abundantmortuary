import React, { useState } from 'react';
import Header from '../components/admin/Header';
import TableComponent from "../components/table/TableComponent";
import { Row, Col, Button, Form, Container, FormGroup, Table } from "react-bootstrap";
import moment from "moment";

import jsPDF from "jspdf";
import "jspdf-autotable";

import { useDispatch, useSelector } from "react-redux";
import { get_collectors_list } from "../actions/reportActions";

const date = new Date(Date.now());
date.setDate(date.getDate());
const currentDate = moment(date).format("YYYY-MM-DD");
const doc = new jsPDF();

function ReportScreen() {

    const [dateFrom, setDateFrom] = useState();
    const [dateTo, setDateTo] = useState();

    const dispatch = useDispatch();
    const reportsFiltered = useSelector((state) => state.reportsFiltered);
    const { loading, error, reports_filtered } = reportsFiltered;

    const columns = React.useMemo(() => [
      {
        Header: "Info",
        columns: [
          {
            Header: "OR Number",
            accessor: "or_number",
            filter: "fuzzyText",
          },
          {
            Header: "Planholder",
            accessor: "planholder",
            filter: "fuzzyText",
          },
          {
            Header: "Amount",
            accessor: "amount",
            filter: "fuzzyText",
          },
          {
            Header: "No. of Months Collected",
            accessor: "no_of_months_collected",
            filter: "fuzzyText",
          },
          {
            Header: "Date Collected",
            accessor: "date_collected",
            filter: "fuzzyText",
          },
          {
            Header: "Collector",
            accessor: "collector",
            filter: "fuzzyText",
          },
        ],
      },
    ]);

    const handleGenerateReport = () => {
        const dates = {
          from: dateFrom,
          to: dateTo,
        };
        dispatch(get_collectors_list(dates));
    };

    const handleDownloadReport = () => {
        doc.autoTable({
          body: reports_filtered ? reports_filtered.length > -1 ? reports_filtered : [] : [],
          columns: [
            { header: "OR Number", dataKey: "or_number" },
            { header: "Planholder", dataKey: "planholder" },
            { header: "Amount", dataKey: "amount" },
            { header: "No. of Months Collected", dataKey: "number_of_months_collected" },
            { header: "Date Collect", dataKey: "date_collect" },
            { header: "Collector", dataKey: "collector" },
          ],
        });

        doc.save(dateFrom+"-"+dateTo+".pdf");
    }

    return (
      <>
        <Header />
        <Container>
          <h5
            style={{ marginBottom: 30 }}
            className="text-center text-info fs-3"
            id="trackTitle"
          >
            PRINT REPORTS
          </h5>
          <div>
            <Row className="mb-4">
              <Col md={4}>
                <Form.Group controlId="dateFrom">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    max={currentDate}
                    onChange={(e) => setDateFrom(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="dateTo">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    max={currentDate}
                    onChange={(e) => setDateTo(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Button
                  style={{ marginTop: "2.0rem" }}
                  onClick={() => handleGenerateReport()}
                >
                  Generate Report
                </Button>

                <Button
                  className="ms-2"
                  style={{ marginTop: "2.0rem" }}
                  onClick={() => handleDownloadReport()}
                  variant="danger"
                >
                  Download
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <TableComponent
                  data={reports_filtered ? reports_filtered : []}
                  columns={columns}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </>
    );
}

export default ReportScreen
