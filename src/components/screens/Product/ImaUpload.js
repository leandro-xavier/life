import React, {  useState } from 'react';
import { Modal, Button, Form} from 'react-bootstrap';
import { useDispatch} from 'react-redux';
import { startNewProductNewVersion, startUploading } from '../../../actions/product';
import { useForm } from '../../../hooks/useForm';
import './imaUpload.css'

export const ImaUpload = () => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formValues, handleInputChange] = useForm({});

    const {title, description } = formValues;

   const handleSubmit = async(e) => {
       e.preventDefault()
        dispatch(startNewProductNewVersion(formValues))
   }

   const handleSubmitImage = (e) => {
    e.preventDefault()
    const file = e.target.files[0];

    if(file ){
        dispatch(startUploading(file))
    }else{
        console.log('error')
    }
   }
 
    return (
        <>
        
            <Button className='boton' variant="success" onClick={handleShow }><i className="fas fa-upload data"></i></Button>
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
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Descripcion</Form.Label>
                                    <Form.Control type="text" placeholder="Enter description" name='description' value={description} onChange={handleInputChange}/>
                            
                                </Form.Group>

                                <Button variant="secondary" type="submit">
                                    save
                                </Button>
                    
                            </Form>
                            </Modal.Body>
                </Modal>
        </>
    );
    
}
