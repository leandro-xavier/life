import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import { Navigation } from '../components/components/Navigation/Navigation';
import { LoginScreen } from '../components/screens/auth/login/LoginScreen';
import { RegisterScreen } from '../components/screens/auth/register/RegisterScreen';
import { DashboardScreen } from '../components/screens/dashboard/DashboardScreen';

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Navigation/>
                <Routes>
                    <Route exact path="/auth/login" element={<LoginScreen/>} />
                    <Route exact path="/auth/register" element={<RegisterScreen/>}/>

                    <Route exact path="/" element={<DashboardScreen/>}/>
                    <Route path="/" />
                </Routes>
                    
            </Router>
        </div>
    )
}
