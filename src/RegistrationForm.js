import React, { useState } from 'react';
import FormField from './FormField';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
        <Form onSubmit={handleSubmit} className="my-4">
            <Row>
                <Col md={6}>
                    <FormField
                        label="First Name"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                    <FormField
                        label="Last Name"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                    <FormField
                        label="Date of Birth"
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                    />
                    {/* Add other form fields here */}
                </Col>
                <Col md={6}>
                    <FormField
                        label="Address"
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                    <FormField
                        label="City"
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                    />
                    <FormField
                        label="Zip Code"
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                    />
                    <FormField
                        label="Landline"
                        type="text"
                        name="landline"
                        value={formData.landline}
                        onChange={handleInputChange}
                    />
                    <FormField
                        label="Cell Phone"
                        type="text"
                        name="cellPhone"
                        value={formData.cellPhone}
                        onChange={handleInputChange}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Check
                        label="Infected by COVID-19"
                        name="infected"
                        checked={formData.infected}
                        onChange={(e) => handleCheckboxChange(e.target.name, e.target.checked)}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
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
                </Col>
            </Row>
            <Button type="submit" variant="primary">Submit</Button>
        </Form>
    );
};

export default RegistrationForm;
