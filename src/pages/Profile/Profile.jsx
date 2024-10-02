import React, { useState } from 'react';
import Arrow from '../../assets/images/Arrow 1.svg'
import bgPhoto from '../../assets/images/bgPhoto.png'
import { useNavigate } from 'react-router-dom';
import Location from '../../assets/images/Location.svg'
import Link from '../../assets/images/Link.svg'
import Information from '../../assets/images/Information.svg'
import Сalendar from '../../assets/images/Сalendar.svg'

function Profile() {
  const user = JSON.parse(localStorage.getItem("token"))
  const [profileImg, setProfileImg] = useState("https://picsum.photos/800/800")
  const navigate = useNavigate()

  return (
    <div className="w-full max-w-2xl mx-auto border-r-[2px] border-[#D8D8D8]">

    <div className="flex items-center space-x-4 p-[10px]">
      <button onClick={() => navigate(-1)} className="text-xl">
        <img src={Arrow} alt="" />
      </button>
      
      <div>
        <h1 className="AccName text-[20px] font-bold">{user.Login}</h1>
        <p className="font-400 text-[16px] opacity-60">1,070 Tweets</p>
      </div>
    </div>

      <div className="relative">
        <img
          className="w-full h-[200px] object-cover"
          src={bgPhoto}
          alt="Header"
        />
        <div className="absolute left-4 bottom-[-40px]">
          <img
            className="rounded-full border-4 border-white"
            src={profileImg}
            alt="Profile"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="p-5 pt-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{user.Login}</h1>
            <p className="text-gray-500">@{user.password}</p>
          </div>
          <button className="border rounded-full px-4 py-2 font-semibold">
            Edit profile
          </button>
        </div>

        <p className="mt-2 text-gray-700">
          UX&UI designer at{' '}
          <a href="https://twitter.com/abutechuz" className="text-blue-500">
            @abutechuz
          </a>
        </p>

        <div className="text-gray-500 mt-1 flex items-center justify-between gap-5 space-x-3">
          <div className="flex items-center space-x-1">
            <img className='w-[24px] h-[24px]' src={Location} alt="" width={24} height={24} />
            <span>Mashag’daman</span>
          </div>

          <div className="flex items-center space-x-1">
            <img className='w-[24px] h-[24px]' src={Link} alt="" />
            <a href="https://t.me/boburjon_mavlonov" className="text-blue-500 text-[12px]">
              t.me/boburjon_mavlonov
            </a>
          </div>

          <div className="flex items-center space-x-1">
            <img className='w-[24px] h-[24px]' src={Information} alt="" />
            <span>Born November 24, 2000</span>
          </div>

          <div className="flex items-center space-x-1">
            <img className='w-[24px] h-[24px]' src={Сalendar} alt="" />
            <span>Joined May 2020</span>
          </div>
        </div>

        <div className="mt-4 flex space-x-5">
          <div className="flex space-x-1">
            <span className="font-bold">67</span>
            <span className="text-gray-500">Following</span>
          </div>
          <div className="flex space-x-1">
            <span className="font-bold">47</span>
            <span className="text-gray-500">Followers</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

