import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
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
import { startLoadingAllProducts, startLoadingProducts } from '../actions/product';
import { Chat } from '../components/screens/chat/Chat';


export const AppRouter = () => {

    const dispatch = useDispatch()

   const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth()

        auth.onAuthStateChanged((user) => {
            if(user?.uid){
                dispatch(login(user.uid, user.displayName,user.photoURL))
                setIsLoggedIn(true)
                dispatch(startLoadingProducts(user.uid))
                dispatch(startLoadingAllProducts())
            }else{
                setIsLoggedIn(false)
            }

            setChecking(false)
        })
    }, [dispatch, setChecking, setIsLoggedIn])

    if(checking){
        return (
            <Spinner size="md" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
            <Router basename={process.env.PUBLIC_URL}>
                <div>
          <Navigation isAuthenticated={isLoggedIn}/>
                <Switch>
                    <PublicRoute path="/auth/login" isAuthenticated={isLoggedIn} component={LoginScreen}/>
                    <PublicRoute path="/auth/register" isAuthenticated={isLoggedIn} component={RegisterScreen}/>
                    
                    <PrivateRoute exact isAuthenticated={isLoggedIn} path="/dashboard" component={DashboardScreen}/>
                    <PrivateRoute exact isAuthenticated={isLoggedIn} path="/" component={AllPicture} />
                    <PrivateRoute exact isAuthenticated={isLoggedIn} path="/chat" component={Chat} />

                    <Redirect to="/auth/login"/>
                </Switch>
                </div>
            </Router>
        
    )
}
