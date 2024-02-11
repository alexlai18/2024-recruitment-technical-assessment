import { useState } from "react";
import logo from "../assets/unilectives.svg";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <div className={`fixed flex flex-col ${open ? "w-72 z-40" : "w-20 z-50 items-center"} h-screen gap-4 p-4 duration-150 bg-gray-50`}>
      <div className="flex flex-row items-center justify-between h-10 p-2">
        <div className="group relative inline-block"><a href="/"><img alt="logo" fetchpriority="high" width="33" height="33" decoding="async" data-nimg="1" src={logo}/></a></div>
        <p className={`${open ? "text-xl font-semibold whitespace-nowrap" : "hidden"}`}>uni-lectives</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className={`${open ? "w-12 h-12 p-3 rotate-90 hover:bg-slate-200 rounded-xl cursor-pointer" : "hidden"}`} onClick={() => toggleNavbar()}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"></path>
        </svg>
      </div>
      <div className="flex flex-col h-full w-full justify-between border-t-2 border-gray-200">
        <div className={`flex flex-col gap-3 py-3 ${open ? "items-left" : "items-center"}`}>
          <a className="flex flex-row items-center hover:bg-slate-200 rounded-xl" href="/">
            <div className="group relative inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-12 h-12 p-3 hover:bg-slate-200 rounded-xl">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path>
              </svg>
              <div className=" scale-0 group-hover:scale-100 absolute left-full top-1/2 transform -translate-y-1/2 ml-1 whitespace-nowrap">
                <div className="relative">
                  <div className=" absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-r-8 border-b-4 border-b-transparent border-r-white"></div>
                  <span className="py-2 px-4 text-sm text-black whitespace-nowrap rounded-md bg-white shadow-lg">Browse Courses</span>
                </div>
              </div>
            </div>
            <span className={`${open ? "whitespace-nowrap" : "hidden"}`}>Browse Courses</span>
          </a>
          <a className="flex flex-row items-center hover:bg-slate-200 rounded-xl" href="/terms-and-conditions">
            <div className="group relative inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-12 h-12 p-3 hover:bg-slate-200 rounded-xl">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
              </svg>
              <div className=" scale-0 group-hover:scale-100 absolute left-full top-1/2 transform -translate-y-1/2 ml-1 whitespace-nowrap">
                <div className="relative">
                  <div className=" absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-r-8 border-b-4 border-b-transparent border-r-white"></div>
                  <span className="py-2 px-4 text-sm text-black whitespace-nowrap rounded-md bg-white shadow-lg">Terms and Conditions</span>
                </div>
              </div>
            </div>
            <span className={`${open ? "whitespace-nowrap" : "hidden"}`}>Terms and Conditions</span>
          </a>
        </div>
        <div className={`flex flex-col gap-4 py-2 ${open ? "items-left" : "items-center"}`}>
          <div className={`flex cursor-pointer ${open ? "flex-row justify-between gap-2 items-center" : "flex-col gap-3"}`}>
            <div className={`${open ? "hidden" : "group relative inline-block"}`} onClick={() => toggleNavbar()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-12 h-12 p-3 rotate-90 hover:bg-slate-200 rounded-xl cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"></path>
              </svg>
              <div className=" scale-0 group-hover:scale-100 absolute left-full top-1/2 transform -translate-y-1/2 ml-1 whitespace-nowrap">
                <div className="relative">
                  <div className=" absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-r-8 border-b-4 border-b-transparent border-r-white"></div>
                  <span className="py-2 px-4 text-sm text-black whitespace-nowrap rounded-md bg-white shadow-lg">Expand</span>
                </div>
              </div>
            </div>
            <div className="group relative inline-block w-full">
              <a href="/" className={`${open ? "flex flex-row w-full items-center hover:bg-slate-200 rounded-xl cursor-pointer" : "hidden"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-12 h-12 p-3 hover:bg-slate-200 rounded-xl cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>My Account</span>
              </a>
              <div className={`${open ? "hidden" : "scale-0 group-hover:scale-100 absolute left-full top-1/2 transform -translate-y-1/2 ml-1 whitespace-nowrap"}`}>
                <div className="relative">
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-r-8 border-b-4 border-b-transparent border-r-white"></div>
                  <span className="py-2 px-4 text-sm text-black whitespace-nowrap rounded-md bg-white shadow-lg">My Account</span>
                </div>
              </div>
            </div>
            <div className="group relative inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-12 h-12 p-3 hover:bg-slate-200 rounded-xl cursor-default">
                <title>Dark Mode</title>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path>
              </svg>
              <div className={`${open ? "hidden" : "scale-0 group-hover:scale-100 absolute left-full top-1/2 transform -translate-y-1/2 ml-1 whitespace-nowrap"}`}>
                <div className="relative">
                  <div className=" absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-r-8 border-b-4 border-b-transparent border-r-white"></div>
                  <span className="py-2 px-4 text-sm text-black whitespace-nowrap rounded-md bg-white shadow-lg">COMING SOON</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${open ? "" : "group relative inline-block"}`}>
            <button className={`${open ? "flex flex-row w-full items-center justify-center rounded-xl gap-2 hover:bg-slate-200" : "hidden"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className={`${open ? "w-6 py-3" : "w-12 p-3"} h-12 rotate-180`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"></path>
              </svg>
              <span>Login</span>
            </button>
            <div className={`${open ? "hidden" : "scale-0 group-hover:scale-100 absolute left-full top-1/2 transform -translate-y-1/2 ml-1 whitespace-nowrap"}`}>
              <div className="relative">
                <div className=" absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-r-8 border-b-4 border-b-transparent border-r-white"></div>
                <span className="py-2 px-4 text-sm text-black whitespace-nowrap rounded-md bg-white shadow-lg">Login</span>
              </div>
            </div>
          </div>
          <div className={`${open ? "flex flex-col gap-3 max-h-20" : "hidden"}`}>
            <span className="text-xs">
              By using this site, you agree to be happy. Thanks for looking at my submission!
            </span>
            <span className="text-xs">
              © Alex Lai
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;