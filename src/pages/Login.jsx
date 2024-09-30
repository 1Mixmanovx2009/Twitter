import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/images/Logo.svg";
import LoginInput from '../components/LoginInput';
import Button from '../components/Button';
import { Context } from '../context/AuthContext'; // Import the Context
import Loading from '../assets/images/Loading.png';
import toast, { Toaster } from 'react-hot-toast';
import Modal from '../components/Modal';  

function Login() {
  const { registerUser, setToken } = useContext(Context); // Get registerUser from context
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleCloseModal = () => setShowModal(false);

  function handleLoginSubmit(e) {
    e.preventDefault();
    const data = {
      Login: e.target.Login.value,
      password: e.target.password.value
    };

    if (data.Login === registerUser.name && data.password === registerUser.tel) { 
      setIsLoading(true);
      toast.success("Welcome back to Twitter, " + data.Login);
      setTimeout(() => {
        setIsLoading(false);
        setToken(data);
      }, 1000);
    } else {
      setModalMessage("Invalid credentials. Please sign up or check your login details.");
      setShowModal(true);
    }
  }

  return (
    <form onSubmit={handleLoginSubmit} className='w-[450px] mx-auto mt-[60px]' autoComplete='off'>
      <Toaster position="top-right" reverseOrder={false}/>
      <img src={Logo} alt="Twitter Logo" width={50} height={41} />
      <h2 className='text-[42px] leading-[49px] font-[900] my-[36px]'>Log in to Twitter</h2>
      <LoginInput placeholder={"Phone number, email address"} name={"Login"} type={"text"} extroStyle={"mb-[25px]"} />
      <LoginInput placeholder={"Password"} name={"password"} type={"password"} extroStyle={"mb-[25px]"} />
      <Button extroStyle={"h=[59px]"} type={"submit"}>
        {isLoading ? <img className='scale-[4] mx-auto' src={Loading} width={23}/> : "Log In"}
      </Button>
      <div className='flex justify-between items-center mt-10'>
        <p className='signUp text-[18px] text-[#1DA1F2] font-normal leading-[23px] cursor-pointer'>Forgot password?</p>
        <Link to={'/sign-up'} className='signUp text-[18px] text-[#1DA1F2] font-normal leading-[23px]'>Sign up to Twitter</Link>
      </div>

      <Modal showModal={showModal} handleClose={handleCloseModal} message={modalMessage} />
    </form>
  );
}

export default Login;
