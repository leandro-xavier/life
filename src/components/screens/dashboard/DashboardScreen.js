import React from 'react';
import {useDispatch} from 'react-redux'
import { startLogout } from '../../../actions/auth';

export const DashboardScreen = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <div>
            <h1>contenido de usuario</h1>
            <div>
                <h3><span>nombre</span></h3>
            </div>

            <button className='btn' onClick={handleLogout}>
                logout
            </button>
        </div>
    )
}
