import {FC, useState,} from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/auth.css'
interface FormProps {
    title: string;
    handleClick: (email: string, pass: string) => void;
}

const FormAuth: FC <FormProps> = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [nameUser, setNameUser] = useState('');
    return (
        <div className="form__auth">
        <FloatingLabel
            controlId="floatingInput"
            label="Введите email" 
            className="mb-3">
            <Form.Control 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name" />
        </FloatingLabel>
        <FloatingLabel
            controlId="floatingInput"
            label="Введите имя пользователя" 
            className="mb-3 remove">
            <Form.Control 
                type="name"
                value={nameUser}
                onChange={(e) => setNameUser(e.target.value)}
                placeholder="name" />
        </FloatingLabel>
        <FloatingLabel
            controlId="floatingPassword"
            label="Введите пароль">
                <Form.Control 
                    className='form-control' 
                    type="password" 
                    placeholder="Пароль" 
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    />   
        </FloatingLabel>
                <button 
                type='submit'
                onClick={() => handleClick(email, pass)}
                className="btn"> {title}
                </button>
    </div>
    )
}
export {FormAuth}