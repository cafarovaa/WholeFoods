import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { FiX } from "react-icons/fi";
import Logo from '../../assets/wflogo.png'
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#004e36] text-white">
      {/* Desktop Navigation */}
      <div className='hidden lg:flex items-center h-[70px] px-10 space-x-9'>
      <Link to={"/"}><img className='w-[144px] h-[37px]' src={Logo} alt="Whole Foods Market" /></Link>
        <div className="flex space-x-9">
          <Link to={"/Order"} className="font-semibold text-[1.1em] hover:underline">Order Online</Link>
          <Link to={"/Recipe"} className="font-semibold text-[1.1em] hover:underline">Recipes</Link>
          <Link to={"/store"} className="font-semibold text-[1.1em] hover:underline">Find a Store</Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden relative">
        <div className="flex items-center justify-between px-4 py-2 relative z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none absolute left-4">
            {isOpen ? <FiX  size={30}/> : <IoMdMenu  size={30} />}
          </button>
          <Link to={"/"}  ><img className='w-[116px] h-[30px] mx-[100%]' src={Logo} alt="Whole Foods Market" /></Link>
        </div>
        {isOpen && (
          <div className="fixed inset-0 bg-[#004e36] z-40 flex items-center overflow-hidden">
            <div className="w-full space-y-6 px-4">
              <Link onClick={()=> setIsOpen(!isOpen)} to={"/Order"} className="block text-[3em] font-semibold hover:underline">Order Online</Link>
              <Link onClick={()=> setIsOpen(!isOpen)} to={"/Recipe"} className="block text-[3em] font-semibold hover:underline">Recipes</Link>
              <Link onClick={()=> setIsOpen(!isOpen)} to={"/Store"} className="block text-[3em] font-semibold hover:underline">Find a Store</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header






