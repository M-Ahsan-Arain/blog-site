"use client";
import Image from "next/image";
import {useState} from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
    <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
      Welcome to Blog Site
    </h1>
    <h1>Count: {count}</h1>
    <div className="flex flex-col gap-3">
    <button onClick={()=>{setCount(count + 1)}} className="hover:cursor-pointer p-3 bg-black text-white w-100">Inc</button>
    <button onClick={()=>{setCount(count - 1)}} className="hover:cursor-pointer p-3 bg-black text-white w-100">Dec</button>
    </div>
    
    </>
  );
}
