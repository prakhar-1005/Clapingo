import React from 'react'
import Clapingo from "../images/clapingo.png"
import '../index.css'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav className='flex flex-row justify-around items-center align-middle h-[90px] shadow-md '>
      <img src={Clapingo} alt="" className=''/>
        <ul className='flex flex-row gap-[48px]'>
            <li className='text-[#060606] font-[500] text-[18px] cursor-pointer'>Plans & Pricing</li>
            <li className='text-[#060606] font-[500] text-[18px] cursor-pointer'>Teach with us</li>
            <li className='text-[#060606] font-[500] text-[18px] cursor-pointer'>Affiliate Program</li>
            <li className='text-[#060606] font-[500] text-[18px] cursor-pointer'>Kids</li>
        </ul>

        <button className='pt-[10px] pb-[10px] pl-[24px] pr-[24px] rounded-full bg-gradient-to-t from-[#52A49A] to-[#00CDAC] text-white'><Link to="/login" >Login</Link></button>
      </nav>
    </div>
  )
}

export default Navbar
