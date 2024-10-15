import React from 'react'
import Logo2 from '../../assets/wflogo2.png'
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      {/* Main Footer Container */}
      <div className='bg-[#004e36] text-white font-semibold flex flex-col lg:flex-row pb-[50px]'>
        
        {/* Left Section */}
        <div>
          <img className='hidden lg:block w-[58px] h-[51px] ml-[140px]' src={Logo2} alt="logo2" />
          
          <ul className='flex flex-col lg:flex-row gap-5 lg:gap-[80px] p-[20px] lg:ml-[100px] text-[1.2em] lg:text-[1.9em]'>

            <li className='lg:flex lg:flex-col'>
              Shopping
              <ul className='mt-3 space-y-2 text-[0.9em] lg:text-[0.7em] underline underline-offset-1'>
                <li><a href="https://wwws-uk1.givex.com/cws4.0/wfmuk/">Gift Cards</a></li>
                <li><a href="https://deliveroo.co.uk/brands/whole-foods-market">Deliveroo</a></li>
                <li><Link to={"/Recipe"}>Recipes</Link></li>
              </ul>
            </li>

            {/* Mission in Action Section */}
            <li className='lg:flex lg:flex-col'>
              Mission in <br /> Action
              {/* Additional Links (always visible) */}
              <ul className='mt-3 space-y-2 text-[0.9em] lg:text-[0.7em] underline underline-offset-1'>
                <li><a href="#">Quality Standards</a></li>
                <li><a href="#">Community Giving</a></li>
                <li><a href="#">Environmental Stewardship</a></li>
              </ul>
            </li>

            {/* About Section */}
            <li className='lg:flex lg:flex-col'>
              About
              {/* Additional Links (always visible) */}
              <ul className='mt-3 space-y-2 text-[0.9em] lg:text-[0.7em] underline underline-offset-1'>
                <li><a href="#">Book a Demo</a></li>
                <li><a href="#">Our Values</a></li>
                <li><a href="#">Information for Potential Suppliers</a></li>
                <li><a href="#">Gender Pay Gap</a></li>
                <li><a href="#">Modern Slavery Act</a></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className='lg:ml-[160px] mx-5' >
          {/* Help Section */}
          <div className='mt-[40px] lg:mt-[120px]'>
            <p className='text-[1.5em] lg:text-[1.9em] font-semibold'>Need Help?</p>
            <a className='flex underline underline-offset-4 mt-5 lg:mt-7 font-bold' href="#">Contact Us</a>

            {/* Social Media */}
            <div className='mt-10'>
              <p className='text-[1.5em] lg:text-[1.9em] font-semibold'>Connect With Us</p>
              <ul className='flex gap-3 pt-5'>
                <li className='bg-white text-[#004e36] p-2 rounded-full'><a href="https://www.instagram.com/wholefoodsuk/" target="_blank" aria-label="Instagram"><FaInstagram /></a></li>
                <li className='bg-white text-[#004e36] p-2 rounded-full'><a href="https://www.facebook.com/wholefoodsUK/" target="_blank" aria-label="Facebook"><FaFacebookF /></a></li>
                <li className='bg-white text-[#004e36] p-2 rounded-full'><a href="https://x.com/i/flow/login?redirect_after_login=%2Fwholefoodsuk" target="_blank" aria-label="Twitter"><FaTwitter /></a></li>
              </ul>
            </div>

            {/* Sign up */}
            <div className='pt-10'>
              <button className='bg-transparent border p-3 w-full lg:w-[194px] hover:bg-white hover:text-[#004e36]'>Sign up for email</button>
              <p className='text-[0.8em] pt-2'>*This link will take you to our sign up page on Amazon website.</p>
            </div>
          </div>
        </div>     
      </div>

      {/* Bottom Footer Section */}
      <div className='bg-[rgb(0,111,64)] text-white pt-2 text-center pb-10'>
        <p className='text-[0.8em]'>Copyright 2022 Amazon Technologies, Inc. - <a className='underline underline-offset-4' href="#">Privacy Notice</a> | <a className='underline underline-offset-4' href="#">Terms and Conditions</a> | <a className='underline underline-offset-4' href="#">Cookie Notice</a></p>
        <p className='text-[0.8em] pt-5 pb-12'> <a className='underline underline-offset-4' href="#">WholeFoodsMarket.co.uk</a> is the trading name of Fresh & Wild Limited. Registered in England and Wales. Address: 63 – 97 Kensington High Street, London, W8 5SE, United Kingdom. Registration Number: 3576009. VAT: 722 786 517 <br />
        "Whole Foods Market" is a registered trademark of Amazon Technologies, Inc.</p>
        <a className='underline underline-offset-4 font-semibold' href="#">Corporate Policies</a>
      </div>
    </footer>
  )
}

export default Footer;
