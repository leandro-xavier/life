import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useForm} from '../../../../hooks/useForm';
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../../../actions/auth';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {msgError} = useSelector(error => error.ui)

   const [formValues, handleSubmit] = useForm({
     name: "Leandro",
     email: "leandro@gmail.com",
     password: "123456",
     password2: "123456"
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
      return false
    }else if(!validator.isEmail(email)){
      dispatch(setError("email incorrecto"))
      return false
    }else if(!password === password2 || password.length < 5){
      dispatch(setError("el password debe tener mas de 5 carateres"))
      return false
    }
    dispatch(removeError())
      return true
   }

    return (
        <div>
            <h1>formulario de Registro de usuario</h1>
            <Form onSubmit={handleRegister}>
             {
               msgError &&
                <div className="alert">
                      {msgError}
                </div>
               }
              
             
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" name="name" value={name} onChange={handleSubmit} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleSubmit} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleSubmit} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password2</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password2" value={password2} onChange={handleSubmit} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Form>
        </div>
    )
}
