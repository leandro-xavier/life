import React from 'react';
import {Card, Button, Form, FormControl} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './allpicture.css'

export const AllPicture = () => {
    
    const {products} = useSelector(state => state.products)

    return (
        <div>
            <div className='header'>
                <h1 className='h1'>LIFE</h1>
            </div>
            <div className='buscador'>
                <Form className="d-flex form">
                <Button variant="outline-danger boton">Search</Button>
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                </Form>
            </div>

            <div className='cards'>
                {
                products.map(dato => (
                <Card className='card'>
                    <Card.Title className="titulo">{dato.title}</Card.Title>
                    <Card.Body>
                    <Card.Img variant="top" src={dato.url} />
                    
                        <Card.Text>{dato.description}</Card.Text>
                        <Button className='boton-dos' variant="secondary">imagen</Button>
                    </Card.Body>
                </Card>
                ))
                
                }
            </div>
            
        </div>
    )
}
