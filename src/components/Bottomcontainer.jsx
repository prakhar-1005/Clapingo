import React from 'react'
import img1 from "../images/1.png"
import img2 from "../images/2.png"
import img3 from "../images/3.png"
import img11 from "../images/11.png"
import img22 from "../images/22.png"
import img33 from "../images/33.png"

const Bottomcontainer = () => {
  return (
    <div className='mt-[120px]'>
      <div className='text-center font-[700] text-[40px] text-[#001F27]'>What we offer ?</div>

      <div className='flex justify-center gap-[30px] mt-[36px]'>
        <div><img src={img1} alt="" className='rounded-[10px]'/></div>
        <div><img src={img2} alt="" className='rounded-[10px]'/></div>
        <div><img src={img3} alt="" className='rounded-[10px]'/></div>
      </div>

        <img src={img11} alt="" className='absolute ml-[160px] mt-[-141px] rounded-b-[10px]' />
        <img src={img22} alt="" className='absolute ml-[569.35px] mt-[-141px] rounded-b-[10px]'/>
        <img src={img33} alt=""  className='absolute ml-[980px] mt-[-141px] rounded-b-[10px]'/>
        <span className='absolute font-[600] text-[20px] text-[#00D2FF] ml-[180px] mt-[-125px]'>Customised Collection</span>
        <span className='absolute font-[500] text-[16px] text-[#FFFFFF] ml-[180px] mt-[-90px] h-[63px] w-[334px]'>Customised sessions and module for Basic, Intermediate and Advanced learners.</span>
        
        <span className='absolute font-[600] text-[20px] text-[#00D2FF] ml-[592px] mt-[-125px]'>Experimental Learning</span>
        <span className='absolute font-[500] text-[16px] text-[#FFFFFF] ml-[592px] mt-[-90px] h-[63px] w-[334px]'>Do not study English, rather consume<br/> and use it.</span>
    
        <span className='absolute font-[600] text-[20px] text-[#00D2FF] ml-[1000px] mt-[-125px]'>Shadowing Method</span>
        <span className='absolute font-[500] text-[16px] text-[#FFFFFF] ml-[1000px] mt-[-90px] h-[63px] w-[334px]'>Think and speak in English rather than translating it from mother tongue.</span>
    </div>
  )
}

export default Bottomcontainer
