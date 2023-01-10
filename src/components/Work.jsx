import React from 'react'
import Subs from "../images/subscribe.png"
const Work = () => {
  return (
    <div className='mt-[120px]'>
    <span className='font-[700] text-[40px] ml-[157px]'>How it works ?</span> 

    <div className='absolute w-[379px] h-[175px] mt-[40px] ml-[157px] rounded-[12px] shadow-2xl'>
        <div className=' font-[700] text-[20px] text-[#001F27] pl-[24px] pt-[32px]'>1. Create Account</div> 
        <div className='font-[500] text-[16px] text-[#808F93] pl-[24px] pt-[16px] w-[296px] h-[63px]'>Create your account using phone number or email and take a free trial at ₹1.</div>
    </div>

    <div className='absolute w-[379px] h-[175px] mt-[309px] ml-[157px] rounded-[12px] shadow-2xl'>
        <div className=' font-[700] text-[20px] text-[#001F27] pl-[24px] pt-[32px]'>3. Select time slot </div> 
        <div className='font-[500] text-[16px] text-[#808F93] pl-[24px] pt-[16px] w-[336px] h-[42px]'>Subscribe & select any time slot between 10 AM to 12 midnight.</div>
    </div>

    <div className='absolute w-[379px] h-[175px] mt-[40px] ml-[941px] rounded-[12px] shadow-2xl'>
        <div className=' font-[700] text-[20px] text-[#001F27] pl-[24px] pt-[32px]'>2. Subscribe</div> 
        <div className='font-[500] text-[16px] text-[#808F93] pl-[24px] pt-[16px] w-[296px] h-[63px]'>Choose your preferred duration and select subscription package for your sessions.</div>
    </div>

    <div className='absolute w-[379px] h-[175px] mt-[309px] ml-[941px] rounded-[12px] shadow-2xl'>
        <div className=' font-[700] text-[20px] text-[#001F27] pl-[24px] pt-[32px]'>4. You are done</div> 
        <div className='font-[500] text-[16px] text-[#808F93] pl-[24px] pt-[16px] w-[296px] h-[63px]'>That’s it! Start practicing and reach your learning goal in speaking.</div>
    </div>

    <div><img src={Subs} alt="" className='shadow-2xl mt-[40px] ml-[620px]'/></div>

    <div className='absolute w-[286px] h-[175px] ml-[600px] mt-[-158px] bg-gradient-to-b from-[rg] to-[#FBFBFD] z-10'></div>

    </div>
  )
}

export default Work
