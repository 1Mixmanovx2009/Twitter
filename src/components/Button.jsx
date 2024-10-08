import React, { Children } from 'react'

function Button({children, type, exrtoStyle}) {
  return (
    <button className={`p-[18px] font-bold text-[18px] leading-[23px] hover:opacity-75 duration-300 text-white bg-[#1DA1F2] rounded-[76px] ${exrtoStyle}`} type={type}>{children}</button>
  )
}

export default Button