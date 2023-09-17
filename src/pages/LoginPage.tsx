import {FC, useState,} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/auth.css'
import { Link } from 'react-router-dom';
import { Login } from 'components/auth/Login'

interface FormProps {
    title: string;
    handleClick: (email: string, pass: string) => void;
}

const LoginPage: FC <FormProps> = () => {
    return (
        <div className="page__auth" >
                <div className="info__auth" >
                    <h2 className="title__auth">Войти</h2>
                    <p className="subtitle__auth">У вас нет аккаунта?
                    <Link style={{ textDecoration: 'none' }} to="/register"><strong className="text-pulse">ЗАРЕГИСТРИРУЙТЕСЬ</strong></Link></p>
                    <hr></hr>
                </div>
                
            
        <Login />
        </div>
    )
}

export default LoginPage