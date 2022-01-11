import React, { useEffect, useRef, useState } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { startNewProduct, startSaveProducts, startUploading } from '../../../actions/product';
import { useForm } from '../../../hooks/useForm';

export const ImaUpload = () => {
    const dispatch = useDispatch()

    const [formValues, handleInputChange] = useForm({

    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const {title, description, like, comment} = formValues;

    //const activeId = useRef(product.id);

 /*   useEffect(() => {
        if(product.id !== activeId.current){
            reset(product);
            activeId.current = product.id
        }
    }, [product, reset]);
*/
   
/*useEffect(() => {
       dispatch(activeProduct(formValues.id, {...formValues}))
    }, [formValues, dispatch]);
*/

   /* const handleSubmitForm =  (e) => {
        e.preventDefault()
       // dispatch(activeProduct(formValues.id, {...formValues}))
       dispatch(startNewProduct(title, description ))
       console.log(title, description);
    }
    */
   const saveadd = () => {
       dispatch(startNewProduct())
   }

    return (
        <>
            <Button variant="success" onClick={handleShow } >Subir Imagen</Button>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sube tu imagen</Modal.Title>
                        </Modal.Header>
                            <Modal.Body>
                            <Form >
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
                                <InputGroup variant="primary" type="submit" onClick={saveadd}>
                                    prueba
                                </InputGroup>
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
