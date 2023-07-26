import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import {CSVLink} from "react-csv";

const SummaryPage = () => {
    const registrations = [
        // Sample registration data (replace this with actual data from the backend)
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            dateOfBirth: '1990-05-15',
            address: '123 Main Street',
            city: 'New York',
            zipCode: '10001',
            landline: '123-456-7890',
            cellPhone: '987-654-3210',
            infected: false,
            conditions: ['Diabetes', 'Allergies'],
        },
        // Add more registration objects here...
    ];
/*
useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        // Replace 'YOUR_BACKEND_URL' with the actual API endpoint URL to fetch registration data
        const response = await axios.get('YOUR_BACKEND_URL');
        setRegistrations(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The
 */
    const csvData = registrations.map((registration) => ({
        '#': registration.id,
        'First Name': registration.firstName,
        'Last Name': registration.lastName,
        'Date of Birth': registration.dateOfBirth,
        Address: registration.address,
        City: registration.city,
        'Zip Code': registration.zipCode,
        Landline: registration.landline,
        'Cell Phone': registration.cellPhone,
        Infected: registration.infected ? 'Yes' : 'No',
        Conditions: registration.conditions.join(', '),
    }));

    // Function to handle search filtering (not implemented in this example)
    const handleSearch = () => {
        // Implement search filtering logic here...
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Summary Page</h2>

            {/* Search Grid */}
            <Form className="mb-4">
                <div className="row g-3">
                    <div className="col-md-3">
                        <Form.Label className="form-label">Date of Birth</Form.Label>
                        <Form.Control type="date" name="dateOfBirth" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <Form.Label className="form-label">City</Form.Label>
                        <Form.Control type="text" name="city" placeholder="Enter city" className="form-control" />
                    </div>
                    <div className="col-md-3 d-flex align-items-end">
                        <button type="button" className="btn btn-primary" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
            </Form>

            {/* Registration Table */}
            <Table responsive striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Zip Code</th>
                    <th>Landline</th>
                    <th>Cell Phone</th>
                    <th>Infected</th>
                    <th>Conditions</th>
                </tr>
                </thead>
                <tbody>
                {registrations.map((registration) => (
                    <tr key={registration.id}>
                        <td>{registration.id}</td>
                        <td>{registration.firstName}</td>
                        <td>{registration.lastName}</td>
                        <td>{registration.dateOfBirth}</td>
                        <td>{registration.address}</td>
                        <td>{registration.city}</td>
                        <td>{registration.zipCode}</td>
                        <td>{registration.landline}</td>
                        <td>{registration.cellPhone}</td>
                        <td>{registration.infected ? 'Yes' : 'No'}</td>
                        <td>{registration.conditions.join(', ')}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <div className="d-flex justify-content-end mb-4">
                <CSVLink data={csvData} filename="summary_data.csv">
                    <Button variant="primary">Export to Excel</Button>
                </CSVLink>
            </div>
        </div>
    );
};

export default SummaryPage;
