import React,{useState} from 'react';
import {Button, Offcanvas} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import { startLogout } from '../../../actions/auth';
import { ImaUpload } from '../Product/ImaUpload';
import { ListMyProduct } from '../Product/ListMyProduct';
import { Figure } from 'react-bootstrap';
import './dashboard.css'

export const DashboardScreen = () => {

    const dispatch = useDispatch();
  
    const {name, photoURL} = useSelector(state => state.auth);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogout = () => {
        dispatch(startLogout())
    }


    return (
        <div className='container'>
            <h1 className='h1'>Profile</h1>
            <Button variant="dark" onClick={handleShow}>
            <i className="fas fa-chevron-circle-down icon"></i>
            </Button>
            <div className='container-1'>
            <Figure><Figure.Image  className='figure' width={150} height={150} alt="171x180" src={photoURL}/></Figure>
            </div>
            <h3 className='md-4 h3'>{name}</h3>
            <div>
                <ListMyProduct/>     
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Button variant="danger" onClick={handleLogout}>
                     logout
                    </Button>
                    <div>
                        <ImaUpload/>
                </div>
                    </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
