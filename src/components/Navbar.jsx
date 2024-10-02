import React from 'react'
import Logo from "../assets/images/Logo.svg";
import { Link, NavLink } from 'react-router-dom';
import Button from './Button'
import { BookmarksIcon, Dots, ExploreIcon, HomeIcon, HomeIconActive, ListsIcon, MassagesIcon, MoreICon, NotificationsIcon, ProfileFillIcon } from '../assets/images/Icon';

function Navbar() {
    const user = JSON.parse(localStorage.getItem("token"))
    const navbarList = [
        {
            id: 1,
            icon: <HomeIcon/>,
            title: "Home",
            path: "/",
        },
        {
            id: 2,
            icon: <ExploreIcon />,
            title: "Explore",
            path: "/explore",
        },
        {
            id: 3,
            icon: <NotificationsIcon />,
            title: "Notifications",
            path: "/notifications",
        },
        {
            id: 4,
            icon: <MassagesIcon />,
            title: "Messages",
            path: "/messages",
        },
        {
            id: 5,
            icon: <BookmarksIcon/>,
            title: "Bookmarks",
            path: "/bookmarks",
        },
        {
            id: 6,
            icon: <ListsIcon/>,
            title: "Lists",
            path: "/lists",
        },
        {
            id: 7,
            icon: <ProfileFillIcon />,
            title: "Profile",
            path: "/profile",
        },
        {
            id: 8,
            icon: <MoreICon/>,
            title: "More",
            path: "/more",
        },
    ]

    function handleLogOut() {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div className='navbar overflow-hedden w-[25%] h-[100vh] overflow-y-auto pl-[29px] pt-[31px] pr-[16px] border-[#D8D8D8] border-r-[3px]'>
            <Link to={"/"}>
                <img src={Logo} alt="Sit logo" width={40} height={33} />
            </Link>
            <div className='mt-[49px] space-y-[30px] mb-[29px]'>
                {navbarList.map(item => (
                    <NavLink className={"flex items-center space-x-[20px] font-semibold text-[18px] leading-[23px]"} to={item.path} key={item.id}>
                        {item.icon}
                        <span>{item.title}</span>
                    </NavLink>
                ))}
            </div>
            <Button exrtoStyle={'py-[15px] w-full px-[0px] w-[229px] mb-[260px]'} type={"button"}>Tweet</Button>
            <div className='flex items-center space-x-[10px]'>
                <img className='rounded-full' src="https://picsum.photos/500/500" alt="Icon" width={50} height={50} />
                <div className='flex items-center justify-between w-[80%]'>
                    <div className=''>
                        <strong className='font-semiboldi text-[16px]'>{user.Login}</strong>
                        <p className='text=[16px] opacity-60'>{user.password}</p>
                    </div>
                    <button onClick={handleLogOut}>
                        <Dots/>
                    </button>
                </div>

            </div>
        </div >
    )
}

export default Navbar