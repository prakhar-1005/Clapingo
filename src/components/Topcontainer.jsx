import React from 'react'
import '../index.css'

const Topcontainer = () => {
  return (
    <div className=' flex justify-center h-[444px] items-center align-middle mt-[56px] font-poppins'>
        <div>
            <div className='text-[60px] font-[700] h-[260px] w-[687px] text-[#001F27]'>Hone your english speaking skills over <span className='text-[#139980]'>one-on-one </span>video call </div>
            <div className='font-[500] mt-[24px] text-[18px] text-[#001F27]'>Practice english converation with excellent communicators <br/>across the country and speak like a PRO 😎</div>
            <button className='pt-[15px] pb-[15px] pl-[32px] pr-[32px] rounded-full cursor-pointer bg-[#FF736A] text-white text-[18px] font-[500] mr-[30px] mt-[48px]'>Book a trial</button>
            <button className='pt-[15px] pb-[15px] pl-[32px] pr-[32px] rounded-full cursor-pointer text-[#FF736A] text-[18px] font-[500] border-2 border-[#FF736A]'>Download our app</button>
        </div>
        <div className='h-[350px] w-[600px] border-2 border-black rounded-3xl '></div>
    </div>
  )
}

export default Topcontainer
