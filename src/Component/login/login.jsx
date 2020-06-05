import React from 'react'
import { Redirect, Link } from 'react-router-dom'

import './login.css'
import cat from '../../Img/Cat_Splash.svg'

function Login() {

    return (
        <div className="container_login">
            <div className='header'>
                <img src={cat} alt="Catinder" />
                <span>Catinder</span>
            </div>
            <div className="container_body">
                <h2>Seja bem Vindo!</h2>
                <input type="text" placeholder='Login' />
                <input type="text" placeholder='Senha' />
                <Link className='link btnAzul' to='/dashboard'>Entrar</Link>
                <span className='s_esqueciSenha'>Esqueci minha senha!</span>
                <div className='div_sePreferir'>
                    <div className='div_hr' />
                    <span>OU SE PREFERIR</span>
                    <div className='div_hr' />
                </div>
                <button className='btnAzul'>Entra com o Facebook</button>
                <button className='btnGoogle'>Entrar com o Google+</button>
            </div>
        </div >
    )
}

export default Login