import React, {useState} from "react";
import FormInput from "../../components/FormInput";
import {useDispatch} from "react-redux";
import {userSignin} from "../../reducers/actions/userActions";
import {useHistory} from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');


    const handleLoginForm = (e) => {
        e.preventDefault();
        if(!loginEmail) {
            return;
        }
        if(!loginPassword) {
            return;
        }
        dispatch(userSignin());
        history.push('/')
    }

    const handleRegisterForm = (e) => {
        e.preventDefault();
    }

    return (
        <div className='login'>
            <div className="login__login">
                <h4 className="login__title">
                    Login
                </h4>
                <span className='login__login-text'>Have an account? Login with your email.</span>
                <form className='login__form' onSubmit={e => handleLoginForm(e)}>
                    <FormInput label='Email' type='email' placeholder='Email' value={loginEmail} onInputChange={setLoginEmail}/>
                    <FormInput label='Password' type='password' placeholder='Password' value={loginPassword} onInputChange={setLoginPassword}/>
                    <input className='login__form-btn' type="submit" value='Login'/>
                </form>
            </div>
            <div className="login__register">
                <h4 className="login__title">
                    Register
                </h4>
                <span className="login__login-text">
                    Dont have an account? Register with your email.
                </span>
                <form className="login__form" onSubmit={e => handleRegisterForm(e)}>
                    <FormInput label='First Name' type='text' placeholder='First Name' value={firstName} onInputChange={setFirstName}/>
                    <FormInput label='Last Name' type='text' placeholder='Last Name' value={lastName} onInputChange={setLastName}/>
                    <FormInput label='Email' type='email' placeholder='Email' value={email} onInputChange={setEmail}/>
                    <FormInput label='Password' type='password' placeholder='Password' value={password} onInputChange={setPassword}/>
                    <input className='login__form-btn' type="submit" value='Register'/>
                </form>
            </div>
        </div>
    );
};

export default Login;