import React from 'react'
import { CommentIcon, Dots, LikeIcon, ReplyIcon, ShareIcon, StatisticIcon } from '../assets/images/Icon'

function postItem({item}) {
  return (
    <li className='p-5 border-b-[1px] border-[#D8D8D8] relative'>
              <div className='flex pt-[10px] px-[25px] pb-[21px] gap-[15px]'>
                <img className='w-[60px] h-[60px] rounded-full' src={item.avatarIcon} alt="Avatar icon" width={60} height={60} />
                <div>
                  <strong className='font-bold mr-[5px] text-[20px] leading-[26px]'>{item.name}</strong>
                  <span className='text-[18px] leading-[23px] font-400 opacity-60'>{item.nic}</span>
                  <p className='font-400 text-[18px] leading-[23px] mb-[22px]'>{item.postDesk}</p>
                </div>
              </div>
              <button className='absolute top-[21px] right-[25px]'>
                <Dots />
              </button>
              {item.postImg ? <img className='mb-[22px]' src={item.postImg} alt="" /> : ""}
                  
              <div className='flex items-center gap-[70px]'>
                <button className='flex items-center space-x-[10px]'>
                  <CommentIcon />
                  <span className='font-semibold text-[16px] leading-[21px]'>{item.commentCount ? item.commentCount : ""}</span>
                </button>
                <button className='flex items-center space-x-[10px]'>
                  <ReplyIcon/>
                  <span className='font-semibold text-[16px] leading-[21px]'>{item.commentCount ? item.commentCount : ""}</span>
                </button>
                <button className='flex items-center space-x-[10px]'>
                  <LikeIcon/>
                  <span className='font-semibold text-[16px] leading-[21px]'>{item.commentCount ? item.commentCount : ""}</span>
                </button>
                <button className='flex items-center space-x-[10px]'>
                  <ShareIcon />
                  <span className='font-semibold text-[16px] leading-[21px]'>{item.commentCount ? item.commentCount : ""}</span>
                </button>
                <button className='flex items-center space-x-[10px]'>
                  <StatisticIcon/>
                  <span className='font-semibold text-[16px] leading-[21px]'>{item.commentCount ? item.commentCount : ""}</span>
                </button>
              </div>
            </li>
  )
}

export default postItem