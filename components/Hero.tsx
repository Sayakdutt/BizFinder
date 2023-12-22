import { category } from "@/data/category";
import Image from "next/image";
import {useState} from 'react';



const Hero = ({userInput}: any) => {
  const [searchInput,setSearchInput] = useState<string>()
  return (
    <div className="text-center">
      <div>
        <Image
          src="/hero.png"
          alt="Hero Image"
          height={200}
          width={800}
          className="w-full absolute mt-[-50px]"
        />
      </div>
      <div className="mt-[70px]">
        <h2 className="text-6xl text-blue-500 tracking-wider font-bold">
          Discover
        </h2>
        <h2 className="text-[20px]">Your Amazing City</h2>
      </div>
      <div className="mt-5 flex justify-center">
        <input
          type="text"
          placeholder="Search Anything"
          className="z-20 bg-white p-3 border-[1px] rounded-full px-5 w-[46%] shadow-sm outline-blue-400 font-bold transperant"
          onChange={(e)=>setSearchInput(e.target.value)}
        />
        <button className="bg-blue-600 rounded-full p-3 m-1 shadow-sm z-10 cursor-pointer hover:scale-105 transition-all" onClick={()=>userInput(searchInput)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      <div className="mt-5 flex flex-col justify-center items-center">
        <h2 className="font-semibold">Or Browse through category</h2>
        <div className="grid grid-cols-3 md:grid-cols-7 w-[50%] justify-center gap-5 mt-3">
          {
            category.map((item,index)=>(
              <button key={index} className="text-2xl border-[1px] w-[60px] p-4 bg-white rounded-full z-10 hover:border-blue-600 hover:scale-110 cursor-pointer"
                onClick={()=>userInput(item.name)}>
                {item.icon}
              </button>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Hero;
