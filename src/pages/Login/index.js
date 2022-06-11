import React, {useState, useEffect} from "react";
import FormInput from "../../components/FormInput";
import {useDispatch, useSelector} from "react-redux";
import {userSignin, userSignup} from "../../reducers/actions/userActions";
import {useHistory} from 'react-router-dom';


const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        {
            user.isLoggedIn && handleRedirect()
        }
    }, [user.isLoggedIn])

    console.log(user.isLoggedIn)

    const handleRedirect = () => {
        history.push('/')
    }

    const handleLoginForm = async (e) => {
        e.preventDefault();
        if(!loginEmail) {
            return;
        }
        if(!loginPassword) {
            return;
        }
        dispatch(userSignin(loginEmail, loginPassword));
    }

    const handleRegisterForm = async (e) => {
        e.preventDefault();
        dispatch(userSignup(email, password, firstName, lastName));
    }

    return (
        <div className='login'>
            <div className="login__login">
                <h4 className="login__title">
                    Login
                </h4>
                <span className='login__login-text'>Login with your email and password</span>
                <form className='login__form' onSubmit={e => handleLoginForm(e)}>
                    <FormInput required={true} label='Email' type='email' placeholder='Email' value={loginEmail} onInputChange={setLoginEmail}/>
                    <FormInput required={true} label='Password' type='password' placeholder='Password' value={loginPassword} onInputChange={setLoginPassword}/>
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
                    <FormInput required={true} label='First Name' type='text' placeholder='First Name' value={firstName} onInputChange={setFirstName}/>
                    <FormInput required={true} label='Last Name' type='text' placeholder='Last Name' value={lastName} onInputChange={setLastName}/>
                    <FormInput required={true} label='Email' type='email' placeholder='Email' value={email} onInputChange={setEmail}/>
                    <FormInput required={true} label='Password' type='password' placeholder='Password' value={password} onInputChange={setPassword}/>
                    <input className='login__form-btn' type="submit" value='Register'/>
                </form>
                {errMsg && <span className="login__error-msg">{errMsg}</span>}
            </div>
        </div>
    );
};

export default Login;