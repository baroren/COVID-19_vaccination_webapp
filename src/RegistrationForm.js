import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        address: '',
        city: '',
        zipCode: '',
        landline: '',
        cellPhone: '',
        infected: false,
        conditions: [],
    });

    const handleInputChange = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (name, checked) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: checked,
        }));
    };

    const handleMultiSelectChange = (name, selectedOptions) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: selectedOptions,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement form submission to backend
        console.log('Form data submitted:', formData);
    };

    return (
        <Card className="p-4">
            <h2 className="mb-4">COVID-19 Vaccination Registration</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="dateOfBirth">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="zipCode">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="landline">
                    <Form.Label>Landline</Form.Label>
                    <Form.Control
                        type="text"
                        name="landline"
                        value={formData.landline}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cellPhone">
                    <Form.Label>Cell Phone</Form.Label>
                    <Form.Control
                        type="text"
                        name="cellPhone"
                        value={formData.cellPhone}
                        onChange={(e) => handleInputChange(e.target.name, e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="infected">
                    <Form.Check
                        label="Infected by COVID-19"
                        name="infected"
                        checked={formData.infected}
                        onChange={(e) => handleCheckboxChange(e.target.name, e.target.checked)}
                    />
                </Form.Group>

                <Form.Group controlId="conditions">
                    <Form.Label>Previous Conditions</Form.Label>
                    <Form.Control
                        as="select"
                        name="conditions"
                        multiple
                        value={formData.conditions}
                        onChange={(e) => {
                            const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
                            handleMultiSelectChange(e.target.name, selectedOptions);
                        }}
                    >
                        <option value="diabetes">Diabetes</option>
                        <option value="cardio">Cardio-Vascular problems</option>
                        <option value="allergies">Allergies</option>
                        {/* Add more options here */}
                    </Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary" className="mt-3">Submit</Button>
            </Form>
        </Card>
    );
};

export default RegistrationForm;
