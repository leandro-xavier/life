import React, { useState } from 'react';
import { Button, Modal, Form, } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startUpdateProduct } from '../../../actions/product';
import { useForm } from '../../../hooks/useForm';

export const ImaUpdate = () => {
    const dispatch = useDispatch()
    const {active} = useSelector(state => state.products)
    const [show, setShow] = useState(false);
  //  const {id, title, url, description} = active

   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
/*
const initialState = {
    title: active.title,
    description: active.description,
    url: active.url
}
*/
//console.log(initialState);
   const [formImaValues, handleInputUpdate] = useForm({});

    const {title, description, like, comment, file} = formImaValues;


    const handleUpdate = (e) => {
        e.preventDefault()
        console.log(title, description)
     //   dispatch(startUpdateProduct(formValues))
}


    return (

    <>
       <Button variant="success" onClick={handleShow }><i className="fas fa-upload data"></i></Button>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sube tu imagen</Modal.Title>
                        </Modal.Header>
                            <Modal.Body>
                            <Form onSubmit={handleUpdate}>

                                <Form.Group className="mb-3" controlId="formFile">
                                    <Form.Label>Imagen</Form.Label>
                                    <Form.Control type="file" placeholder="Enter" name='file' onChange={handleInputUpdate}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEm">
                                    <Form.Label>Titulo</Form.Label>
                                    <Form.Control type="text" placeholder={active.title} name='title' value={title} onChange={handleInputUpdate} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Descripcion</Form.Label>
                                    <Form.Control type="text" placeholder="Enter title" name='description' value={description} onChange={handleInputUpdate}/>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    update
                                </Button>
                    
                            </Form>
                            </Modal.Body>
                </Modal>
    </>
  );
}
