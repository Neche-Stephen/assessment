import React from 'react';


export default function Input(props) {
  return (
    <div className=''>
        <div><label htmlFor="text-input">{props.label}</label></div>
       <div className='relative'>
        <input className='border bg-[#EEEEEE] w-full p-3 rounded-[8.08px]' {...props} />
        <div className='bg-[#1E2772] absolute right-0 top-0 p-3 rounded-[8.08px]'><img className='' src={props.icon} alt="" /></div>
       </div>
    </div>
  )
}
