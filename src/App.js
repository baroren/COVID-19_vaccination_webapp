import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './AppNavBar';
import RegistrationPage from './RegistrationPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from "./RegistrationForm";
import LandingPage from "./LandingPage";
import SummaryPage from "./SummaryPage";



const App = () => {
    return (
        <Router>
            <AppNavbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route path="/Register" element={<RegistrationForm />} />
                <Route path="/Summary" element={<SummaryPage />} />

            </Routes>
        </Router>
    );
};

export default App;
