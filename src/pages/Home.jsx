import React, { useState } from 'react'
import { CalendarIcon, CommentIcon, Dots, GiftIcon, LikeIcon, ModeIcon, ReplyIcon, SaveImgIcon, ShareIcon, SimailIcon, StatisticIcon, StatsIcon } from '../assets/images/Icon'
import Button from '../components/Button'
import Designsta from '../assets/images/Designsta.png'
import Cloutexhibition from '../assets/images/cloutexhibition.png'
import CreativePhoto from '../assets/images/CreativePhoto.png'
import kabap from '../assets/images/kabap.png'
import PostItem from '../components/postItem'
import Loading from '../assets/images/Loading.png'

function Home() {
  const [inputValue, setInputValue] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [postImgUrl, setPostImgUrl] = useState(null)

  const [posts, setPosts] = useState([
    {
      id: 1,
      avatarIcon: Designsta,
      name: 'Designsta',
      nic: "@inner · 25m",
      postDesk: "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      commentCount: "10",
      replayCount: "1",
      LiceCount: "8",
      postImg: null,
    },
    {
      id: 2,
      avatarIcon: Cloutexhibition,
      name: 'Cloutexhibition',
      nic: "@RajLahoti · 22m",
      postDesk: "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      commentCount: "0",
      replayCount: "5",
      LiceCount: "9",
      postImg: null,
    },
    {
      id: 3,
      avatarIcon: CreativePhoto,
      name: 'CreativePhoto',
      nic: "@cloutexhibition · 1h",
      postDesk: "Обетда..... Кечиринглар",
      commentCount: "10",
      replayCount: "1",
      LiceCount: "8",
      postImg: kabap,
    },
  ])

  function handleSubmitPosts(e) {
    e.preventDefault();
    const data = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      avatarIcon: "https://picsum.photos/800/800",
      name: JSON.parse(localStorage.getItem("token")).login,
      nic: `@${JSON.parse(localStorage.getItem("token")).login} · 5m`,
      postDesk: inputValue,
      commentCount: null,
      replayCount: null,
      LiceCount: null,
      postImg: postImgUrl ? postImgUrl : null,
    };

    setIsLoading(true);
    setTimeout(() => {
      setPosts([data, ...posts]);
      setIsLoading(false);
      setPostImgUrl(null)
      setInputValue('');
    }, 1000);
  }

  return (
    <div className='navbar border-r-[3px] border-[#D8D8D8] h-[100vh] overflow-y-auto'>
      <div className='w-[630px] flex items-center justify-between p-5 border-b-[3px] z-50 absolute bg-white border-[#D8D8D8]'>
        <h2 className='text-[24px] font-[700] leading-[31.92px]'>Home</h2>
        <button className='z-50 bg-white'>
          <ModeIcon />
        </button>
      </div>
      <form onSubmit={handleSubmitPosts} className='p-5 mt-[74px] border-b-[3px] border-[#D8D8D8] relative'>
        <div className='flex space-x-[15px]'>
          <img className='rounded-full w-[60px] h-[60px]' src="https://picsum.photos/800/800" alt="" width={60} height={60} />
          <div>
            <input onChange={(e) => setInputValue(e.target.value)} required className='w-full mb-[20px] text-[22px] font-700 leading-[29px] placeholder:text-[#828282] p-[1px] outline-none' type="text" placeholder='What’s happening' autoComplete='off' name='tweetData' />
                 {postImgUrl ? <img src={postImgUrl} alt='Choosen img' width={679} height={453} /> : ""}
          </div>
        </div>
        <div className='flex items-center space-x-5 pl-[77px] mb-[26px] mt-6'>
          <label className='cursor-pointer'>
            <input onChange={(e) => setPostImgUrl(URL.createObjectURL(e.target.files[0]))} className='hidden' type="file" />
            <SaveImgIcon />
          </label>
          <label className='cursor-pointer'>
            <input className='hidden' type="file" />
            <GiftIcon />
          </label>
          <label className='cursor-pointer'>
            <input className='hidden' type="file" />
            <StatsIcon />
          </label>
          <label className='cursor-pointer'>
            <input className='hidden' type="file" />
            <SimailIcon />
          </label>
          <label className='cursor-pointer'>
            <input className='hidden' type="file" />
            <CalendarIcon />
          </label>
        </div>
        <Button type={inputValue ? "submit" : "button"} exrtoStyle={`w-[108px] absolute right-[18px] bottom-[5px] ${inputValue ? "" : "cursor-not-allowed opacity-50 hover:opacity-50"}`}>
          {isLoading ? <img className='mx-auto scale-[3]' src={Loading} width={22} height={22} /> : "Tweet"}</Button>
      </form>
      <ul>{posts.map(item => <PostItem key={item.id} item={item} />)}</ul>
    </div>
  )
}

export default Home