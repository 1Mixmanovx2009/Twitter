import React from 'react'
import Logo from "../assets/images/Logo.svg"
import LoginInput from '../components/LoginInput'
import Button from '../components/Button'

function Login() {
  return (
    <form className='w-[450px] mx-auto mt-[60px]'>
      <img src={Logo} alt="" width={50} height={41}/>
      <h2 className='text-[42px] leading-[49px] font-[900] my-[36px]'>Log in to Twitter</h2>
      <LoginInput placeholder={"Phone number, email address"} name={"Login"} type={"text"} extroStyle={"mb-[25px]"}/>
      <LoginInput placeholder={"Password"} name={"password"} type={"password"} extroStyle={"mb-[25px]"}/>
      <Button title={"Log In"} type={"submit"}/>
    </form>
  )
}

export default Login