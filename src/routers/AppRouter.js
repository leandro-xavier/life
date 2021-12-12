import React, { useEffect, useState } from 'react';
import { getAuth} from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import { Navigation } from '../components/components/Navigation/Navigation';
import { LoginScreen } from '../components/screens/auth/login/LoginScreen';
import { RegisterScreen } from '../components/screens/auth/register/RegisterScreen';
import { DashboardScreen } from '../components/screens/dashboard/DashboardScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch()

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth()

        auth.onAuthStateChanged((user) => {
            if(user?.uid){
                dispatch(login(user.uid, user.displayName))
                setIsLoggedIn(true)
            }else{
                setIsLoggedIn(false)
            }

            setChecking(false)
        })
    }, [dispatch, setChecking, setIsLoggedIn])

    if(checking){
        return (
            <h1>Espere...</h1>
        )
    }

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