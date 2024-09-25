import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.scss";
import Input from '../../components/input-field/Input';
import AuthBtn from '../../components/button/AuthBtn';
import { useDispatch, useSelector } from 'react-redux';
import { login, getAuthenticatedUser } from "../../store/authSlice"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IMAGES from "../../assets/login/";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { loading, error, token } = useSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Dispatch the login action
    const credentials = { username, password };
    const resultAction = await dispatch(login(credentials));

    if (login.fulfilled.match(resultAction)) {
      toast.success('Login successful!');
      
      // Dispatch to fetch full authenticated user info using the token
      const token = resultAction.payload.accessToken;
      dispatch(getAuthenticatedUser(token)); // Fetch authenticated user details

      navigate('/dashboard');
    } else {
      toast.error(resultAction.payload?.message || 'Login failed!');
    }
  };

  return (
    <div className='flex items-center min-h-[100vh]'>
      <div className={`${styles.login_background} hidden lg:block`}>
        <img className='w-full h-full' src={IMAGES.BACKGROUND} alt="" />
      </div>
      <div className='flex-grow px-6'>
        <div className='mb-8 text-center text-[16.16px] font-[600] leading-[24.23px] text-[#555555]'>
          Login into your account
        </div>

        <div className='mb-4'>
          <Input 
            label='Username :' 
            placeholder='Enter username' 
            icon={IMAGES.MESSAGE}
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <Input 
            label='Password' 
            placeholder='Enter password' 
            icon={IMAGES.LOCK}
            type='password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='text-right text-[#1E2772] font-[14.14px] leading-[21.2px] mb-8 underline'>
          Forgot password?
        </div>

        <div className='mb-8'>
          <AuthBtn 
            isLoading={loading} 
            text='Login now' 
            type="colored" 
            onClick={handleLogin} 
          />
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
  );
}
