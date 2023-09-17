import {useHistory} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {FormAuth} from './Form';
import {setUser} from 'store/slices/userSlice';
import { useAppDispatch } from 'hooks/redux-hooks';
import {FC, useState,} from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/auth.css'

const SignUp = () => {
    const [nameUser, setNameUser] = useState('');
    const dispatch = useAppDispatch();
    const {push} = useHistory();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                    
                }));
                push('/');
            })
            .catch(console.error);
    }           
    return (
        <div>
            
            <FormAuth
                title="РЕГИСТРАЦИЯ"
                handleClick ={handleRegister}
                
            />
            
        </div>
    )
}

export {SignUp}