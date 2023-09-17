import {useHistory} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {FormAuth} from './Form';
import {setUser} from 'store/slices/userSlice';
import { useAppDispatch } from 'hooks/redux-hooks';
import { Link } from 'react-router-dom';


const Login = () => {
    const dispatch = useAppDispatch();
    const {push} = useHistory();
    
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                push('/');
            })
            .catch(console.error)
    }

    return (
        <FormAuth 

            title="ВОЙТИ"
            handleClick={handleLogin}
        />
    )
}

export {Login}