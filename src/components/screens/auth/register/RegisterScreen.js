import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useForm} from '../../../../hooks/useForm';
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../../../actions/auth';
import './register.css';
import Swal from 'sweetalert2';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {msgError} = useSelector(error => error.ui)

   const [formValues, handleSubmit] = useForm({
     name: "",
     email: "",
     password: "",
     password2: ""
   })

   const {name, email, password, password2} = formValues;

   const handleRegister = (e) => {
     e.preventDefault()
    
    if(isFormValid()){
      dispatch(startRegisterWithEmailPasswordName(email, password, name))
    }

   }

   const isFormValid = () => {

    if(name.trim().length === 0){
      dispatch(setError("ingresar nombre"))
      Swal.fire('Error', "Debes ingresar un nombre", "error")
      return false
    }else if(!validator.isEmail(email)){
      dispatch(setError("email incorrecto"))
      Swal.fire('Error', "email incorrecto", "error")
      return false
    }else if(!password === password2 || password.length < 5){
      dispatch(setError("el password debe tener mas de 5 carateres"))
      Swal.fire('Error', "el password debe tener mas de 5 carateres", "error")
      return false
    }
    dispatch(removeError())
      return true
   }

    return (
        <div className='container-1'>
            <Form className="container-2" onSubmit={handleRegister}>
              <h1>Register</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter name" name="name" value={name} onChange={handleSubmit} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleSubmit} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleSubmit} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Repeat Password" name="password2" value={password2} onChange={handleSubmit} />
              </Form.Group>
              <Button variant="secondary" type="submit">
                  Registro
              </Button>
             
                
            </Form>
        </div>
    )
}
