import React from 'react';
import Button from 'react-bootstrap/Button';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="container">
                <div className="header">
                    <h1>Welcome to Our Vaccination Portal</h1>
                    <p>Get vaccinated and protect yourself and others!</p>
                    <Button variant="primary" size="lg" href="/Register" >Register Now</Button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
