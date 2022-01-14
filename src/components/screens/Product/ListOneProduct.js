import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {Card, Button} from 'react-bootstrap';
import { activeProduct, startDeleting, startUpdateProduct } from '../../../actions/product';
import { ImaUpdate } from './ImaUpdate';
import './listoneproduct.css'

export const ListOneProduct = ({id, description, title , url}) => {

    const dispatch = useDispatch()

    const handleEntryClick = (e) => {
        e.preventDefault()
        dispatch(activeProduct(id,{
            title,description
        }))
     
    }
    
    const handleDelete = () => {
         dispatch(startDeleting(id))
 }

    return (
        <div onClick={handleEntryClick} className='container-1'>
               <Card className='card-my' key={id}>
                    <Card.Img className='card-ima' variant="top" src={url} />
                    <Card.Body>
                       <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Button className='boton' variant='danger' onClick={handleDelete}><i className='fas fa-trash'></i></Button>

                        <ImaUpdate
                        id={id}
                        title={title}
                        description={description}
                        url={url}
                        />
                    </Card.Body>
            </Card>
        </div>
    )
}
