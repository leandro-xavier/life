import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { activeProduct, startDeleting } from '../../../actions/product';
import './listMyProduct.css'

export const ListMyProduct = () => {

    const dispatch = useDispatch()

    const {products} = useSelector(state => state.products)
    

    const handleEntryClick = (e) => {
        e.preventDefault()

        products.map(dato => (
            dispatch(activeProduct(dato.id, dato.title, dato.description))
        )
    )
    }

    const handleDelete = () => {

        products.map(dato => (
            console.log(dato.id)
            //dispatch(startDeleting(dato.id))
        )
        )
    }
 
    return (
        <div className="pointer container-1" onClick={handleEntryClick}>
            {
                products.map(dato => (
                <Card className='card-my' key={dato.id}>
                    <Card.Img className='card-ima' variant="top" src={dato.url} />
                    <Card.Body>
                       <Card.Title>{dato.title}</Card.Title>
                        <Card.Text>{dato.description}</Card.Text>
                        <Button variant='danger' onClick={handleDelete}>Delete</Button>
                    </Card.Body>
            </Card>
                ))
                
            }
            
        </div>
    )
}
