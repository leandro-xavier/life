import React from 'react'

export const RegisterScreen = () => {
    return (
        <div>
            <div>
                <h1>Register</h1>
                <form >
                    <input type="text" placeholder="name" />
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="contraseña" />
                    <input type="submit" placeholder="enviar"/>
                </form>
            </div>
        </div>
    )
}
