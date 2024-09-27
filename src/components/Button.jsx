import React from 'react'

function Button({title, type, exrtoStyle}) {
  return (
    <button className={`p-[18px] font-bold text-[18px] leading-[23px] text-white bg-[#1DA1F2] w-full ${exrtoStyle}`} type={type}>{title}</button>
  )
}

export default Button