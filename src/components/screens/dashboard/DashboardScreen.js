import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { startLogout } from '../../../actions/auth';
import { ImaUpload } from '../Product/ImaUpload';
import { ListMyProduct } from '../Product/ListMyProduct';
import { Figure } from 'react-bootstrap';

export const DashboardScreen = () => {

    const dispatch = useDispatch();
  
    const {name, photoURL} = useSelector(state => state.auth);


    const handleLogout = () => {
        dispatch(startLogout())
    }


    return (
        <div>
            <h1>contenido de usuario</h1>
            <div className='container'>
            <Figure><Figure.Image width={110} height={110} alt="171x180" src={photoURL}/></Figure>
                <h3 className='md-4'>nombre: {name}</h3>
            </div>
            <div>
                <ul>
                    <li><ListMyProduct/></li>
                </ul>
            </div>
            <div>
                <ImaUpload/>
            </div>

            <button className='btn btn-danger' onClick={handleLogout}>
                logout
            </button>
        </div>
    )
}
