import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom'


export const PublicRoute = ({
    isAuthenticated, 
    component: Component,
    ...rest 
    } ) => {

    
    return (
        <Route {...rest} component={props => (
            (isAuthenticated)
             ? (<Redirect to="life/dashboard"/>)
             : (<Component {...props} />)
        ) }
        />    
    )
}


PublicRoute.protoTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired

}
