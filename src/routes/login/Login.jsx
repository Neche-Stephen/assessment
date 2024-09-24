import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.scss";
import Input from '../../components/input-field/Input';
import AuthBtn from '../../components/button/AuthBtn';
import {login} from "../../services/authService";

import IMAGES from "../../assets/login/";


export default function Login() {

const navigate = useNavigate();

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleLogin = async () => {
    try {
      const user = await login(username, password);
    //   console.log('Login successful:', user);
        navigate('/dashboard');
      
    } catch (error) {
    //   console.error('Login failed', error);
    }
  }

  return (
    <div className='flex'>
        <div className={`${styles.login_background}`}>
            <img className='w-full h-full' src={IMAGES.BACKGROUND} alt="" />

        </div>
        <div className='w-[35.5%] px-4'>
            <div className='mb-8 text-center'>Login into your account</div>

            <div className='mb-4'>
                <Input label='Username :' 
                    placeholder = 'Enter username' 
                    icon = {IMAGES.MESSAGE}
                    type = 'text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
            </div>

            <div className='mb-3'>
                <Input label='Password' 
                    placeholder = 'info@provistechnologies.com' 
                    icon = {IMAGES.LOCK}
                    type = 'email' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
            </div>

            <div className='text-right text-[#1E2772] font-[14.14px] leading-[21.2px] mb-8'>Forgot password?</div>

            <div className='mb-8'>
                <AuthBtn text='Login now' type="colored" onClick={handleLogin} />
            </div>

            <div className='mb-8 flex items-center space-x-4'>
                <img className='' src={IMAGES.LINE} alt="" />
                <span>OR</span>
                <img src={IMAGES.LINE} alt="" />
            </div>

            <div>
                <AuthBtn text='Signup now' type="" />
            </div>
            
        </div>
    </div>
  )
}
