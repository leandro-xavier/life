import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {Card, Button} from 'react-bootstrap';
import { activeProduct, startDeleting, startUpdateProduct } from '../../../actions/product';
import { ImaUpdate } from './ImaUpdate';

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
        <div onClick={handleEntryClick}>
               <Card className='card-my' key={id}>
                    <Card.Img className='card-ima' variant="top" src={url} />
                    <Card.Body>
                       <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Button variant='danger' onClick={handleDelete}>Delete</Button>

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
