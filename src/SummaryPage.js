import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SummaryPage = ({ registrationData }) => {
    const [searchDOB, setSearchDOB] = useState('');
    const [searchCity, setSearchCity] = useState('');

    const handleSearchDOB = (e) => {
        setSearchDOB(e.target.value);
    };

    const handleSearchCity = (e) => {
        setSearchCity(e.target.value);
    };

    const filteredData = registrationData.filter((item) => {
        const dobMatch = searchDOB ? item.dateOfBirth === searchDOB : true;
        const cityMatch = searchCity ? item.city.toLowerCase().includes(searchCity.toLowerCase()) : true;
        return dobMatch && cityMatch;
    });

    return (
        <Card className="p-4">
            <h2 className="mb-4">Summary of Registrations</h2>
            <Row className="mb-3">
                <Col>
                    <Form.Control type="date" value={searchDOB} onChange={handleSearchDOB} />
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="Search by City" value={searchCity} onChange={handleSearchCity} />
                </Col>
            </Row>
            <Table responsive striped bordered hover>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Zip Code</th>
                    <th>Landline</th>
                    <th>Cell Phone</th>
                    <th>Infected by COVID-19</th>
                    <th>Previous Conditions</th>
                </tr>
                </thead>
                <tbody>
                {filteredData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.dateOfBirth}</td>
                        <td>{item.address}</td>
                        <td>{item.city}</td>
                        <td>{item.zipCode}</td>
                        <td>{item.landline}</td>
                        <td>{item.cellPhone}</td>
                        <td>{item.infected ? 'Yes' : 'No'}</td>
                        <td>{item.conditions.join(', ')}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Card>
    );
};

export default SummaryPage;
