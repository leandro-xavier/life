import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { startGoogleLogin, startLoginEmailPassword } from '../../../../actions/auth';
import { useForm } from '../../../../hooks/useForm';

export const LoginScreen = () => {

  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    email: 'leandro@gmail.com',
    password: '123456'
  })

const {email, password} = formValues;

const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password))
}

const handleGoogleLogin = () => {
  dispatch(startGoogleLogin())
}

    return (
        <div>
            <h1>Formulario de Login</h1>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>

                <Button variant="danger" onClick={handleGoogleLogin}>GOOGLE SESION</Button>
            </Form>
        </div>
    )
}
