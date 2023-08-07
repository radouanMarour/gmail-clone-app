import React from 'react'
import './Login.css';
import Logo from '../img/Gmail_Logo.png'
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/authSlice';

function Login() {
    const dispatch = useDispatch();

    const login = () => {
        signInWithPopup(auth, provider)
            .then(({ user }) => {
                dispatch(setUser({
                    name: user.displayName,
                    email: user.email
                }))
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div className='login'>
            <img src={Logo} />
            <p>Sign In with google</p>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login;