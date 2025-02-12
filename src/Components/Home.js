import React from "react";
import netflixx from "../Assets/Images/netflixx.jpg";
import netlogo from "../Assets/Images/netlogo.png";
import videoone from "../Assets/Images/video1.mp4";
import phonescreen from "../Assets/Images/phonescreen.jpg";
import load from "../Assets/Images/load.gif";
import strangerthings from "../Assets/Images/strangerthings.jpg";
import kids from "../Assets/Images/kids.jpg";
import { Accordion } from "flowbite-react";


export default function Home() {
  return (
    <div className="">
      <div className="">
        <div className="absolute ml-4 mt-[-1%] ">
          <img src={netlogo} className="h-36 w-54"></img>
        </div>
        <div className="absolute mt-8  ml-[92%]">
          <button
            className="text-white text-lg font-sans bg-red-600 h-10 w-24   rounded-lg"
            type="button"
          >
            Sign In
          </button>
        </div>

        <div className="absolute mt-[22%]  ">
          <p className="text-white font-bold text-7xl ml-40 font-sans">
            Unlimited movies, Tv shows, and more
          </p>
          <p className="text-white font-normal font-sans  text-3xl mt-5 ml-[40%]">
            Watch anywhere.Cancel anytime.
          </p>
          <p className="text-white font-normal font-sans  text-2xl mt-5 ml-[25%]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className="flex flex-row">
            <input
              className="text-white shadow-lg  border-slate-400 bg-transparent font-normal font-sans  text-2xl mt-5 ml-[27%] h-16 w-[34%] rounded-lg"
              type="email"
              placeholder="Email address"
            ></input>
            <button
              className="text-white font-sans text-3xl bg-red-600 ml-2 h-16 w-[17%] mt-5  rounded-lg"
              type="button"
            >
              Get Started
            </button>
          </div>
        </div>

        <img src={netflixx} className=""></img>
      </div>


      <div className="bg-black text-white  flex flex-row border-solid border-gray-600 border-8">

        <div>
     <p className="pt-60  font-bold text-7xl ml-11 font-sans">Enjoy on your TV</p> 
    <p className="pb-60 font-normal font-sans  text-3xl mt-5 ml-11 w-[46%]">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p> 
    </div>

    <div>
      <video className=" pt-60 w-4/5 rounded-lg opacity-80" autoPlay loop muted>
      <source src={videoone} type="video/mp4"/>
     </video>
    </div>


    </div>

    <div className="bg-black text-white  flex flex-row border-solid border-gray-600 border-8 ">

      <div className="pt-58">
         <img src={phonescreen} className= "ml-28 h-[68%] w-[150%]"></img>
      </div>

      <div className=" bg-black flex flex-row w-[28%] h-28 rounded-lg border-gray-600 border-4 mt-96 absolute ml-[12%] ">
      <img src={strangerthings} className="h-24 w-20 ml-4"></img>

        <div className=" mt-7 ml-5 w-36 font-sans text-xl ">
         <p>Stranger Things</p>
        <p className="text-blue-600">downloading</p>
        </div>
      <div className="pl-28 mt-7">
        <img src={load} className="h-14 w-14"></img>
      </div>
      </div>

     <div>
      <p className=" bg-black-100 pt-60  font-bold text-7xl w-[76%] ml-[20%] font-sans">Download your shows to watch offline</p> 
    <p className="pb-60 font-normal font-sans  text-3xl mt-5 ml-[20%] w-[80%]">Save your favorites easily and always have something to watch.</p> 
    </div>
    </div>

    <div className="bg-black text-white  border-solid border-gray-600 border-8">
     <p className="pt-60  font-bold text-7xl w-[28%] ml-[17%] font-sans">Watch Everywhere</p> 
    <p className="pb-60 font-normal font-sans  text-3xl mt-5 ml-[17%] w-[30%]">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p> 
    </div>


    <div className="bg-black text-white border-solid border-gray-600 border-8 flex">
      <div>
      <img src={kids} className="pt-20"></img>
      </div>
      <div>
     <p className=" pt-28  font-bold text-7xl w-[59%] ml-[28%] font-sans">Create profiles for kids</p> 
    <p className="pb-28 font-normal font-sans  text-3xl mt-5 ml-[28%] w-[59%]">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p> 
    </div>
    </div>
        

        <div>
          <p className="text-center   font-bold text-7xl">Frequently Asked Questions.</p>
          
        </div>
      
        <Accordion collapseAll className="font-mono font-semibold text-[16px]">
        <Accordion.Panel>
          <Accordion.Title className="flex justify-between w-full bg-slate-400"  >What are your services?</Accordion.Title>
          <Accordion.Content className="ml-4">
            <ul className="text-sm list-disc">
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Birth Chart Analysis
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Astrological Consultations
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Compatibility Readings
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Predictive Astrology
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Astrological Remedies
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Career Guidance
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Love and Relationship Guidance
              </li>
              <li className=" text-gray-500 dark:text-gray-400">
                Karmic and Spiritual Astrology
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="flex justify-between w-full bg-slate-400"  >What are your services?</Accordion.Title>
          <Accordion.Content className="ml-4">
            <ul className="text-sm list-disc">
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Birth Chart Analysis
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Astrological Consultations
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Compatibility Readings
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Predictive Astrology
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Astrological Remedies
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Career Guidance
              </li>
              <li className="mb-2 text-gray-500 dark:text-gray-400">
                Love and Relationship Guidance
              </li>
              <li className=" text-gray-500 dark:text-gray-400">
                Karmic and Spiritual Astrology
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        
        </Accordion>
        

        <div className="bg-black text-white  flex flex-row border-solid border-gray-600 border-8">
          
          <div className="pt-28 pl-16 font-sans text-lg">
          <p className="text-xl pb-5">Questions? Contact us.</p>
          <p className="pb-5">FAQ</p>
          <p className="pb-5">Investor Relations</p>
          <p className="pb-5">Privacy</p>
          <p className="pb-5">Speed Test</p>
          </div>


          <div className="pt-40 pl-40 font-sans text-lg">
            <p className="pb-5">Help Center</p>
            <p className="pb-5">Jobs</p>
            <p className="pb-5">Cookie Preferences</p>
            <p className="pb-5">Legal Notices</p>
          </div>


          <div className="pt-40 pl-56 font-sans text-lg">
            <p className="pb-5">Account</p>
            <p className="pb-5">Ways to Watch</p>
            <p className="pb-5">Corporate In formation</p>
            <p className="pb-5">Only on Netflix</p>
          </div>

          <div className="pt-40 pb-40 pl-56 font-sans text-lg">
            <p className="pb-5">Media Center</p>
            <p className="pb-5">Terms of Use</p>
            <p className="pb-5">Contact Us</p>
          </div>

    </div>

    </div>
  );
}
