import React from 'react';
import {Card, Button} from 'react-bootstrap';

export const ListMyProduct = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>my product</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
            </Card>
        </div>
    )
}
