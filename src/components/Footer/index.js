import React, {useState} from "react";
import {Link} from 'react-router-dom';
import logo from '../../img/logo-white.png'
import {FaFacebookSquare, FaYoutube, FaInstagram} from "react-icons/fa";
import FormInput from "../FormInput";

const Footer = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
        <footer className='footer'>
            <div className="footer__social">
                <img src={logo} alt="Logo" className="footer__logo"/>
                <div className="footer__social-box">
                    <Link to='/'><FaFacebookSquare className='footer__social-icon'/></Link>
                    <Link to='/'><FaYoutube className='footer__social-icon'/></Link>
                    <Link to='/'><FaInstagram className='footer__social-icon'/></Link>
                </div>
            </div>
            <div className="footer__newsletter">
                <h4 className="footer__newsletter-title">
                    Join our mailing list
                </h4>
                <form className="footer__newsletter-form">
                    <FormInput value={name} onInputChange={setName} label='First name' type='text' placeholder='First name'/>
                    <FormInput value={email} onInputChange={setEmail} label='Email' type='email' placeholder='Email'/>

                    <input className='footer__newsletter-submit' type="submit" value='SUBSCRIBE'/>
                </form>
            </div>
            <div className="footer__terms">
                <ul className="footer__terms-list">
                    <li className="footer__terms-item">
                        <Link to='/' className='footer__terms-link'>Terms</Link>
                    </li>
                    <li className="footer__terms-item">
                        <Link to='/' className='footer__terms-link'>Privacy</Link>
                    </li>
                    <li className="footer__terms-item">
                        <Link to='/' className='footer__terms-link'>Cokies Policy</Link>
                    </li>
                    <li className="footer__terms-item">
                        <Link to='/' className='footer__terms-link'>F.A.Q.</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;