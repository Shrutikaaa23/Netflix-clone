import React from 'react'
import netflixx from "./netflixx.jpg";
import netlogo from "./netlogo.png";

export default function Home() {
  return (
    <div className='' >
 
     <div className=''>
        <div className='absolute ml-4 mt-[-1%] '>
            <img src={netlogo} className='h-36 w-54'></img>
        </div>
        <div className='absolute mt-8  ml-[92%]'>
        <button className='text-white text-lg font-sans bg-red-600 h-10 w-24   rounded-lg' type="button">Sign In</button>
        </div>

        <div className='absolute mt-[22%]  '>
            <p className='text-white font-bold text-7xl ml-40 font-sans'>Unlimited movies, Tv shows, and more</p>
            <p className='text-white font-normal font-sans  text-3xl mt-5 ml-[40%]'>Watch anywhere.Cancel anytime.</p>
            <p className='text-white font-normal font-sans  text-2xl mt-5 ml-[25%]'>Ready to watch? Enter your email to create or restart your membership.</p>

           <div className='flex flex-row'>
            <input className='text-white shadow-lg  border-slate-400 bg-transparent font-normal font-sans  text-2xl mt-5 ml-[27%] h-16 w-[34%] rounded-lg' type="email" placeholder='Email address'></input>
            <button className='text-white font-sans text-3xl bg-red-600 ml-2 h-16 w-[17%] mt-5  rounded-lg' type="button">Get Started</button>
        </div>
        </div>

           
        <img src={netflixx} className=''></img>

        </div>
      


    </div>
  )
}
