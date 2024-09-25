import React from 'react';
import styles from './Input.module.scss';


export default function Input(props) {


  return (
    <div className=''>
        <div><label className='text-[16.16px] leading-[24.23px] text-[#555555]' htmlFor="text-input">{props.label}</label></div>
       <div className='relative'>
        <input className={`${styles.input_element} border bg-[#EEEEEE] w-full p-3 rounded-[8.08px]`} {...props} />
        <div className='bg-[#1E2772] absolute right-0 top-0 p-3 rounded-[8.08px]'><img className='' src={props.icon} alt="" /></div>
       </div>
    </div>
  )
}
