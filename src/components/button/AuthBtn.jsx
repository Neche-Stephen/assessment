import React from 'react'

export default function AuthBtn({text, type, onClick}) {
  return (
    <button
        className={`w-full rounded-[8.08px] py-3 ${type === 'colored' ? 'bg-[#1E2772] text-white' : 'bg-[#FFF] text-[#1E2772]'} border border-[#1E2772]`}
        onClick={onClick && typeof onClick === 'function' ? onClick : undefined}
    >
        {text}
    </button>
  )
}
