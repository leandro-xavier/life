import React, { useEffect, useRef, useState } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { startNewProduct, startNewProductNewVersion, startSaveProducts, startUploading } from '../../../actions/product';
import { useForm } from '../../../hooks/useForm';

export const ImaUpload = () => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formValues, handleInputChange] = useForm({

    });

    const {title, description, like, comment, file} = formValues;

   const handleSubmit = async(e) => {
       e.preventDefault()
       console.log(formValues);
        dispatch(startNewProductNewVersion(formValues))
   }

   const handleSubmitImage = (e) => {
    const file = e.target.files[0];

    if(file ){
        dispatch(startUploading(file))
    }
   }
 
    return (
        <>
            <Button variant="success" onClick={handleShow } >Subir Imagen</Button>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sube tu imagen</Modal.Title>
                        </Modal.Header>
                            <Modal.Body>
                            <Form onSubmit={handleSubmit}>

                                <Form.Group className="mb-3" controlId="formFile">
                                    <Form.Label>Imagen</Form.Label>
                                    <Form.Control type="file" placeholder="Enter" name='file' onChange={handleSubmitImage}/>
                                </Form.Group>

                                
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Titulo</Form.Label>
                                    <Form.Control type="text" placeholder="Enter title" name='title' value={title} onChange={handleInputChange}/>
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Descripcion</Form.Label>
                                    <Form.Control type="text" placeholder="Enter title" name='description' value={description} onChange={handleInputChange}/>
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    save
                                </Button>
                            </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                </Modal>
        </>
    );
    
}
