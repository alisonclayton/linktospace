import React from 'react'
import '../components/Login.css'
import Orbiwhite from '../assets/img/orbicom branco.png'
import Logo2 from '../assets/img/logo layout 2.png'
import LogoNasa from '../assets/img/nasa branco.png'

export default function Login() {
    return(
        <div className='login-container'>

            <div className='div1 login-item'>
                <img 
                className='logo-white'
                src={Orbiwhite} alt="Logo da Orbicom" />

                <p className='orbicom-title'>ORBICOM</p>
            </div>
            
            <div id='input-div'
                className='form-login login-item login-item'>
                <div className='item-form flex-column align-start'>
                    <label htmlFor="user" className='label-style'>User: </label>
                    <input
                        className='input-login'
                        type="text" name='user' id='user'/>
                </div>
                <div className='item-form flex-column align-start'>
                    <label htmlFor="password" className='label-style'>Password: </label>
                    <input 
                        className='input-login'
                        type="password" name='password' id='password'/>
                </div>
            </div>

            <div className='btn-login-cont login-item'>
                <button className='btn-login-item' type="submit">GO MARS</button>
                <button className='btn-login-item' type="submit">Request new password</button>
            </div>
            
            <div id='self-footer' className='self-footer'>
                <div className='item-footer flex-column align-start'>
                    <p>Created by:</p>
                    <img className='logo-footer' src={Logo2} alt="Logo da Orbicom com Nome Lateral"/>
                </div>
                <div className='item-footer flex-column align-start'>
                    <p>Powered by:</p>
                    <img className='logo-footer' src={LogoNasa} alt="Logo Branco da Nasa"/>
                </div>
            </div>

        </div>
    )
}