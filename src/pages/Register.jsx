import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/images/Logo.svg";
import LoginInput from '../components/LoginInput';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Loading from '../assets/images/Loading.png';
import toast, { Toaster } from 'react-hot-toast';
import { Context } from '../context/AuthContext'; 

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const { setRegisterUser } = useContext(Context); 
  const navigate = useNavigate();

  function handleRegisterSubmit(e) {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      tel: e.target.tel.value
    };

    localStorage.setItem('registerUser', JSON.stringify(data));
    setRegisterUser(data); 

    toast.success('Registration data saved successfully!');

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1000);
  }

  return (
    <form onSubmit={handleRegisterSubmit} className='w-[750px] mx-auto mt-[60px]' autoComplete='off'>
      <Toaster position="top-right" reverseOrder={false} />
      <img className='mx-auto' src={Logo} alt="Twitter Logo" width={40} height={33} />
      <h2 className='text-[30px] leading-[39.9px] font-[700] mb-[35px] mt-[43px]'>Create an account</h2>
      <LoginInput placeholder={"Name"} name={"name"} type={"text"} extroStyle={"mb-[25px]"} />
      <LoginInput placeholder={"Phone number"} name={"tel"} type={"tel"} />

      <div>
        <Link to={"/"} className='signUp text-[18px] text-[#1DA1F2] font-normal mt-[30px] mb-[40px] leading-[23px] cursor-pointer'>Use email</Link>
        <h3 className='text-[18px] font-[700] mb-[10px] leading-[23px]'>Date of birth</h3>
        <p className='text-[16px] font-[400] mb-[20px] leading-[24px] opacity-60'>
          Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
        </p>
      </div>

      <Button exrtoStyle={'mb-[40px]'} type={"submit"}>
        {isLoading ? <img className='scale-[4] mx-auto' src={Loading} width={23} /> : "Next"}
      </Button>

    </form>
  );
}

export default Register;
