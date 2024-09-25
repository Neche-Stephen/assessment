import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.scss";
import Input from '../../components/input-field/Input';
import AuthBtn from '../../components/button/AuthBtn';
import {login} from "../../services/authService";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import IMAGES from "../../assets/login/";


export default function Login() {

const navigate = useNavigate();

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [isLoading, setIsLoading] = useState(false);

const handleLogin = async () => {
    setIsLoading(true);
    try {
      const user = await login(username, password);
        navigate('/dashboard');
      
    } catch (error) {
        // console.log(error.response.data.message);
        toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='flex items-center min-h-[100vh]'>
        <div className={`${styles.login_background}  hidden lg:block`}>
            <img className='w-full h-full' src={IMAGES.BACKGROUND} alt="" />

        </div>
        <div className='flex-grow px-6'>
        
            <div className='mb-8 text-center text-[16.16px] font-[600] leading-[24.23px] text-[#555555]'>Login into your account</div>

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

            <div className='text-right text-[#1E2772] font-[14.14px] leading-[21.2px] mb-8 underline'>Forgot password?</div>

            <div className='mb-8'>
                <AuthBtn isLoading={isLoading} text='Login now' type="colored" onClick={handleLogin} />
            </div>

            <div className='mb-8 flex justify-center items-center space-x-4'>
                <img className='' src={IMAGES.LINE} alt="" />
                <span>OR</span>
                <img src={IMAGES.LINE} alt="" />
            </div>

            <div>
                <AuthBtn text='Signup now' type="" />
            </div>
            <ToastContainer />
        </div>
    </div>
  )
}
