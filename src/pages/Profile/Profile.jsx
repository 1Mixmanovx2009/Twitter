import React from 'react';
import Arrow from '../../assets/images/Arrow 1.svg'

function Profile() {
  const user = JSON.parse(localStorage.getItem("token"))

  return (
    <div className="w-full max-w-2xl mx-auto">

    <div className="flex items-center space-x-4 p-[22px] border-b-[2px] border-[#D8D8D8]">
      <button className="text-xl">
        <img src={Arrow} alt="" />
      </button>
      
      <div>
        <h1 className="AccName text-[20px] font-bold">{user.Login}</h1>
        <p className="font-400 text-[16px] opacity-60">1,070 Tweets</p>
      </div>
    </div>

      <div className="relative">
        <img
          className="w-full h-40 object-cover"
          src="https://via.placeholder.com/1500x500"
          alt="Header"
        />
        <div className="absolute left-4 bottom-[-40px]">
          <img
            className="rounded-full border-4 border-white"
            src="https://via.placeholder.com/150"
            alt="Profile"
            width={80}
            height={80}
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

        <div className="text-gray-500 mt-1 flex space-x-3">
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16.862 5.487a4.5 4.5 0 00-6.9 0L12 7l1.038-1.513a4.5 4.5 0 016.9 0l.625.91"
              />
            </svg>
            <span>Mashag’daman</span>
          </div>

          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16.707 3.293a1 1 0 00-1.414 0L10 8.586 8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"
              />
            </svg>
            <a href="https://t.me/boburjon_mavlonov" className="text-blue-500">
              t.me/boburjon_mavlonov
            </a>
          </div>

          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 2H8v4H4v14h16V6h-4V2z"
              />
            </svg>
            <span>Born November 24, 2000</span>
          </div>

          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7v5l3.5-3.5L8 7z"
              />
            </svg>
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

