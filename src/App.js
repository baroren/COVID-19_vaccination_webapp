import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './AppNavBar';
import RegistrationPage from './RegistrationPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from "./RegistrationForm";
import LandingPage from "./LandingPage";



const App = () => {
    return (
        <Router>
            <AppNavbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route path="/Register" element={<RegistrationForm />} />
                {/* Add more routes for other pages as you build them */}
            </Routes>
        </Router>
    );
};

export default App;
