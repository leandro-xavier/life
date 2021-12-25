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
                <h3><span>Foto de perfil</span></h3>
                <h3><span>nombre y apellido</span></h3>
            </div>
            <div>
                <ul>
                    <li>imagen uno</li>
                    <li>imagen dos</li>
                    <li>imagen tres</li>
                </ul>
            </div>

            <button className='btn' onClick={handleLogout}>
                logout
            </button>
        </div>
    )
}
