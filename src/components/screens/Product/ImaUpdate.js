import React, { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Button, Modal, Form, } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { activeProduct, startUpdateProduct } from '../../../actions/product';
import { useForm } from '../../../hooks/useForm';
import './imaupdate.css'

export const ImaUpdate = () => {
    const dispatch = useDispatch()
    const {active} = useSelector(state => state.products)
    const [show, setShow] = useState(false);
  //  const {id, title, url, description} = active

   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

   const [formImaValues, handleInputUpdate, reset] = useForm(active);

    const {title, description} = formImaValues;

    const activeId = useRef(active.id)

    const handleUpdate = (e) => {
        e.preventDefault()
        console.log(title, description)
    // dispatch(startUpdateProduct(formImaValues))
}

useEffect(() => {
  if(active.id !== activeId.current){
      reset(active);
      activeId.current = active.id
  }
}, [active, reset])

useEffect(() => {
    dispatch(activeProduct(formImaValues.id, {...formImaValues}))
}, [formImaValues, dispatch,])

useEffect(() => {
 handleSave()
}, []);

const handleSave = () => {
    dispatch(startUpdateProduct(active))
}
    return (

    <>
       <Button className="boton" variant="success" onClick={handleShow }><i className="fas fa-edit"></i></Button>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Actualizar</Modal.Title>
                        </Modal.Header>
                            <Modal.Body>
                            <Form onSubmit={handleUpdate}>

                                <Form.Group className="mb-3" controlId="formFile">
                                    <Form.Label>Imagen</Form.Label>
                                 {/*<Form.Control type="file" placeholder="Enter" name='file' value={url} onChange={handleInputUpdate}/> */}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEm">
                                    <Form.Label>Nuevo Titulo</Form.Label>
                                    <Form.Control type="text" placeholder={active.title} name='title' value={title} onChange={handleInputUpdate} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Nueva Descripcion</Form.Label>
                                    <Form.Control type="text" placeholder="Enter title" name='description' value={description} onChange={handleInputUpdate}/>
                                </Form.Group>
                    
                                <Button variant="success" onClick={handleSave}>
                                    Guardar
                                </Button>
                            </Form>
                            </Modal.Body>
                </Modal>
    </>
  );
}
