import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export default function AuthBtn({text, type, onClick, isLoading}) {
  return (
    <button
        disabled={isLoading}
        className={`w-full rounded-[8.08px] py-3 ${type === 'colored' ? 'bg-[#1E2772] text-white' : 'bg-[#FFF] text-[#1E2772]'} border border-[#1E2772]`}
        onClick={onClick && typeof onClick === 'function' ? onClick : undefined}
    >
        {isLoading ? <ClipLoader color={'#fff'} loading={true} size={20} /> : text}
    </button>
  )
}
