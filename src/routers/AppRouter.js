import React, { useEffect, useState } from 'react';
import { getAuth} from 'firebase/auth';
import { BrowserRouter as Router,
    Switch,
    Redirect} from 'react-router-dom';
import { Navigation } from '../components/components/Navigation/Navigation';
import { DashboardScreen } from '../components/screens/dashboard/DashboardScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { AllPicture } from '../components/screens/allPicture/AllPicture';
import { PublicRoute } from './PublicRoute';
import { LoginScreen } from '../components/screens/auth/login/LoginScreen';
import { RegisterScreen } from '../components/screens/auth/register/RegisterScreen';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingProducts } from '../actions/product';

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
                dispatch(startLoadingProducts(user.uid))
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
            <Router>
                <div>
          <Navigation isAuthenticated={isLoggedIn}/>
                <Switch>
                    <PublicRoute path="/auth/login" isAuthenticated={isLoggedIn} component={LoginScreen}/>
                    <PublicRoute path="/auth/register" isAuthenticated={isLoggedIn} component={RegisterScreen}/>
                    
                    <PrivateRoute exact isAuthenticated={isLoggedIn} path="/dashboard" component={DashboardScreen}/>
                    <PrivateRoute exact isAuthenticated={isLoggedIn} path="/" component={AllPicture} />

                    <Redirect to="/auth/login"/>
                </Switch>
                </div>
            </Router>
        
    )
}
