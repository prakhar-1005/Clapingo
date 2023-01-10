import React, { useRef } from 'react'
import Clapingo from "../images/clapingo.png"

const Login = () => {
    const userid=useRef();
    const pass=useRef();

    const handleClick=()=>{
        localStorage.setItem("userid",userid.current.value);
        localStorage.setItem("password",pass.current.value);
    }

  return (
    <div className=' h-[100vh]'>
      <nav className='flex flex-row justify-start items-center align-middle h-[60px] shadow-md'>
      <img src={Clapingo} alt="" className='ml-[40px]'/>
      </nav>

      <div className=' h-[390px] w-[450px] m-auto mt-[120px] rounded-[15px] shadow-2xl'>
        <div className='text-[30px] font-[700] ml-[186px] pt-5 text-[#001F27]'>Login</div>

        <form className='flex flex-col items-center gap-8 mt-[50px]'>
            <input type="text" placeholder='UserID' className='h-[50px] w-[400px] outline-none border-b-[2px] border-[#00CDAC]' required ref={userid}/>
            <input type="password" placeholder='Password' className='h-[50px] w-[400px] outline-none border-b-[2px] border-[#00CDAC]' required ref={pass}/>
            <button className=' h-[45px] w-[400px] font-[700] text-[18px] text-white rounded-full bg-[#00CDAC] mt-[10px]' onClick={handleClick}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login
