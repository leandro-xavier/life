import React from 'react';
import {Link} from 'react-router-dom'
import {Form, Button, Nav} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleLogin, startLoginEmailPassword } from '../../../../actions/auth';
import { useForm } from '../../../../hooks/useForm';
import './login.css'

export const LoginScreen = () => {

  const dispatch = useDispatch()

  const {loading} = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
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
        <div className='container-1'>
            <Form onSubmit={handleLogin} className="container-2">
            <h1>Login</h1>
              <Form.Group className="mb-3 group" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group className="mb-3 group" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange}/>
              </Form.Group>
              <Form.Group>
                <Button className='boton-login' variant="secondary" type="submit" disabled={loading}>Login</Button>
                  <Form.Label className="Label">Or</Form.Label>
                <Button className='boton-login' variant="danger" onClick={handleGoogleLogin}> Continua con  <i className="fab fa-google-plus-g"></i></Button>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label className="Label">aun no tienes cuenta? <Nav.Link as={Link} to="/auth/register">Registrate</Nav.Link> </Form.Label>
              </Form.Group>
            </Form>
        </div>
    )
}
