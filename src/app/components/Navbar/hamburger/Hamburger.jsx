"use client";
import React, { useState } from 'react'
import { HiOutlineBars3, HiOutlineBars3CenterLeft } from "react-icons/hi2";

const Hamburger = () => {
    const [hamMenu, setHamMenu] = useState(false)
  return (
    <div className="flex p-2 hover:bg-slate-50 rounded-md items-center">
        {hamMenu ? <HiOutlineBars3CenterLeft className="text-3xl" onClick={()=>setHamMenu(false)} /> : <HiOutlineBars3 className="text-3xl"  onClick={()=>setHamMenu(true)}/>}
        <div className={`${hamMenu ? "block " : "hidden -left-full"} shadow-md MegaMenu transition-all ease-in duration-300 delay-100`}>
            <div className="flex min-h-[60vh] w-full">
                <div className="flex flex-col">
                    <ul>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hamburger