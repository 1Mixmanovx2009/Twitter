import React from 'react'

function LoginInput({placeholder, name, type, extroStyle}) {
  return (
    <input className={`w-full py-[23px] outline-none pl-5 text-[18px] leading-[23px] rounded-[6px] border-[1px] border-slate-400 ${extroStyle}`} required type={type} placeholder={placeholder} name={name}/>
  )
}

export default LoginInput