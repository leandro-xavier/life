import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const AllPicture = () => {

    const {products} = useSelector(state => state.products)

    return (
        <div>
            {
                products.map(dato => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{dato.title}</Card.Title>
                        <Card.Text>{dato.description}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
            </Card>
                ))
                
            }
            
        </div>
    )
}
