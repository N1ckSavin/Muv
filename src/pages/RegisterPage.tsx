import { SignUp } from 'components/auth/SignUp';
import {FC, useState,} from 'react';
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/auth.css'

interface FormProps {
    title: string;
    handleClick: (email: string, pass: string) => void;
}

const RegisterPage: FC <FormProps> = () => {
    return (
        <div className="page__auth" >
        <div className="info__auth" >
            <h2 className="title__auth">Регистрация</h2>
            <p className="subtitle__auth">Уже есть аккаунт?
            <Link style={{ textDecoration: 'none' }} to="/login"><strong className="text-pulse">ВОЙТИ</strong></Link></p>
            <hr></hr>
            
        </div>
        <SignUp /> 

        
        </div>
    )
}

export default RegisterPage;