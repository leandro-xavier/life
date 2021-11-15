import React from 'react'
import {useForm} from '../../../hooks/useForm';

export const LoginScreen = () => {

    const [formValues, handleInputChange] = useForm({
        email: 'leaxavier2014@gmail.com',
        password: '12345'
    })

    const {email, password} = formValues

    return (
        <div>
            <div>
                <h1>Login</h1>
                <form >
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="contraseña" />
                    <input type="submit" placeholder="enviar"/>
                </form>
            </div>
        </div>
    )
}
